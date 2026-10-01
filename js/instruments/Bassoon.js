/* ==CARL FISCHER HANDY MANUAL IDs== */ 

// One clef definition for the whole instrument.
window.instrumentClef = 'bass'; 

// Part 1: Master note list
const allNotes = {
  'Bb1': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '16', '17', '18', '19', '8'],
  },
  'B1': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '16', '17', '19', '8'],
  },
  'C2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '16', '19', '8'],
  },
  'C#2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '16', '14', '19', '8'],
  },
  'Db2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '16', '14', '19', '8'],
  },
  'D2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '19', '8'],
  },
  'D#2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '13', '19', '8'],
  },
  'Eb2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '15', '13', '19', '8'],
  },
  'E2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '19', '8', 'WK'],
  },
  'F2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '8', 'WK'],
  },
  'F#2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '9', '8', 'WK'],
  },
  'Gb2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', '9', '8', 'WK'],
  },
  'G2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', 'WK'],
  },
  'G#2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', 'WK', '11'],
  },
  'Ab2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'VI', 'WK', '11'],
  },
  'A2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'WK'],
  },
  'A#2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'WK', '7'],
  },
  'Bb2': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', 'WK', '7'],
  },
  'B2': {
	fingering: ['I', 'Ihh', 'II', 'III', 'IV'],  
  },
  'C3': {
    fingering: ['WK', 'I', 'Ihh', 'II', 'III'],
  },
  'C#3': {
  fingering: ['WK', 'I', 'Ihh', 'II', 'III', '3'],
  },
  'Db3': {
    fingering: ['WK', 'I', 'Ihh', 'II', 'III', '3'],
  },
  'D3': {
    fingering: ['WK', 'I', 'Ihh', 'II'],
  },
  'D#3': {
    fingering: ['WK', 'I', 'Ihh', 'II', '3'],
  },
  'Eb3': {
    fingering: ['WK', 'I', 'Ihh', 'II', '3'],
  },
  'E3': {
    fingering: ['WK', 'I', 'Ihh'],
  },
  'F3': {
    fingering: ['WK'],
  },
  'F#3': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '9', '8', 'WK'],
  },
  'Gb3': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '9', '8', 'WK'],
  },
  'G3': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', 'WK'],
  },
  'G#3': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '11', 'WK'],
  },
  'Ab3': {
    fingering: ['Ihh', 'II', 'III', 'IV', 'V', 'VI', '11', 'WK'],
  },
  'A3': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V'],
  },
  'A#3': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', '7'],
  },
  'Bb3': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV', 'V', '7'],
  },
  'B3': {
    fingering: ['I', 'Ihh', 'II', 'III', 'IV'],
  },
  'C4': {
  fingering: ['I', 'Ihh', 'II', 'III'],
  },
  'C#4': {
    fingering: ['I', 'Ihh', 'II', 'III', '3'],
  },
  'Db4': {
    fingering: ['I', 'Ihh', 'II', 'III', '3'],
  },
  'D4': {
    fingering: ['I', 'Ihh', 'II'],
  },
  'D#4': {
    fingering: ['I', 'Ihh', 'II', 'IV', 'V', 'VI'],
  },
  'Eb4': {
    fingering: ['I', 'Ihh', 'II', 'IV', 'V', 'VI'],
  },
  'E4': {
    fingering: ['I', 'Ihh', 'III', '13', 'IV', 'V', 'VI'],
  },
  'F4': {
    fingering: ['II', 'III', '13', 'IV', 'V'],
  }, 
  'F#4': {
    fingering: ['Ihh', 'II', 'III', 'IV', '13'],
  },
  'Gb4': {
    fingering: ['Ihh', 'II', 'III', 'IV', '13'],
  },
  'G4': {
    fingering: ['Ihh', 'II', 'III', 'IV', '8'],
  }  
};

// Part 2: Notes grouped by level
const allLevels = {
  
  //Pre-made Levels
  "Level 1": ['Bb2', 'C3', 'D3', 'Eb3', 'F3'],
  "Level 2": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3'],
  "Level 3": ['G2', 'Ab2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3'],
  "Level 4": ['G2', 'Ab2', 'A2', 'Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'G3', 'Ab3', 'A3'], 
  
  //Scales
  //Major Scales
  "C Major": ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'],
  "F Major": ['F2', 'G2', 'A2', 'Bb2', 'C3', 'D3', 'E3', 'F3'],
  "Bb Major": ['Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3'],
  "Eb Major": ['Eb2', 'F2', 'G2', 'Ab2', 'Bb2', 'C3', 'D3', 'Eb3'],
  "Ab Major": ['Ab2', 'Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'G3', 'Ab3'],
  "Db Major": ['Db2', 'Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'C3', 'Db3'],
  "Gb Major": ['Gb2', 'Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'F3', 'Gb3'],
  "Cb Major": ['Cb3', 'Db3', 'Eb3', 'Fb3', 'Gb3', 'Ab3', 'Bb3', 'Cb4'],
  "G Major": ['G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F#3', 'G3'],
  "D Major": ['D2', 'E2', 'F#2', 'G2', 'A2', 'B2', 'C#3', 'D3'],
  "A Major": ['A2', 'B2', 'C#3', 'D3', 'E3', 'F#3', 'G#3', 'A3'],
  "E Major": ['E2', 'F#2', 'G#2', 'A2', 'B2', 'C#3', 'D#3', 'E3'],
  "B Major": ['B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A#3', 'B3'],
  "F# Major": ['F#2', 'G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E#3', 'F#3'],
  "C# Major": ['C#3', 'D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B#3', 'C#4'],

  //Natural Minor Scales
  "A Natural Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3'],
  "D Natural Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'C3', 'D3'],
  "G Natural Minor": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3'],
  "C Natural Minor": ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4'],
  "F Natural Minor": ['F2', 'G2', 'Ab2', 'Bb2', 'C3', 'Db3', 'Eb3', 'F3'],
  "Bb Natural Minor": ['Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3'],
  "Eb Natural Minor": ['Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3'],
  "Ab Natural Minor": ['Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'Fb3', 'Gb3', 'Ab3'],
  "E Natural Minor": ['E2', 'F#2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3'],
  "B Natural Minor": ['B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3'],
  "F# Natural Minor": ['F#2', 'G#2', 'A2', 'B2', 'C#3', 'D3', 'E3', 'F#3'],
  "C# Natural Minor": ['C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4'],
  "G# Natural Minor": ['G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3'],
  "D# Natural Minor": ['D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4'],
  "A# Natural Minor": ['A#2', 'B#2', 'C#3', 'D#3', 'E#3', 'F#3', 'G#3', 'A#3'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G#3', 'A3'],
  "D Harmonic Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'C#3', 'D3'],
  "G Harmonic Minor": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F#3', 'G3'],
  "C Harmonic Minor": ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'B3', 'C4'],
  "F Harmonic Minor": ['F2', 'G2', 'Ab2', 'Bb2', 'C3', 'Db3', 'E3', 'F3'],
  "Bb Harmonic Minor": ['Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'A3', 'Bb3'],
  "Eb Harmonic Minor": ['Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'Cb3', 'D3', 'Eb3'],
  "Ab Harmonic Minor": ['Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'Fb3', 'G3', 'Ab3'],
  "E Harmonic Minor": ['E2', 'F#2', 'G2', 'A2', 'B2', 'C3', 'D#3', 'E3'],
  "B Harmonic Minor": ['B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A#3', 'B3'],
  "F# Harmonic Minor": ['F#2', 'G#2', 'A2', 'B2', 'C#3', 'D3', 'E#3', 'F#3'],
  "C# Harmonic Minor": ['C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B#3', 'C#4'],
  "G# Harmonic Minor": ['G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E3', 'F##3', 'G#3'],
  "D# Harmonic Minor": ['D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B3', 'C##4', 'D#4'],
  "A# Harmonic Minor": ['A#2', 'B#2', 'C#3', 'D#3', 'E#3', 'F#3', 'G##3', 'A#3'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3'],
  "D Melodic Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'B2', 'C3', 'C#3', 'D3'],
  "G Melodic Minor": ['G2', 'A2', 'Bb2', 'B2', 'C3', 'D3', 'Eb3', 'E3', 'F3', 'F#3', 'G3'],
  "C Melodic Minor": ['C3', 'D3', 'Eb3', 'E3', 'F3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4'],
  "F Melodic Minor": ['F2', 'G2', 'Ab2', 'A2', 'Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3'],
  "Bb Melodic Minor": ['Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3'],
  "Eb Melodic Minor": ['Eb2', 'F2', 'Gb2', 'G2', 'Ab2', 'Bb2', 'Cb3', 'C3', 'Db3', 'D3', 'Eb3'],
  "Ab Melodic Minor": ['Ab2', 'Bb2', 'Cb3', 'C3', 'Db3', 'Eb3', 'Fb3', 'F3', 'Gb3', 'G3', 'Ab3'],
  "E Melodic Minor": ['E2', 'F#2', 'G2', 'G#2', 'A2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3'],
  "B Melodic Minor": ['B2', 'C#3', 'D3', 'D#3', 'E3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'],
  "F# Melodic Minor": ['F#2', 'G#2', 'A2', 'A#2', 'B2', 'C#3', 'D3', 'D#3', 'E3', 'E#3', 'F#3'],
  "C# Melodic Minor": ['C#3', 'D#3', 'E3', 'E#3', 'F#3', 'G#3', 'A3', 'A#3', 'B3', 'B#3', 'C#4'],
  "G# Melodic Minor": ['G#2', 'A#2', 'B2', 'B#2', 'C#3', 'D#3', 'E3', 'E#3', 'F#3', 'F##3', 'G#3'],
  "D# Melodic Minor": ['D#3', 'E#3', 'F#3', 'F##3', 'G#3', 'A#3', 'B3', 'B#3', 'C#4', 'C##4', 'D#4'],
  "A# Melodic Minor": ['A#2', 'B#2', 'C#3', 'C##3', 'D#3', 'E#3', 'F#3', 'F##3', 'G#3', 'G##3', 'A#3'],

  //Chromatic Scale
  "Chromatic Scale": ['Bb2', 'B2', 'C3', 'C#3', 'Db3', 'D3', 'D#3', 'Eb3', 'E3', 'F3', 'F#3', 'Gb3', 'G3', 'G#3', 'Ab3', 'A3', 'A#3', 'Bb3'],
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

//console.log("Bassoon.js built levels:", Object.keys(window.fingeringsByLevel));