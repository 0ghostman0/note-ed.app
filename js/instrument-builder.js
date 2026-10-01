// One builder for every instrument. Never silently drop a requested note.
window.InstrumentBuilder = (() => {
  function build(instrument) {
    const theory = window.ScaleLibrary;
    const byPitch = new Map(Object.entries(instrument.notes).filter(([note]) => !note.includes('-')).map(([note, fingering]) => [theory.parse(note).midi, fingering]));
    const resolve = note => instrument.notes[note] && note.includes('-') ? instrument.notes[note] : byPitch.get(theory.parse(note).midi);
    const levels = {}, sequences = {}, errors = {};
    function add(name, pool, sequence = pool) {
      const missing = pool.filter(note => !resolve(note));
      if (missing.length) {
        errors[name] = `No fingering for ${missing.join(', ')}`;
        return;
      }
      levels[name] = Object.fromEntries([...new Set(pool)].map(note => [note, resolve(note)]));
      sequences[name] = sequence;
    }
    Object.entries(instrument.levels).forEach(([name, notes]) => add(name, notes));
    for (const key of theory.keys) {
      const tonic = theory.transposeTonic(key, instrument.transpose.semitones, instrument.transpose.steps);
      for (const type of Object.keys(theory.patterns)) {
        const roots = type === 'Major' ? instrument.scaleRoots : { ...instrument.scaleRoots, ...instrument.minorRoots };
        // Prefer the selected written tonic's register, then an enharmonic register.
        const equivalent = Object.values(roots).find(root => theory.parse(root).midi % 12 === theory.parse(tonic + '4').midi % 12);
        const reference = roots[tonic] || equivalent || instrument.chromaticRoot;
        const referencePitch = theory.parse(reference).midi;
        let root = tonic + theory.parse(reference).octave;
        while (theory.parse(root).midi - referencePitch > 6) root = tonic + (theory.parse(root).octave - 1);
        while (referencePitch - theory.parse(root).midi > 6) root = tonic + (theory.parse(root).octave + 1);
        let sequence = theory.sequence(root, type);
        // Keep complete scales; move a whole octave only when the chosen register is unavailable.
        for (const shift of [0, -1, 1, -2, 2]) {
          const candidate = theory.sequence(tonic + (theory.parse(root).octave + shift), type);
          if (candidate.every(resolve)) { sequence = candidate; break; }
        }
        add(`${key} ${type}`, sequence, sequence);
      }
    }
    const chromatic = theory.chromatic(instrument.chromaticRoot);
    add('Chromatic Scale', chromatic.pool, chromatic.sequence);
    window.instrumentClef = instrument.clef;
    window.fingeringsByLevel = levels;
    window.scaleSequences = sequences;
    window.instrumentLevelErrors = errors;
    window.instrumentDefinition = instrument;
    return { levels, sequences, errors };
  }
  return { build };
})();
