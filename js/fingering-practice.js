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
      if (count < flashes) {
        setTimeout(flash, duration);
      }
    }, duration);
  }

  flash();
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
  if (timerElement) {
    timerElement.textContent = formatTime(timeRemaining);
  }
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
  if (scoreText) {
    scoreText.textContent = `Score: 0 / 0`;
  }

  const resultDiv = document.getElementById("rightornot");
  if (resultDiv) {
    resultDiv.textContent = "";
    resultDiv.classList.remove("text-green-600", "text-red-600");
  }
}

function updateScoreDisplay() {
  const scoreText = document.getElementById("score-text");
  if (scoreText) {
    scoreText.textContent = `Score: ${totalCorrect} / ${totalAttempts}`;
  }
}

function showFeedback(isCorrect) {
  if (isCorrect) {
    // Optional correct feedback
  } else {
    scoreFeedback("red", 2, 100);
  }
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

  console.log("NoteRenderer initialized.");
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

  if (!noteData) {
    console.error("No data for note:", currentNote);
    return;
  }

  if (!window.NoteRenderer) {
    console.error("NoteRenderer not available.");
    return;
  }

  if (!window.__noteRendererInitialized) {
    initializeNoteRenderer();
  }

  const clef = noteData.clef || window.instrumentClef || "treble";
  
  console.log("Rendering note:", currentNote);
  console.log("Note data:", noteData);
  console.log("Clef being used:", clef);
  console.log("Active fingering set:", window.fingerings);
  console.log("Available notes:", window.allNotes);
  
  NoteRenderer.renderNote(currentNote, clef);

  clearActiveValves();

  console.log("New note:", currentNote, "Clef:", clef);
}

function updateNoteDisplay(note) {
  if (window.NoteRenderer) {
    const clef = window.instrumentClef || "bass";
    NoteRenderer.renderNote(note, clef);
  }
}

function clearActiveValves() {
  document.querySelectorAll('.valve').forEach(valve => {
    valve.classList.remove('active');
  });
}

// === FINGERING CHECK FUNCTIONS ===
function checkFingering() {
  if (!currentNote) {
    console.error("No current note set.");
    return;
  }

  const correctValves = window.fingerings?.[currentNote]?.fingering || [];
  const pressedValves = Array.from(document.querySelectorAll('.valve.active')).map(v => v.id);

  const isCorrect =
    correctValves.length === pressedValves.length &&
    correctValves.every(id => pressedValves.includes(id)) &&
    pressedValves.every(id => correctValves.includes(id));

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
    const url = `report.html?data=${encoded}`;

    console.log("Redirecting to:", url);
    window.location.href = url;
  }
}

// === SVG HANDLING ===
async function loadSVG(containerId, svgPath) {
  try {
    const res = await fetch(svgPath);

    if (!res.ok) {
      throw new Error(`Failed to fetch SVG: ${res.status} ${res.statusText}`);
    }

    const svgText = await res.text();
    const container = document.getElementById(containerId);

    if (container) {
      container.innerHTML = svgText;
      attachFingeringListeners();
    }
  } catch (err) {
    console.error("SVG loading error:", err);

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML =
        `<p style="color: red;">Failed to load instrument diagram. Please refresh the page.</p>`;
    }
  }
}

// === INSTRUMENT LOADING ===
function loadInstrumentScript(instrument) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `js/instruments/${instrument}.js`;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

console.log("Instrument clef after script load:", window.instrumentClef);
console.log("fingeringsByLevel after script load:", window.fingeringsByLevel);
console.log("Requested level:", window.currentLevel);

// === EVENT LISTENERS ===
function attachFingeringListeners() {
  const isTrombone = (window.currentInstrument || "").toLowerCase() === "trombone";

  document.querySelectorAll(".valve").forEach(el => {
    el.addEventListener("click", () => {
	  
	  // === Prevent clicking fingerings before Start Button is pressed
	  if (!gameStarted) return;
	  
	  // === If Start Button pressed, allow clicking fingerings
      el.classList.toggle("active");
      console.log("Valve toggled:", el.id, "Active:", el.classList.contains("active"));
    });
  });

  if (isTrombone) {
    setupTromboneHover();
  }
}

function setupTromboneHover() {
  const slideImages = {
    "1": "images/trombone/slide1.jpg",
    "2": "images/trombone/slide2.jpg",
    "3": "images/trombone/slide3.jpg",
    "4": "images/trombone/slide4.jpg",
    "5": "images/trombone/slide5.jpg",
    "6": "images/trombone/slide6.jpg",
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

  const instrumentLower = window.currentInstrument.toLowerCase();
  const svgPath = `images/svg/${instrumentLower}.svg`;
  const scriptName = window.currentInstrument.replace(/\s+/g, '');

  try {
    await loadInstrumentScript(scriptName);

    if (typeof fingeringsByLevel === "undefined") {
      throw new Error("Instrument script missing 'fingeringsByLevel' object.");
    }

    if (window.fingeringsByLevel[window.currentLevel]) {
      window.fingerings = window.fingeringsByLevel[window.currentLevel];
      window.allNotes = Object.keys(window.fingerings);
    } else {
      console.warn(`Level "${window.currentLevel}" not found. Defaulting to Level 1.`);
      window.fingerings = window.fingeringsByLevel["Level 1"];
      window.allNotes = Object.keys(window.fingerings);
    }

    console.log("Instrument:", window.currentInstrument);
    console.log("Level:", window.currentLevel);
    console.log("Clef:", window.instrumentClef);
    console.log("Available notes:", window.allNotes);
    console.log("Fingerings:", window.fingerings);

    initializeNoteRenderer();

    await loadSVG("fingering-diagram", svgPath);

    showStartButton();
    setNewNote();
    resetScore();
    resetTimer();

  } catch (err) {
    console.error("Error loading instrument resources:", err);
    handleLoadingError();
  }
});

function handleLoadingError() {
  const diagramDiv = document.getElementById("fingering-diagram");

  if (diagramDiv) {
    diagramDiv.innerHTML = `
      <div style="text-align: center; color: red; padding: 20px;">
        <p><strong>Failed to load ${window.currentInstrument}</strong></p>
        <p>Please try refreshing the page or <a href="index.html">select a different instrument</a>.</p>
      </div>
    `;
  }
}