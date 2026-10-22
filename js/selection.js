// Populate choices from the same definitions used by the practice screen.
(() => {
  const instrumentSelect = document.getElementById('instrument-select');
  const levelSelect = document.getElementById('level-select');
  const keySelect = document.getElementById('keyCenter');
  const typeSelect = document.getElementById('scaleType');
  const customClef = document.getElementById('custom-clef');
  const customLow = document.getElementById('custom-low');
  const customHigh = document.getElementById('custom-high');
  const customKey = document.getElementById('custom-key');
  const start = document.querySelector('button[onclick="startPractice()"]');
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  start.before(status);
  const cache = new Map();
  let generation = 0, data;

  keySelect.replaceChildren(...ScaleLibrary.keys.map(key => new Option(key, key)));
  typeSelect.replaceChildren(...[...Object.keys(ScaleLibrary.patterns), 'Chromatic'].map(type => new Option(type, type)));
  customKey.replaceChildren(...ScaleLibrary.keys.map(key => new Option(key, key)));

  function resolveFingering(note) {
    if (!data?.definition?.notes) return null;
    if (data.definition.notes[note]) return data.definition.notes[note];
    const target = ScaleLibrary.parse(note).midi;
    return Object.entries(data.definition.notes).find(([name]) => {
      if (name.includes('-')) return false;
      try { return ScaleLibrary.parse(name).midi === target; } catch { return false; }
    })?.[1] || null;
  }

  function instrumentStaffRange() {
    const parsed = Object.keys(data.definition.notes)
      .filter(note => !note.includes('-'))
      .map(note => {
        try { return ScaleLibrary.parse(note); } catch { return null; }
      })
      .filter(Boolean);

    const minMidi = Math.min(...parsed.map(note => note.midi));
    const maxMidi = Math.max(...parsed.map(note => note.midi));

    let start = null;
    let end = null;
    for (let octave = 0; octave <= 8; octave++) {
      for (const letter of 'CDEFGAB') {
        const name = `${letter}${octave}`;
        const midi = ScaleLibrary.parse(name).midi;
        if (midi >= minMidi && start === null) start = ScaleLibrary.diatonicIndex(name);
        if (midi <= maxMidi) end = ScaleLibrary.diatonicIndex(name);
      }
    }

    const notes = [];
    for (let i = start; i <= end; i++) notes.push(ScaleLibrary.naturalFromDiatonicIndex(i));
    return notes;
  }

  function populateCustomRange() {
    const choices = instrumentStaffRange();
    const previousLow = customLow.value;
    const previousHigh = customHigh.value;
    customLow.replaceChildren(...choices.map(note => new Option(note, note)));
    customHigh.replaceChildren(...choices.map(note => new Option(note, note)));

    const first = choices[0];
    const last = choices[choices.length - 1];
    customLow.value = choices.includes(previousLow) ? previousLow : first;
    customHigh.value = choices.includes(previousHigh) ? previousHigh : last;
  }

  function customSelection() {
    try {
      const notes = ScaleLibrary.customRange(customLow.value, customHigh.value, customKey.value);
      const missing = notes.filter(note => !resolveFingering(note));
      return { notes, missing, error: '' };
    } catch (error) {
      return { notes: [], missing: [], error: error.message };
    }
  }

  function update() {
    if (!data) return;
    for (const option of keySelect.options) {
      const name = `${option.value} ${typeSelect.value}`;
      option.disabled = typeSelect.value !== 'Chromatic' && !data.levels[name];
    }

    const selectedType = document.querySelector('input[name="level-type"]:checked')?.value || 'level';
    status.textContent = '';
    start.disabled = false;

    if (selectedType === 'custom') {
      const custom = customSelection();
      if (custom.error) {
        start.disabled = true;
        status.textContent = custom.error;
      } else if (custom.missing.length) {
        start.disabled = true;
        status.textContent = `This instrument has no fingering for: ${custom.missing.join(', ')}`;
      }
    } else {
      const name = getSelectedLevel();
      start.disabled = !data.levels[name];
      status.textContent = start.disabled ? (data.errors[name] || 'This selection is unavailable.') : '';
    }

    start.style.opacity = start.disabled ? '0.5' : '1';
  }

  async function load() {
    const ticket = ++generation;
    const id = instrumentSelect.value;
    data = null;
    start.disabled = true;
    status.textContent = 'Loading instrument…';
    try {
      if (!cache.has(id)) {
        const result = await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = `js/instruments/${id}.js`;
          script.onload = () => {
            resolve({
              levels: window.fingeringsByLevel,
              errors: window.instrumentLevelErrors,
              definition: window.instrumentDefinition
            });
            script.remove();
          };
          script.onerror = () => { script.remove(); reject(new Error('Could not load instrument.')); };
          document.body.appendChild(script);
        });
        cache.set(id, result);
      }
      if (ticket !== generation) return;
      data = cache.get(id);
      const previous = levelSelect.value;
      levelSelect.replaceChildren(...Object.keys(data.definition.levels).map(name => {
        const option = new Option(name, name);
        option.disabled = !data.levels[name];
        return option;
      }));
      levelSelect.value = data.levels[previous] ? previous : (data.levels['Level 1'] ? 'Level 1' : levelSelect.options[0]?.value);
      customClef.value = data.definition.clef === 'bass' ? 'bass' : 'treble';
      populateCustomRange();
      update();
    } catch (error) {
      if (ticket === generation) status.textContent = error.message;
    }
  }

  instrumentSelect.addEventListener('change', load);
  [
    levelSelect,
    keySelect,
    typeSelect,
    customClef,
    customLow,
    customHigh,
    customKey,
    ...document.querySelectorAll('input[name="level-type"]'),
    ...document.querySelectorAll('input[name="custom-display"]')
  ].forEach(element => element.addEventListener('change', update));

  load();
})();
