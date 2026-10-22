// Get URL parameters
const params = new URLSearchParams(window.location.search);

// === CONSTANTS ===
const TIMER_DURATION = parseInt(params.get('timer')) || (3 * 60);
const PERFECT_SCORE = parseInt(params.get('target')) || 25;
const FEEDBACK_DISPLAY_TIME = 2000;

// === GLOBAL VARIABLES ===
let countdownInterval;
let timeRemaining = TIMER_DURATION;
let totalAttempts = 0;
let totalCorrect = 0;
let currentNote = null;
let gameStarted = false;

// === UTILITY FUNCTIONS ===
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function obfuscate(input) {
  const base64 = btoa(input);
  return base64.split('').reverse().join('');
}

function scoreFeedback(color, flashes = 2, duration = 100) {
  const table = document.getElementById("headTable");
  const originalColor = table.style.backgroundColor;
  let count = 0;

  function flash() {
    table.style.backgroundColor = color;
    setTimeout(() => {
      table.style.backgroundColor = originalColor;
      count++;
      if (count < flashes) setTimeout(flash, duration);
    }, duration);
  }

  flash();
}

function resolveInstrumentFingering(note) {
  const notes = window.instrumentDefinition?.notes || {};
  if (notes[note]) return notes[note];
  const target = ScaleLibrary.parse(note).midi;
  const match = Object.entries(notes).find(([name]) => {
    if (name.includes('-')) return false;
    try { return ScaleLibrary.parse(name).midi === target; } catch { return false; }
  });
  return match?.[1] || null;
}

// === UI CONTROL FUNCTIONS ===
function showCheckButton() {
  gameStarted = true;
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('check-button').style.display = 'inline-block';
  document.getElementById('noteDisplay').classList.add('active');
  document.getElementById('fingering-diagram').classList.add('game-active');
}

function showStartButton() {
  gameStarted = false;
  document.getElementById('start-button').style.display = 'inline-block';
  document.getElementById('check-button').style.display = 'none';
  document.getElementById('noteDisplay').classList.remove('active');
  document.getElementById('fingering-diagram').classList.remove('game-active');
}

// === TIMER FUNCTIONS ===
function startCountdown() {
  updateTimerDisplay();
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Try again!");
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerElement = document.getElementById("timer");
  if (timerElement) timerElement.textContent = formatTime(timeRemaining);
}

function resetTimer() {
  clearInterval(countdownInterval);
  timeRemaining = TIMER_DURATION;
  updateTimerDisplay();
}

// === SCORE FUNCTIONS ===
function resetScore() {
  totalAttempts = 0;
  totalCorrect = 0;
  const scoreText = document.getElementById("score-text");
  if (scoreText) scoreText.textContent = `Score: 0 / 0`;
  const resultDiv = document.getElementById("rightornot");
  if (resultDiv) {
    resultDiv.textContent = "";
    resultDiv.classList.remove("text-green-600", "text-red-600");
  }
}

function updateScoreDisplay() {
  const scoreText = document.getElementById("score-text");
  if (scoreText) scoreText.textContent = `Score: ${totalCorrect} / ${totalAttempts}`;
}

function showFeedback(isCorrect) {
  if (!isCorrect) scoreFeedback("red", 2, 100);
}

// === NOTE FUNCTIONS ===
function getRandomNote() {
  if (!window.allNotes || window.allNotes.length === 0) {
    console.error("No notes available.");
    return null;
  }
  const index = Math.floor(Math.random() * window.allNotes.length);
  return window.allNotes[index];
}

function initializeNoteRenderer() {
  const noteDisplay = document.getElementById("noteDisplay");
  if (!noteDisplay) {
    console.error("noteDisplay div not found.");
    return;
  }
  noteDisplay.style.display = "block";
  noteDisplay.style.width = "200px";
  noteDisplay.style.maxWidth = "100%";
  noteDisplay.style.height = "140px";
  noteDisplay.style.margin = "0 auto";
  noteDisplay.style.padding = "0";

  if (!window.NoteRenderer) {
    console.error("NoteRenderer not found. Make sure js/note-renderer.js is loaded before js/fingering-practice.js.");
    return;
  }

  NoteRenderer.init("noteDisplay");
  window.__noteRendererInitialized = true;
}

function setNewNote() {
  if (!window.allNotes || window.allNotes.length === 0) {
    console.error("No notes available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * window.allNotes.length);
  currentNote = window.allNotes[randomIndex];
  window.currentNote = currentNote;
  const noteData = window.fingerings[currentNote];

  if (!noteData || !window.NoteRenderer) return;
  if (!window.__noteRendererInitialized) initializeNoteRenderer();

  const clef = window.customClef || noteData.clef || window.instrumentClef || "treble";
  const displayMode = window.customDisplayMode || 'accidentals';
  const key = window.customKey || 'C';
  NoteRenderer.renderNote(currentNote, clef, { key, displayMode });
  clearActiveValves();
}

function updateNoteDisplay(note) {
  if (window.NoteRenderer) {
    const clef = window.customClef || window.instrumentClef || "bass";
    NoteRenderer.renderNote(note, clef, {
      key: window.customKey || 'C',
      displayMode: window.customDisplayMode || 'accidentals'
    });
  }
}

function clearActiveValves() {
  document.querySelectorAll('.valve').forEach(valve => valve.classList.remove('active'));
}

// === FINGERING CHECK FUNCTIONS ===
function checkFingering() {
  if (!currentNote) return;

  const noteData = window.fingerings?.[currentNote];
  const acceptedFingerings = [noteData?.fingering || [], ...(noteData?.alternates || [])];
  const pressedValves = Array.from(document.querySelectorAll('.valve.active')).map(v => v.id);
  const hasHalfHole = ["oboe", "bassoon"].includes((window.currentInstrument || "").toLowerCase());
  const normalizedFingerings = acceptedFingerings.map(ids =>
    hasHalfHole && ids.includes("I") ? [...new Set([...ids, "Ihh"])] : ids
  );

  const isCorrect = normalizedFingerings.some(correctValves =>
    correctValves.length === pressedValves.length &&
    correctValves.every(id => pressedValves.includes(id)) &&
    pressedValves.every(id => correctValves.includes(id))
  );

  totalAttempts++;
  if (isCorrect) {
    totalCorrect++;
    setNewNote();
  }
  showFeedback(isCorrect);
  updateScoreDisplay();
  checkWinConditions();
}

function checkWinConditions() {
  if (totalCorrect === PERFECT_SCORE && totalAttempts === PERFECT_SCORE) {
    clearInterval(countdownInterval);
    handleWin();
  } else if (totalCorrect === PERFECT_SCORE && totalAttempts > PERFECT_SCORE) {
    clearInterval(countdownInterval);
    alert(`You got ${totalCorrect}/${totalAttempts}. Try again for a perfect ${PERFECT_SCORE}/${PERFECT_SCORE}!`);
    resetGame();
  }
}

function resetGame() {
  showStartButton();
  setNewNote();
  resetTimer();
  resetScore();
}

// === REPORT/WIN HANDLING ===
function handleWin() {
  const name = prompt(`You got a perfect ${PERFECT_SCORE}/${PERFECT_SCORE}! Enter your name to save your score:`);
  if (name) {
    const timeUsed = TIMER_DURATION - timeRemaining;
    const timeLimit = TIMER_DURATION;
    const instrument = window.currentInstrument || "Unknown";
    const level = window.currentLevel || "Unknown";
    const rawData = `${name.trim()}|${instrument}|${level}|${PERFECT_SCORE} / ${PERFECT_SCORE}|${timeUsed}|${timeLimit}`;
    const encoded = obfuscate(rawData);
    window.location.href = `report.html?data=${encoded}`;
  }
}

// === SVG HANDLING ===
async function loadSVG(containerId, svgPath) {
  try {
    const res = await fetch(svgPath);
    if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.status} ${res.statusText}`);
    const svgText = await res.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = svgText;
      attachFingeringListeners();
    }
  } catch (err) {
    const container = document.getElementById(containerId);
    if (container) container.innerHTML = `<p style="color: red;">Failed to load instrument diagram. Please refresh the page.</p>`;
  }
}

function loadInstrumentScript(instrument) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `js/instruments/${instrument}.js`;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

// === EVENT LISTENERS ===
function attachFingeringListeners() {
  const isTrombone = (window.currentInstrument || "").toLowerCase() === "trombone";
  const hasHalfHole = ["oboe", "bassoon"].includes((window.currentInstrument || "").toLowerCase());

  document.querySelectorAll(".valve").forEach(el => {
    el.addEventListener("click", () => {
      if (!gameStarted) return;
      if (hasHalfHole && (el.id === "I" || el.id === "Ihh")) {
        const fullHole = document.getElementById("I");
        const halfHole = document.getElementById("Ihh");
        if (el.id === "I") {
          const active = !fullHole.classList.contains("active");
          fullHole.classList.toggle("active", active);
          halfHole.classList.toggle("active", active);
        } else {
          const active = fullHole.classList.contains("active") || !halfHole.classList.contains("active");
          fullHole.classList.remove("active");
          halfHole.classList.toggle("active", active);
        }
      } else {
        el.classList.toggle("active");
      }
    });
  });

  if (isTrombone) setupTromboneHover();
}

function setupTromboneHover() {
  const slideImages = {
    "1": "images/trombone/slide1.jpg", "2": "images/trombone/slide2.jpg", "3": "images/trombone/slide3.jpg",
    "4": "images/trombone/slide4.jpg", "5": "images/trombone/slide5.jpg", "6": "images/trombone/slide6.jpg",
    "7": "images/trombone/slide7.jpg"
  };
  const imageElement = document.getElementById("trombone-slide-image");
  if (!imageElement) return;
  document.querySelectorAll(".valve").forEach(el => {
    el.addEventListener("mouseenter", () => {
      if (slideImages[el.id]) {
        imageElement.src = slideImages[el.id];
        imageElement.style.display = "block";
      }
    });
    el.addEventListener("mouseleave", () => {
      imageElement.style.display = "none";
      imageElement.src = "";
    });
  });
}

// === INITIALIZATION ===
document.addEventListener("DOMContentLoaded", async () => {
  window.currentInstrument = params.get("instrument") || "Flute";
  window.currentLevel = params.get("level") || "Level 1";
  const isCustom = params.get('custom') === '1';
  const instrumentLower = window.currentInstrument.toLowerCase();
  const svgPath = `images/svg/${instrumentLower}.svg`;
  const scriptName = window.currentInstrument.replace(/\s+/g, '');

  try {
    await loadInstrumentScript(scriptName);

    if (typeof fingeringsByLevel === "undefined") throw new Error("Instrument script missing 'fingeringsByLevel' object.");

    if (isCustom) {
      window.customClef = params.get('clef') || window.instrumentClef || 'treble';
      window.customKey = params.get('key') || 'C';
      window.customDisplayMode = params.get('display') || 'keySignature';
      const low = params.get('low') || 'C4';
      const high = params.get('high') || 'C5';
      const customNotes = ScaleLibrary.customRange(low, high, window.customKey);
      const missing = customNotes.filter(note => !resolveInstrumentFingering(note));
      if (missing.length) throw new Error(`No fingering for ${missing.join(', ')}`);
      window.fingerings = Object.fromEntries(customNotes.map(note => [note, resolveInstrumentFingering(note)]));
      window.allNotes = customNotes;
      window.currentLevel = `Custom: ${low}–${high}, ${window.customKey}`;
    } else if (window.fingeringsByLevel[window.currentLevel]) {
      window.fingerings = window.fingeringsByLevel[window.currentLevel];
      window.allNotes = Object.keys(window.fingerings);
      window.customDisplayMode = 'accidentals';
    } else {
      throw new Error(window.instrumentLevelErrors[window.currentLevel] || `Unknown level: ${window.currentLevel}`);
    }

    initializeNoteRenderer();
    await loadSVG("fingering-diagram", svgPath);
    showStartButton();
    setNewNote();
    resetScore();
    resetTimer();

  } catch (err) {
    console.error("Error loading instrument resources:", err);
    handleLoadingError(err);
  }
});

function handleLoadingError(error) {
  const diagramDiv = document.getElementById("fingering-diagram");
  if (diagramDiv) {
    diagramDiv.innerHTML = `
      <div style="text-align: center; color: red; padding: 20px;">
        <p><strong>Failed to load ${window.currentInstrument}</strong></p>
        <p>Please try refreshing the page or <a href="index.html">select a different instrument</a>.</p>
      </div>
    `;
    if (error) {
      const detail = document.createElement('p');
      detail.textContent = error.message;
      diagramDiv.appendChild(detail);
    }
  }
}
