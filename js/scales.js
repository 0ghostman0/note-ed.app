// Shared written-pitch theory. Labels are concert pitch; fingerings are written pitch.
window.ScaleLibrary = (() => {
  const letters = 'CDEFGAB';
  const natural = [0, 2, 4, 5, 7, 9, 11];
  const keys = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  const patterns = {
    Major: [0, 2, 4, 5, 7, 9, 11, 12],
    'Natural Minor': [0, 2, 3, 5, 7, 8, 10, 12],
    'Harmonic Minor': [0, 2, 3, 5, 7, 8, 11, 12],
    'Melodic Minor': [0, 2, 3, 5, 7, 9, 11, 12],
    Blues: [0, 3, 5, 6, 7, 10, 12]
  };
  // Letter offsets from the tonic: 1, b3, 4, b5, 5, b7, octave.
  // Other scales use consecutive letters by default.
  const letterOffsets = { Blues: [0, 2, 3, 4, 4, 6, 7] };

  // Major-key signatures in standard order. Custom levels use written pitch.
  const keySignatures = {
    C: [],
    F: ['Bb'],
    Bb: ['Bb', 'Eb'],
    Eb: ['Bb', 'Eb', 'Ab'],
    Ab: ['Bb', 'Eb', 'Ab', 'Db'],
    Db: ['Bb', 'Eb', 'Ab', 'Db', 'Gb'],
    Gb: ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'],
    Cb: ['Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'Fb'],
    G: ['F#'],
    D: ['F#', 'C#'],
    A: ['F#', 'C#', 'G#'],
    E: ['F#', 'C#', 'G#', 'D#'],
    B: ['F#', 'C#', 'G#', 'D#', 'A#'],
    'F#': ['F#', 'C#', 'G#', 'D#', 'A#', 'E#'],
    'C#': ['F#', 'C#', 'G#', 'D#', 'A#', 'E#', 'B#']
  };

  function parse(note) {
    const match = /^([A-G])(#{1,3}|b{1,3})?(-?\d+)$/.exec(note);
    if (!match) throw new Error(`Invalid note: ${note}`);
    const index = letters.indexOf(match[1]);
    const accidental = match[2] || '';
    const alter = accidental.startsWith('#') ? accidental.length : -accidental.length;
    const octave = Number(match[3]);
    return { index, octave, midi: (octave + 1) * 12 + natural[index] + alter };
  }

  function spell(index, octave, midi) {
    const difference = midi - ((octave + 1) * 12 + natural[index]);
    return letters[index] + (difference >= 0 ? '#'.repeat(difference) : 'b'.repeat(-difference)) + octave;
  }

  function transposeTonic(key, semitones, steps) {
    const source = parse(key + '4');
    const position = source.index + steps;
    return spell(position % 7, 4 + Math.floor(position / 7), source.midi + semitones).replace(/-?\d+$/, '');
  }

  function ascending(root, pattern, offsets) {
    const source = parse(root);
    return pattern.map((interval, degree) => {
      const position = source.index + (offsets ? offsets[degree] : degree);
      return spell(position % 7, source.octave + Math.floor(position / 7), source.midi + interval);
    });
  }

  function sequence(root, type) {
    if (!patterns[type]) throw new Error(`Unknown scale type: ${type}`);
    const up = ascending(root, patterns[type], letterOffsets[type]);
    if (type !== 'Melodic Minor') return up;
    return up.concat(ascending(root, patterns['Natural Minor']).slice(0, -1).reverse());
  }

  function chromatic(root) {
    const start = parse(root).midi;
    const sharp = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const flat = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    const note = (midi, names) => names[((midi % 12) + 12) % 12] + (Math.floor(midi / 12) - 1);
    return { sequence: Array.from({ length: 13 }, (_, i) => note(start + i, sharp)),
      pool: [...new Set(Array.from({ length: 13 }, (_, i) => [note(start + i, sharp), note(start + i, flat)]).flat())] };
  }

  function diatonicIndex(note) {
    const p = parse(note);
    return p.octave * 7 + p.index;
  }

  function naturalFromDiatonicIndex(index) {
    const octave = Math.floor(index / 7);
    const letterIndex = ((index % 7) + 7) % 7;
    return letters[letterIndex] + octave;
  }

  function accidentalForLetter(key, letter) {
    const signature = keySignatures[key] || [];
    const match = signature.find(note => note[0] === letter);
    return match ? match.slice(1) : '';
  }

  function applyKeySignature(note, key) {
    const p = parse(note);
    const letter = letters[p.index];
    return `${letter}${accidentalForLetter(key, letter)}${p.octave}`;
  }

  function customRange(low, high, key = 'C') {
    const start = diatonicIndex(low);
    const end = diatonicIndex(high);
    if (end < start) throw new Error('Highest note must be above the lowest note.');
    const notes = [];
    for (let i = start; i <= end; i++) {
      notes.push(applyKeySignature(naturalFromDiatonicIndex(i), key));
    }
    return notes;
  }

  return {
    keys,
    patterns,
    keySignatures,
    parse,
    transposeTonic,
    sequence,
    chromatic,
    diatonicIndex,
    naturalFromDiatonicIndex,
    accidentalForLetter,
    applyKeySignature,
    customRange
  };
})();
