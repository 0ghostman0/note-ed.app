// Populate choices from the same definitions used by the practice screen.
(() => {
  const instrumentSelect = document.getElementById('instrument-select');
  const levelSelect = document.getElementById('level-select');
  const keySelect = document.getElementById('keyCenter');
  const typeSelect = document.getElementById('scaleType');
  const start = document.querySelector('button[onclick="startPractice()"]');
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  start.before(status);
  const cache = new Map();
  let generation = 0, data;
  keySelect.replaceChildren(...ScaleLibrary.keys.map(key => new Option(key, key)));
  typeSelect.replaceChildren(...[...Object.keys(ScaleLibrary.patterns), 'Chromatic'].map(type => new Option(type, type)));
  function update() {
    if (!data) return;
    for (const option of keySelect.options) {
      const name = `${option.value} ${typeSelect.value}`;
      option.disabled = typeSelect.value !== 'Chromatic' && !data.levels[name];
    }
    const name = getSelectedLevel();
    start.disabled = !data.levels[name];
    status.textContent = start.disabled ? (data.errors[name] || 'This selection is unavailable.') : '';
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
          script.onload = () => { resolve({ levels: window.fingeringsByLevel, errors: window.instrumentLevelErrors, definition: window.instrumentDefinition }); script.remove(); };
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
      levelSelect.value = data.levels[previous] ? previous : 'Level 1';
      update();
    } catch (error) {
      if (ticket === generation) status.textContent = error.message;
    }
  }
  instrumentSelect.addEventListener('change', load);
  [levelSelect, keySelect, typeSelect, ...document.querySelectorAll('input[name="level-type"]')].forEach(element => element.addEventListener('change', update));
  load();
})();
