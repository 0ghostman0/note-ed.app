/* ==CARL FISCHER HANDY MANUAL IDs== */

// One clef definition for the whole instrument.
window.instrumentClef = 'treble';

// Part 1: Master note list
const allNotes = {
  'A#3': {
    fingering: ['I', 'Ihh', 'II', 'III', '9', 'IV', 'V', 'VI', '4'],
  },
  'Bb3': {
    fingering: ['I', 'Ihh', 'II', 'III', '9', 'IV', 'V', 'VI', '4'],
  },
  'B3': {
    fingering: ['I', 'Ihh', 'II', 'III', '7', 'IV', 'V', 'VI', '4'],
  },
  'C4': {
  fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '4'],
  },
  'C#4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '6'],
  },
  'Db4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '6'],
  },
  'D4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '8'],
  },
  'Eb4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '8'],
  },
  'E4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V'],
  },
  'F4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '10'],
  },
  'F4-Forked': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'VI', '8'],
  },
  'F#4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV'],
  },
  'Gb4': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV'],
  },
  'G4': {
    fingering: ['I', 'Ihh', 'II', 'III'],
    },
  'G#4': {
    fingering: ['I', 'Ihh', 'II', 'III', '3'],
  },
  'Ab4': {
    fingering: ['I', 'Ihh', 'II', 'III', '3'],
  },
  'A4': {
    fingering: ['I', 'Ihh', 'II'],
    },
  'A#4': {
    fingering: ['I', 'Ihh', 'II', 'IV'],
  },
  'Bb4': {
    fingering: ['I', 'Ihh', 'II', 'IV'],
  },
  'B4': {
    fingering: ['I'],
  },
  'C5': {
    fingering: ['I', 'IV'],
  },
  'C#5': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '6'],
  },
  'Db5': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '6'],
  },
  'D5': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#5': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '8'],
  },
  'Eb5': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '8'],
  },
  'E5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', 'IV', 'V'],
  },
  'F5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', 'IV', 'V', '10'],
  },
  'F5-Forked': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', 'IV', 'VI', '8'],
  },
  'F#5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', 'IV'],
  },
  'Gb5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', 'IV'], 
  },
  'G5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III'],
  },
  'G#5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', '3'],
  },
  'Ab5': {
    fingering: ['T1', 'I', 'Ihh', 'II', 'III', '3'],
  },
  'A5': {
    fingering: ['T2', 'I', 'II'],
  },
  'A#5': {
    fingering: ['T2', 'I', 'II', 'IV'],
  },
  'Bb5': {
    fingering: ['T2', 'I', 'II', 'IV'],
  },
  'B5': {
    fingering: ['T2', 'I'],
  },
  'C6': {
    fingering: ['T2', 'I', 'IV'],
  },
  'C#6': {
    fingering: ['II', 'III', 'IV', '4'],
  },
  'Db6': {
    fingering: ['II', 'III', 'IV', '4'],
  },
  'D6': {
    fingering: ['Ihh', 'II', 'III'],
  },
  'D#6': {
    fingering: ['Ihh', 'II', 'III', '7', 'V', 'VI'],
  },
  'Eb6': {
    fingering: ['Ihh', 'II', 'III', '7', 'V', 'VI'],
  },
  'E6': {
    fingering: ['T1', 'Ihh', 'II', 'III', '3', '5', 'V', 'VI'],
  },
  'F6': {
    fingering: ['T1', 'Ihh', 'II', '3', '5', 'V', 'VI'],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
  
  //Pre-made Levels
  "Level 1": ['Bb4', 'C5', 'D5', 'Eb5', 'F5-Forked'],
  "Level 2": ['F4-Forked', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5-Forked', 'G5'],
  "Level 3": ['F4', 'F4-Forked', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5-Forked', 'G5', 'Ab5', 'Bb5'],
  "Level 4": ['Eb4', 'E4', 'F4', 'F4-Forked', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'F5-Forked', 'G5', 'Ab5', 'A5', 'Bb5'], 
  
  //Scales
  //Major Scales
  "C Major": ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
  "F Major": ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'],
  "Bb Major": ['Bb3', 'C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4'],
  "Eb Major": ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'],
  "Ab Major": ['Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'G5', 'Ab5'],
  "Db Major": ['Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'C5', 'Db5'],
  "Gb Major": ['Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'F5', 'Gb5'],
  "Cb Major": ['Cb4', 'Db4', 'Eb4', 'Fb4', 'Gb4', 'Ab4', 'Bb4', 'Cb5'],
  "G Major": ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
  "D Major": ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'],
  "A Major": ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A5'],
  "E Major": ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'],
  "B Major": ['B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#4', 'B4'],
  "F# Major": ['F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E#5', 'F#5'],
  "C# Major": ['C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B#4', 'C#5'],

  //Natural Minor Scales
  "A Natural Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'],
  "D Natural Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
  "G Natural Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5'],
  "C Natural Minor": ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'],
  "F Natural Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5'],
  "Bb Natural Minor": ['Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4'],
  "Eb Natural Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5'],
  "Ab Natural Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'Gb5', 'Ab5'],
  "E Natural Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
  "B Natural Minor": ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4'],
  "F# Natural Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'],
  "C# Natural Minor": ['C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5'],
  "G# Natural Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'],
  "D# Natural Minor": ['D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5'],
  "A# Natural Minor": ['A#4', 'B#4', 'C#5', 'D#5', 'E#5', 'F#5', 'G#5', 'A#5'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G#5', 'A5'],
  "D Harmonic Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C#5', 'D5'],
  "G Harmonic Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F#5', 'G5'],
  "C Harmonic Minor": ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5'],
  "F Harmonic Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'E5', 'F5'],
  "Bb Harmonic Minor": ['Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'A4', 'Bb4'],
  "Eb Harmonic Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'D5', 'Eb5'],
  "Ab Harmonic Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'G5', 'Ab5'],
  "E Harmonic Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D#5', 'E5'],
  "B Harmonic Minor": ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A#4', 'B4'],
  "F# Harmonic Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E#5', 'F#5'],
  "C# Harmonic Minor": ['C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A4', 'B#4', 'C#5'],
  "G# Harmonic Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F##5', 'G#5'],
  "D# Harmonic Minor": ['D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B4', 'C##5', 'D#5'],
  "A# Harmonic Minor": ['A#4', 'B#4', 'C#5', 'D#5', 'E#5', 'F#5', 'G##5', 'A#5'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5'],
  "D Melodic Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5'],
  "G Melodic Minor": ['G4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'Eb5', 'E5', 'F5', 'F#5', 'G5'],
  "C Melodic Minor": ['C4', 'D4', 'Eb4', 'E4', 'F4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5'],
  "F Melodic Minor": ['F4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5'],
  "Bb Melodic Minor": ['Bb3', 'C4', 'Db4', 'D4', 'Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4'],
  "Eb Melodic Minor": ['Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'D5', 'Eb5'],
  "Ab Melodic Minor": ['Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5'],
  "E Melodic Minor": ['E4', 'F#4', 'G4', 'G#4', 'A4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5'],
  "B Melodic Minor": ['B3', 'C#4', 'D4', 'D#4', 'E4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'],
  "F# Melodic Minor": ['F#4', 'G#4', 'A4', 'A#4', 'B4', 'C#5', 'D5', 'D#5', 'E5', 'E#5', 'F#5'],
  "C# Melodic Minor": ['C#4', 'D#4', 'E4', 'E#4', 'F#4', 'G#4', 'A4', 'A#4', 'B4', 'B#4', 'C#5'],
  "G# Melodic Minor": ['G#4', 'A#4', 'B4', 'B#4', 'C#5', 'D#5', 'E5', 'E#5', 'F#5', 'F##5', 'G#5'],
  "D# Melodic Minor": ['D#4', 'E#4', 'F#4', 'F##4', 'G#4', 'A#4', 'B4', 'B#4', 'C#5', 'C##5', 'D#5'],
  "A# Melodic Minor": ['A#4', 'B#4', 'C#5', 'C##5', 'D#5', 'E#5', 'F#5', 'F##5', 'G#5', 'G##5', 'A#5'],

  //Chromatic Scale
  "Chromatic Scale": ['Bb3', 'B3', 'C4', 'C#4', 'Db4', 'D4', 'D#4', 'Eb4', 'E4', 'F4', 'F#4', 'Gb4', 'G4', 'G#4', 'Ab4', 'A4', 'A#4', 'Bb4'],
};

// Part 3: Build one fingering set from allNotes and a level name
function createFingeringsByLevel(levelName) {
  const notesForLevel = allLevels[levelName];

  if (!notesForLevel) {
    console.error(`Level "${levelName}" not found in allLevels.`);
    return {};
  }

  const fingerings = {};

  for (const note of notesForLevel) {
    if (allNotes[note]) {
      fingerings[note] = allNotes[note];
    } else {
      console.warn(`Note "${note}" not found in allNotes.`);
    }
  }

  return fingerings;
}

// Build ALL levels/scales so fingering-practice.js can choose one
window.fingeringsByLevel = {};

Object.keys(allLevels).forEach(levelName => {
  window.fingeringsByLevel[levelName] = createFingeringsByLevel(levelName);
});

//console.log("Oboe.js built levels:", Object.keys(window.fingeringsByLevel));