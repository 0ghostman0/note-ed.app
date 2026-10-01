/* ==CARL FISCHER HANDY MANUAL IDs== */ 

// One clef definition for the whole instrument.
window.instrumentClef = 'treble';

// Part 1: Master note list
const allNotes = {
  'Bb3': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '6', '1'],
  },
  'B3': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '4', '1'],
  },
  'C4': {
  fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '1'],
  },
  'C#4': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '5', '1'],
  },
  'Db4': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '5', '1'],
  },
  'D4': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#4': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'Eb4': {
    fingering: ['I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'E4': {
    fingering: ['I', 'II', 'III', 'IV', 'V'],
  },
  'F4': {
    fingering: ['I', 'II', 'III', 'IV'],
  },
  'F#4': {
    fingering: ['I', 'II', 'III', 'V'],
  },
  'Gb4': {
    fingering: ['I', 'II', 'III', 'V'],
  },
  'G4': {
    fingering: ['I', 'II', 'III'],
    },
  'G#4': {
    fingering: ['I', 'II', 'III', '3'],
  },
  'Ab4': {
    fingering: ['I', 'II', 'III', '3'],
  },
  'A4': {
    fingering: ['I', 'II'],
    },
  'A#4': {
    fingering: ['I', 'II', '8'],
  },
  'Bb4': {
    fingering: ['I', 'II', '8'],
  },
  'B4': {
    fingering: ['I'],
  },
  'C5': {
    fingering: ['II'],
  },
  'C#5': {
    fingering: [],
  },
  'Db5': {
    fingering: [],
  },
  'D5': {
    fingering: ['14', 'I', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#5': {
    fingering: ['14', 'I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'Eb5': {
    fingering: ['14', 'I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'E5': {
    fingering: ['14', 'I', 'II', 'III', 'IV', 'V'],
  },
  'F5': {
    fingering: ['14', 'I', 'II', 'III', 'IV'],
  },
  'F#5': {
    fingering: ['14', 'I', 'II', 'III', 'V'],
  },
  'Gb5': {
    fingering: ['14', 'I', 'II', 'III', 'V'], 
  },
  'G5': {
    fingering: ['14', 'I', 'II', 'III'],
  },
  'G#5': {
    fingering: ['14', 'I', 'II', 'III', '3'],
  },
  'Ab5': {
    fingering: ['14', 'I', 'II', 'III', '3'],
  },
  'A5': {
    fingering: ['14', 'I', 'II'],
  },
  'A#5': {
    fingering: ['14', 'I', 'II', '8'],
  },
  'Bb5': {
    fingering: ['14', 'I', 'II', '8'],
  },
  'B5': {
    fingering: ['14', 'I'],
  },
  'C6': {
    fingering: ['14', 'II'],
  },
  'C#6': {
    fingering: ['14'],
  },
  'Db6': {
    fingering: ['14'],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
  
  //Pre-made Levels
  "Level 1": ['C5', 'D5', 'E5', 'F5', 'G5'],
  "Level 2": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'],
  "Level 3": ['F4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'Bb5'],
  "Level 4": ['F4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'Eb5', 'E5', 'F5', 'F#5', 'G5', 'A5', 'Bb5'], 
  
  //Scales
  //Major Scales
  "C Major": ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
  "F Major": ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'],
  "Bb Major": ['Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'A5', 'Bb5'],
  "Eb Major": ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'],
  "Ab Major": ['Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'G5', 'Ab5'],
  "Db Major": ['Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'C5', 'Db5'],
  "Gb Major": ['Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'F5', 'Gb5'],
  "Cb Major": ['Cb4', 'Db4', 'Eb4', 'Fb4', 'Gb4', 'Ab4', 'Bb4', 'Cb5'],
  "G Major": ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
  "D Major": ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'],
  "A Major": ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A5'],
  "E Major": ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'],
  "B Major": ['B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A#5', 'B5'],
  "F# Major": ['F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E#5', 'F#5'],
  "C# Major": ['C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B#4', 'C#5'],

  //Natural Minor Scales
  "A Natural Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'],
  "D Natural Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
  "G Natural Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5'],
  "C Natural Minor": ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'],
  "F Natural Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5'],
  "Bb Natural Minor": ['Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'Gb5', 'Ab5', 'Bb5'],
  "Eb Natural Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5'],
  "Ab Natural Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'Gb5', 'Ab5'],
  "E Natural Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
  "B Natural Minor": ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5', 'B5'],
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
  "Bb Harmonic Minor": ['Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'Gb5', 'A5', 'Bb5'],
  "Eb Harmonic Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'D5', 'Eb5'],
  "Ab Harmonic Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'G5', 'Ab5'],
  "E Harmonic Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D#5', 'E5'],
  "B Harmonic Minor": ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A#5', 'B5'],
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
  "Bb Melodic Minor": ['Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5'],
  "Eb Melodic Minor": ['Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'D5', 'Eb5'],
  "Ab Melodic Minor": ['Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5'],
  "E Melodic Minor": ['E4', 'F#4', 'G4', 'G#4', 'A4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5'],
  "B Melodic Minor": ['B4', 'C#5', 'D5', 'D#5', 'E5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5'],
  "F# Melodic Minor": ['F#4', 'G#4', 'A4', 'A#4', 'B4', 'C#5', 'D5', 'D#5', 'E5', 'E#5', 'F#5'],
  "C# Melodic Minor": ['C#4', 'D#4', 'E4', 'E#4', 'F#4', 'G#4', 'A4', 'A#4', 'B4', 'B#4', 'C#5'],
  "G# Melodic Minor": ['G#4', 'A#4', 'B4', 'B#4', 'C#5', 'D#5', 'E5', 'E#5', 'F#5', 'F##5', 'G#5'],
  "D# Melodic Minor": ['D#4', 'E#4', 'F#4', 'F##4', 'G#4', 'A#4', 'B4', 'B#4', 'C#5', 'C##5', 'D#5'],
  "A# Melodic Minor": ['A#4', 'B#4', 'C#5', 'C##5', 'D#5', 'E#5', 'F#5', 'F##5', 'G#5', 'G##5', 'A#5'],

  //Chromatic Scale
  "Chromatic Scale": ['G4', 'G#4', 'Ab4', 'A4', 'A#4', 'Bb4', 'B4', 'C5', 'C#5', 'Db5', 'D5', 'D#5', 'Eb5', 'E5', 'F5', 'F#5', 'Gb5', 'G5'],
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

//console.log("Tenor_Sax.js built levels:", Object.keys(window.fingeringsByLevel));