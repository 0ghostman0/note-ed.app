/* ==All Button IDs== */
/* E String */
//  Open: EO
//  Fret 1: E1
//  Fret 2: E2
//  Fret 3: E3
//  Fret 4: E4
/* A String */
//  Open: AO
//  Fret 1: A1
//  Fret 2: A2
//  Fret 3: A3
//  Fret 4: A4
/* D String */
//  Open: DO
//  Fret 1: D1
//  Fret 2: D2
//  Fret 3: D3
//  Fret 4: D4
/* G String */
//  Open: GO
//  Fret 1: G1
//  Fret 2: G2
//  Fret 3: G3
//  Fret 4: G4

// One clef definition for the whole instrument.
window.instrumentClef = 'bass'; 

// Part 1: Master note list
const allNotes = {
  'E2': {
    fingering: ['EO'],
  },
  'F2': {
    fingering: ['E1'],
  },
  'F#2': {
    fingering: ['E2'],
  },
  'Gb2': {
    fingering: ['E2'],
  },
  'G2': {
    fingering: ['E3'],
  },
  'G#2': {
    fingering: ['E4'],
  },
  'Ab2': {
    fingering: ['E4'],
  },
  'A2': {
    fingering: ['AO'],
  },
  'A#2': {
    fingering: ['A1'],
  },
  'Bb2': {
    fingering: ['A1'],
  },
  'B2': {
    fingering: ['A2'],
  },
  'C3': {
    fingering: ['A3'],
  },
  'C#3': {
    fingering: ['A4'],
  },
  'Db3': {
    fingering: ['A4'],
  },
  'D3': {
    fingering: ['DO'],
  },
  'D#3': {
    fingering: ['D1'],
  },
  'Eb3': {
    fingering: ['D1'],
  },
  'E3': {
    fingering: ['D2'],
  },
  'F3': {
    fingering: ['D3'],
  },
  'F#3': {
    fingering: ['D4'],
  },
  'Gb3': {
    fingering: ['D4'],
  },
  'G3': {
    fingering: ['GO'],
  },
  'G#3': {
    fingering: ['G1'],
  },
  'Ab3': {
    fingering: ['G1'],
  },
  'A3': {
    fingering: ['G2'],
  },
  'A#3': {
    fingering: ['G3'],
  },
  'Bb3': {
    fingering: ['G3'],
  },
  'B3': {
    fingering: ['G4'],
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

//console.log("Bass_Guitar.js built levels:", Object.keys(window.fingeringsByLevel));