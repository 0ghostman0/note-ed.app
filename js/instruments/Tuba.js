/* ==CARL FISCHER HANDY MANUAL IDs== */

// One clef definition for the whole instrument.
window.instrumentClef = 'bass'; 

// Part 1: Master note list
const allNotes = {
  'E1': {
    fingering: ['1', '2', '3'],
  },
  'F1': {
    fingering: ['1', '3'],
  },
  'F#1': {
    fingering: ['2', '3'],
  },
  'Gb1': {
    fingering: ['2', '3'],
  },
  'G1': {
    fingering: ['1', '2'],
  },
  'G#1': {
    fingering: ['1'],
  },
  'Ab1': {
    fingering: ['1'],
  },
  'A1': {
    fingering: ['2'],
  },
  'A#1': {
    fingering: [],
  },
  'Bb1': {
    fingering: [],
  },
  'B1': {
    fingering: ['1', '2', '3'],
  },
  'C2': {
    fingering: ['1', '3'],
  },
  'C#2': {
    fingering: ['2', '3'],
  },
  'Db2': {
    fingering: ['2', '3'],
  },
  'D2': {
    fingering: ['1', '2'],
  },
  'D#2': {
    fingering: ['1'],
  },
  'Eb2': {
    fingering: ['1'],
  },
  'E2': {
    fingering: ['2'],
  },
  'F2': {
    fingering: [],
  },
  'F#2': {
    fingering: ['2', '3'],
  },
  'Gb2': {
    fingering: ['2', '3'],
  },
  'G2': {
    fingering: ['1', '2'],
  },
  'G#2': {
    fingering: ['1'],
  },
  'Ab2': {
    fingering: ['1'],
  },
  'A2': {
    fingering: ['2'],
  },
  'A#2': {
    fingering: [],
  },
  'Bb2': {
    fingering: [],
  },
  'B2': {
    fingering: ['1', '2'],
  },
  'C3': {
    fingering: ['1'],
  },
  'C#3': {
    fingering: ['2'],
  },
  'Db3': {
    fingering: ['2'],
  },
  'D3': {
    fingering: [],
  },
  'D#3': {
    fingering: ['1'],
  },
  'Eb3': {
    fingering: ['1'],
  },
  'E3': {
    fingering: ['2'],
  },
  'F3': {
    fingering: [],
  },
  'F#3': {
    fingering: ['2', '3'],
  },
  'Gb3': {
    fingering: ['2', '3'],
  },
  'G3': {
    fingering: ['1', '2'],
  },
  'G#3': {
    fingering: ['1'],
  },
  'Ab3': {
    fingering: ['1'],
  },
  'A3': {
    fingering: ['2'],
  },
  'A#3': {
    fingering: [],
  },
  'Bb3': {
    fingering: [],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
	
  //Pre-made levels
  "Level 1": ['Bb1', 'C2', 'D2', 'Eb2', 'F2'],
  "Level 2": ['G1', 'A1', 'Bb1', 'C2', 'D2', 'Eb2', 'F2', 'G2'],
  "Level 3": ['G1', 'Ab1', 'A1', 'Bb1', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'Ab2', 'Bb2'],
  "Level 4": ['G1', 'Ab1', 'A1', 'Bb1', 'C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'G2', 'Ab2', 'A2', 'Bb2'],
  
  //Scales
  //Major Scales
  "C Major": ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3'],
  "F Major": ['F2', 'G2', 'A2', 'Bb2', 'C3', 'D3', 'E3', 'F3'],
  "Bb Major": ['Bb1', 'C2', 'D2', 'Eb2', 'F2', 'G2', 'A2', 'Bb2'],
  "Eb Major": ['Eb2', 'F2', 'G2', 'Ab2', 'Bb2', 'C3', 'D3', 'Eb3'],
  "Ab Major": ['Ab1', 'Bb1', 'C2', 'Db2', 'Eb2', 'F2', 'G2', 'Ab2'],
  "Db Major": ['Db2', 'Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'C3', 'Db3'],
  "Gb Major": ['Gb2', 'Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'F3', 'Gb3'],
  "Cb Major": ['Cb2', 'Db2', 'Eb2', 'Fb2', 'Gb2', 'Ab2', 'Bb2', 'Cb3'],
  "G Major": ['G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F#3', 'G3'],
  "D Major": ['D2', 'E2', 'F#2', 'G2', 'A2', 'B2', 'C#3', 'D3'],
  "A Major": ['A1', 'B1', 'C#2', 'D2', 'E2', 'F#2', 'G#2', 'A2'],
  "E Major": ['E2', 'F#2', 'G#2', 'A2', 'B2', 'C#3', 'D#3', 'E3'],
  "B Major": ['B1', 'C#2', 'D#2', 'E2', 'F#2', 'G#2', 'A#2', 'B2'],
  "F# Major": ['F#2', 'G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E#3', 'F#3'],
  "C# Major": ['C#2', 'D#2', 'E#2', 'F#2', 'G#2', 'A#2', 'B#2', 'C#3'],

  //Natural Minor Scales
  "A Natural Minor": ['A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2'],
  "D Natural Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'C3', 'D3'],
  "G Natural Minor": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3'],
  "C Natural Minor": ['C2', 'D2', 'Eb2', 'F2', 'G2', 'Ab2', 'Bb2', 'C3'],
  "F Natural Minor": ['F2', 'G2', 'Ab2', 'Bb2', 'C3', 'Db3', 'Eb3', 'F3'],
  "Bb Natural Minor": ['Bb1', 'C2', 'Db2', 'Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2'],
  "Eb Natural Minor": ['Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3'],
  "Ab Natural Minor": ['Ab1', 'Bb1', 'Cb2', 'Db2', 'Eb2', 'Fb2', 'Gb2', 'Ab2'],
  "E Natural Minor": ['E2', 'F#2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3'],
  "B Natural Minor": ['B1', 'C#2', 'D2', 'E2', 'F#2', 'G2', 'A2', 'B2'],
  "F# Natural Minor": ['F#2', 'G#2', 'A2', 'B2', 'C#3', 'D3', 'E3', 'F#3'],
  "C# Natural Minor": ['C#2', 'D#2', 'E2', 'F#2', 'G#2', 'A2', 'B2', 'C#3'],
  "G# Natural Minor": ['G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3'],
  "D# Natural Minor": ['D#2', 'E#2', 'F#2', 'G#2', 'A#2', 'B2', 'C#3', 'D#3'],
  "A# Natural Minor": ['A#1', 'B#1', 'C#2', 'D#2', 'E#2', 'F#2', 'G#2', 'A#2'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G#2', 'A2'],
  "D Harmonic Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'C#3', 'D3'],
  "G Harmonic Minor": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F#3', 'G3'],
  "C Harmonic Minor": ['C2', 'D2', 'Eb2', 'F2', 'G2', 'Ab2', 'B2', 'C3'],
  "F Harmonic Minor": ['F2', 'G2', 'Ab2', 'Bb2', 'C3', 'Db3', 'E3', 'F3'],
  "Bb Harmonic Minor": ['Bb1', 'C2', 'Db2', 'Eb2', 'F2', 'Gb2', 'A2', 'Bb2'],
  "Eb Harmonic Minor": ['Eb2', 'F2', 'Gb2', 'Ab2', 'Bb2', 'Cb3', 'D3', 'Eb3'],
  "Ab Harmonic Minor": ['Ab1', 'Bb1', 'Cb2', 'Db2', 'Eb2', 'Fb2', 'G2', 'Ab2'],
  "E Harmonic Minor": ['E2', 'F#2', 'G2', 'A2', 'B2', 'C3', 'D#3', 'E3'],
  "B Harmonic Minor": ['B1', 'C#2', 'D2', 'E2', 'F#2', 'G2', 'A#2', 'B2'],
  "F# Harmonic Minor": ['F#2', 'G#2', 'A2', 'B2', 'C#3', 'D3', 'E#3', 'F#3'],
  "C# Harmonic Minor": ['C#2', 'D#2', 'E2', 'F#2', 'G#2', 'A2', 'B#2', 'C#3'],
  "G# Harmonic Minor": ['G#2', 'A#2', 'B2', 'C#3', 'D#3', 'E3', 'F##3', 'G#3'],
  "D# Harmonic Minor": ['D#2', 'E#2', 'F#2', 'G#2', 'A#2', 'B2', 'C##3', 'D#3'],
  "A# Harmonic Minor": ['A#1', 'B#1', 'C#2', 'D#2', 'E#2', 'F#2', 'G##2', 'A#2'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2'],
  "D Melodic Minor": ['D2', 'E2', 'F2', 'G2', 'A2', 'Bb2', 'B2', 'C3', 'C#3', 'D3'],
  "G Melodic Minor": ['G2', 'A2', 'Bb2', 'B2', 'C3', 'D3', 'Eb3', 'E3', 'F3', 'F#3', 'G3'],
  "C Melodic Minor": ['C2', 'D2', 'Eb2', 'E2', 'F2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3'],
  "F Melodic Minor": ['F2', 'G2', 'Ab2', 'A2', 'Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3'],
  "Bb Melodic Minor": ['Bb1', 'C2', 'Db2', 'D2', 'Eb2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2'],
  "Eb Melodic Minor": ['Eb2', 'F2', 'Gb2', 'G2', 'Ab2', 'Bb2', 'Cb3', 'C3', 'Db3', 'D3', 'Eb3'],
  "Ab Melodic Minor": ['Ab1', 'Bb1', 'Cb2', 'C2', 'Db2', 'Eb2', 'Fb2', 'F2', 'Gb2', 'G2', 'Ab2'],
  "E Melodic Minor": ['E2', 'F#2', 'G2', 'G#2', 'A2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3'],
  "B Melodic Minor": ['B1', 'C#2', 'D2', 'D#2', 'E2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2'],
  "F# Melodic Minor": ['F#2', 'G#2', 'A2', 'A#2', 'B2', 'C#3', 'D3', 'D#3', 'E3', 'E#3', 'F#3'],
  "C# Melodic Minor": ['C#2', 'D#2', 'E2', 'E#2', 'F#2', 'G#2', 'A2', 'A#2', 'B2', 'B#2', 'C#3'],
  "G# Melodic Minor": ['G#2', 'A#2', 'B2', 'B#2', 'C#3', 'D#3', 'E3', 'E#3', 'F#3', 'F##3', 'G#3'],
  "D# Melodic Minor": ['D#2', 'E#2', 'F#2', 'F##2', 'G#2', 'A#2', 'B2', 'B#2', 'C#3', 'C##3', 'D#3'],
  "A# Melodic Minor": ['A#1', 'B#1', 'C#2', 'C##2', 'D#2', 'E#2', 'F#2', 'F##2', 'G#2', 'G##2', 'A#2'],

  //Chromatic Scale
  "Chromatic Scale": ['Bb1', 'B1', 'C2', 'C#2', 'Db2', 'D2', 'D#2', 'Eb2', 'E2', 'F2', 'F#2', 'Gb2', 'G2', 'G#2', 'Ab2', 'A2', 'A#2', 'Bb2'],
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

//console.log("Tuba.js built levels:", Object.keys(window.fingeringsByLevel));