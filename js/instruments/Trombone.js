/* ==CARL FISCHER HANDY MANUAL IDs== */ 

// One clef definition for the whole instrument.
window.instrumentClef = 'bass'; 

// Part 1: Master note list
const allNotes = {
  'E2': {
    fingering: ['7'],
  },
  'F2': {
    fingering: ['6'],
  },
  'F#2': {
    fingering: ['5'],
  },
  'Gb2': {
    fingering: ['5'],
  },
  'G2': {
    fingering: ['4'],
  },
  'G#2': {
    fingering: ['3'],
  },
  'Ab2': {
    fingering: ['3'],
  },
  'A2': {
    fingering: ['2'],
  },
  'A#2': {
    fingering: ['1'],
  },
  'Bb2': {
    fingering: ['1'],
  },
  'B2': {
    fingering: ['7'],
  },
  'C3': {
    fingering: ['6'],
  },
  'C#3': {
    fingering: ['5'],
  },
  'Db3': {
    fingering: ['5'],
  },
  'D3': {
    fingering: ['4'],
  },
  'D#3': {
    fingering: ['3'],
  },
  'Eb3': {
    fingering: ['3'],
  },
  'E3': {
    fingering: ['2'],
  },
  'F3': {
    fingering: ['1'],
  },
  'F#3': {
    fingering: ['5'],
  },
  'Gb3': {
    fingering: ['5'],
  },
  'G3': {
    fingering: ['4'],
  },
  'G#3': {
    fingering: ['3'],
  },
  'Ab3': {
    fingering: ['3'],
  },
  'A3': {
    fingering: ['2'],
  },
  'A#3': {
    fingering: ['1'],
  },
  'Bb3': {
    fingering: ['1'],
  },
  'B3': {
    fingering: ['4'],
  },
  'C4': {
  fingering: ['3'],
  },
  'C#4': {
    fingering: ['2'],
  },
  'Db4': {
    fingering: ['2'],
  },
  'D4': {
    fingering: ['1'],
  },
  'D#4': {
    fingering: ['3'],
  },
  'Eb4': {
    fingering: ['3'],
  },
  'E4': {
    fingering: ['2'],
  },
  'F4': {
    fingering: ['1'],
  },
  'F#4': {
    fingering: ['3'],
  },
  'Gb4': {
    fingering: ['3'],
  },
  'G4': {
    fingering: ['2'],
    },
  'G#4': {
    fingering: ['3'],
  },
  'Ab4': {
    fingering: ['3'],
  },
  'A4': {
    fingering: ['2'],
    },
  'A#4': {
    fingering: ['1'],
  },
  'Bb4': {
    fingering: ['1'],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
	
  //Pre-made Levels
  "Level 1": ['Bb2', 'C3', 'D3', 'Eb3', 'F3'],
  "Level 2": ['G2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3'],
  "Level 3": ['G2', 'Ab2', 'A2', 'Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3'],
  "Level 4": ['G2', 'Ab2', 'A2', 'Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'G3', 'Ab3', 'A3', 'Bb3'],
  
  //Scales
  //Major Scales
  "C Major": ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4'],
  "F Major": ['F3', 'G3', 'A3', 'Bb3', 'C4', 'D4', 'E4', 'F4'],
  "Bb Major": ['Bb2', 'C3', 'D3', 'Eb3', 'F3', 'G3', 'A3', 'Bb3'],
  "Eb Major": ['Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4', 'D4', 'Eb4'],
  "Ab Major": ['Ab2', 'Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'G3', 'Ab3'],
  "Db Major": ['Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'C4', 'Db4'],
  "Gb Major": ['Gb3', 'Ab3', 'Bb3', 'Cb4', 'Db4', 'Eb4', 'F4', 'Gb4'],
  "Cb Major": ['Cb3', 'Db3', 'Eb3', 'Fb3', 'Gb3', 'Ab3', 'Bb3', 'Cb4'],
  "G Major": ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F#4', 'G4'],
  "D Major": ['D3', 'E3', 'F#3', 'G3', 'A3', 'B3', 'C#4', 'D4'],
  "A Major": ['A2', 'B2', 'C#3', 'D3', 'E3', 'F#3', 'G#3', 'A3'],
  "E Major": ['E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4', 'D#4', 'E4'],
  "B Major": ['B2', 'C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A#3', 'B3'],
  "F# Major": ['F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4', 'E#4', 'F#4'],
  "C# Major": ['C#3', 'D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B#3', 'C#4'],

  //Natural Minor Scales
  "A Natural Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3'],
  "D Natural Minor": ['D3', 'E3', 'F3', 'G3', 'A3', 'Bb3', 'C4', 'D4'],
  "G Natural Minor": ['G3', 'A3', 'Bb3', 'C4', 'D4', 'Eb4', 'F4', 'G4'],
  "C Natural Minor": ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'Bb3', 'C4'],
  "F Natural Minor": ['F3', 'G3', 'Ab3', 'Bb3', 'C4', 'Db4', 'Eb4', 'F4'],
  "Bb Natural Minor": ['Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3'],
  "Eb Natural Minor": ['Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'Cb4', 'Db4', 'Eb4'],
  "Ab Natural Minor": ['Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'Fb3', 'Gb3', 'Ab3'],
  "E Natural Minor": ['E3', 'F#3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4'],
  "B Natural Minor": ['B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A3', 'B3'],
  "F# Natural Minor": ['F#3', 'G#3', 'A3', 'B3', 'C#4', 'D4', 'E4', 'F#4'],
  "C# Natural Minor": ['C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B3', 'C#4'],
  "G# Natural Minor": ['G#3', 'A#3', 'B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4'],
  "D# Natural Minor": ['D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B3', 'C#4', 'D#4'],
  "A# Natural Minor": ['A#2', 'B#2', 'C#3', 'D#3', 'E#3', 'F#3', 'G#3', 'A#3'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G#3', 'A3'],
  "D Harmonic Minor": ['D3', 'E3', 'F3', 'G3', 'A3', 'Bb3', 'C#4', 'D4'],
  "G Harmonic Minor": ['G3', 'A3', 'Bb3', 'C4', 'D4', 'Eb4', 'F#4', 'G4'],
  "C Harmonic Minor": ['C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'B3', 'C4'],
  "F Harmonic Minor": ['F3', 'G3', 'Ab3', 'Bb3', 'C4', 'Db4', 'E4', 'F4'],
  "Bb Harmonic Minor": ['Bb2', 'C3', 'Db3', 'Eb3', 'F3', 'Gb3', 'A3', 'Bb3'],
  "Eb Harmonic Minor": ['Eb3', 'F3', 'Gb3', 'Ab3', 'Bb3', 'Cb4', 'D4', 'Eb4'],
  "Ab Harmonic Minor": ['Ab2', 'Bb2', 'Cb3', 'Db3', 'Eb3', 'Fb3', 'G3', 'Ab3'],
  "E Harmonic Minor": ['E3', 'F#3', 'G3', 'A3', 'B3', 'C4', 'D#4', 'E4'],
  "B Harmonic Minor": ['B2', 'C#3', 'D3', 'E3', 'F#3', 'G3', 'A#3', 'B3'],
  "F# Harmonic Minor": ['F#3', 'G#3', 'A3', 'B3', 'C#4', 'D4', 'E#4', 'F#4'],
  "C# Harmonic Minor": ['C#3', 'D#3', 'E3', 'F#3', 'G#3', 'A3', 'B#3', 'C#4'],
  "G# Harmonic Minor": ['G#3', 'A#3', 'B3', 'C#4', 'D#4', 'E4', 'F##4', 'G#4'],
  "D# Harmonic Minor": ['D#3', 'E#3', 'F#3', 'G#3', 'A#3', 'B3', 'C##4', 'D#4'],
  "A# Harmonic Minor": ['A#2', 'B#2', 'C#3', 'D#3', 'E#3', 'F#3', 'G##3', 'A#3'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3'],
  "D Melodic Minor": ['D3', 'E3', 'F3', 'G3', 'A3', 'Bb3', 'B3', 'C4', 'C#4', 'D4'],
  "G Melodic Minor": ['G3', 'A3', 'Bb3', 'B3', 'C4', 'D4', 'Eb4', 'E4', 'F4', 'F#4', 'G4'],
  "C Melodic Minor": ['C3', 'D3', 'Eb3', 'E3', 'F3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4'],
  "F Melodic Minor": ['F3', 'G3', 'Ab3', 'A3', 'Bb3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4'],
  "Bb Melodic Minor": ['Bb2', 'C3', 'Db3', 'D3', 'Eb3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3'],
  "Eb Melodic Minor": ['Eb3', 'F3', 'Gb3', 'G3', 'Ab3', 'Bb3', 'Cb4', 'C4', 'Db4', 'D4', 'Eb4'],
  "Ab Melodic Minor": ['Ab2', 'Bb2', 'Cb3', 'C3', 'Db3', 'Eb3', 'Fb3', 'F3', 'Gb3', 'G3', 'Ab3'],
  "E Melodic Minor": ['E3', 'F#3', 'G3', 'G#3', 'A3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4'],
  "B Melodic Minor": ['B2', 'C#3', 'D3', 'D#3', 'E3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'],
  "F# Melodic Minor": ['F#3', 'G#3', 'A3', 'A#3', 'B3', 'C#4', 'D4', 'D#4', 'E4', 'E#4', 'F#4'],
  "C# Melodic Minor": ['C#3', 'D#3', 'E3', 'E#3', 'F#3', 'G#3', 'A3', 'A#3', 'B3', 'B#3', 'C#4'],
  "G# Melodic Minor": ['G#3', 'A#3', 'B3', 'B#3', 'C#4', 'D#4', 'E4', 'E#4', 'F#4', 'F##4', 'G#4'],
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

//console.log("Trombone.js built levels:", Object.keys(window.fingeringsByLevel));