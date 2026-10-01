/* ==CARL FISCHER HANDY MANUAL IDs== */ 

// One clef definition for the whole instrument.
window.instrumentClef = 'treble';

// Part 1: Master note list
const allNotes = {
  'F#3': {
    fingering: ['1', '2', '3'],
  },
  'Gb3': {
    fingering: ['1', '2', '3'],
  },
  'G3': {
    fingering: ['1', '3'],
  },
  'G#3': {
    fingering: ['2', '3'],
  },
  'Ab3': {
    fingering: ['2', '3'],
  },
  'A3': {
    fingering: ['1', '2'],
  },
  'A#3': {
    fingering: ['1'],
  },
  'Bb3': {
    fingering: ['1'],
  },
  'B3': {
    fingering: ['2'],
  },
  'C4': {
  fingering: [],
  },
  'C#4': {
    fingering: ['1', '2', '3'],
  },
  'Db4': {
    fingering: ['1', '2', '3'],
  },
  'D4': {
    fingering: ['1', '3'],
  },
  'D#4': {
    fingering: ['2', '3'],
  },
  'Eb4': {
    fingering: ['2', '3'],
  },
  'E4': {
    fingering: ['1', '2'],
  },
  'F4': {
    fingering: ['1'],
  },
  'F#4': {
    fingering: ['2'],
  },
  'Gb4': {
    fingering: ['2'],
  },
  'G4': {
    fingering: [],
    },
  'G#4': {
    fingering: ['2', '3'],
  },
  'Ab4': {
    fingering: ['2', '3'],
  },
  'A4': {
    fingering: ['1', '2'],
    },
  'A#4': {
    fingering: ['1'],
  },
  'Bb4': {
    fingering: ['1'],
  },
  'B4': {
    fingering: ['2'],
  },
  'C5': {
    fingering: [],
  },
  'C#5': {
    fingering: ['1', '2'],
  },
  'Db5': {
    fingering: ['1', '2'],
  },
  'D5': {
    fingering: ['1'],
  },
  'D#5': {
    fingering: ['2'],
  },
  'Eb5': {
    fingering: ['2'],
  },
  'E5': {
    fingering: [],
  },
  'F5': {
    fingering: ['1'],
  },
  'F#5': {
    fingering: ['2'],
  },
  'Gb5': {
    fingering: ['2'], 
  },
  'G5': {
    fingering: [],
  },
  'G#5': {
    fingering: ['2', '3'],
  },
  'Ab5': {
    fingering: ['2', '3'],
  },
  'A5': {
    fingering: ['1', '2'],
  },
  'A#5': {
    fingering: ['1'],
  },
  'Bb5': {
    fingering: ['1'],
  },
  'B5': {
    fingering: ['2'],
  },
  'C6': {
    fingering: [],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
	
  //Pre-made Levels
  "Level 1": ['C4', 'D4', 'E4', 'F4', 'G4'],
  "Level 2": ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
  "Level 3": ['A3', 'Bb3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5'],
  "Level 4": ['A3', 'Bb3', 'B3', 'C4', 'D4', 'Eb4', 'E4', 'F4', 'F#4', 'G4', 'A4', 'Bb4', 'B4', 'C5'],
  
  //Scales
  //Major Scales
  "Bb Major": ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
  "Eb Major": ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'],
  "Ab Major": ['Bb3', 'C4', 'D4', 'Eb4', 'F4', 'G4', 'A4', 'Bb4'],
  "Db Major": ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'],
  "Gb Major": ['Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'F5', 'Gb5'],
  "Cb Major": ['Cb4', 'Db4', 'Eb4', 'Fb4', 'Gb4', 'Ab4', 'Bb4', 'Cb5'],
  "G Major": ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
  "D Major": ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'],
  "A Major": ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G#4', 'A4'],
  "E Major": ['E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5', 'D#5', 'E5'],
  "B Major": ['B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A#4', 'B4'],
  "F# Major": ['F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E#5', 'F#5'],
  "C# Major": ['C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B#4', 'C#5'],

  //Natural Minor Scales
  "A Natural Minor": ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
  "D Natural Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C5', 'D5'],
  "G Natural Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5'],
  "C Natural Minor": ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'],
  "F Natural Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5'],
  "Bb Natural Minor": ['Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4'],
  "Eb Natural Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5'],
  "Ab Natural Minor": ['Ab3', 'Bb3', 'Cb4', 'Db4', 'Eb4', 'Fb4', 'Gb4', 'Ab4'],
  "E Natural Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'],
  "B Natural Minor": ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4'],
  "F# Natural Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'],
  "C# Natural Minor": ['C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A4', 'B4', 'C#5'],
  "G# Natural Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'],
  "D# Natural Minor": ['D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5'],
  "A# Natural Minor": ['A#3', 'B#3', 'C#4', 'D#4', 'E#4', 'F#4', 'G#4', 'A#4'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G#4', 'A4'],
  "D Harmonic Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'C#5', 'D5'],
  "G Harmonic Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F#5', 'G5'],
  "C Harmonic Minor": ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'B4', 'C5'],
  "F Harmonic Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'E5', 'F5'],
  "Bb Harmonic Minor": ['Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'Gb4', 'A4', 'Bb4'],
  "Eb Harmonic Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'D5', 'Eb5'],
  "Ab Harmonic Minor": ['Ab3', 'Bb3', 'Cb4', 'Db4', 'Eb4', 'Fb4', 'G4', 'Ab4'],
  "E Harmonic Minor": ['E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D#5', 'E5'],
  "B Harmonic Minor": ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A#4', 'B4'],
  "F# Harmonic Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E#5', 'F#5'],
  "C# Harmonic Minor": ['C#4', 'D#4', 'E4', 'F#4', 'G#4', 'A4', 'B#4', 'C#5'],
  "G# Harmonic Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F##5', 'G#5'],
  "D# Harmonic Minor": ['D#4', 'E#4', 'F#4', 'G#4', 'A#4', 'B4', 'C##5', 'D#5'],
  "A# Harmonic Minor": ['A#3', 'B#3', 'C#4', 'D#4', 'E#4', 'F#4', 'G##4', 'A#4'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4'],
  "D Melodic Minor": ['D4', 'E4', 'F4', 'G4', 'A4', 'Bb4', 'B4', 'C5', 'C#5', 'D5'],
  "G Melodic Minor": ['G4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'Eb5', 'E5', 'F5', 'F#5', 'G5'],
  "C Melodic Minor": ['C4', 'D4', 'Eb4', 'E4', 'F4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5'],
  "F Melodic Minor": ['F4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5'],
  "Bb Melodic Minor": ['Bb3', 'C4', 'Db4', 'D4', 'Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4'],
  "Eb Melodic Minor": ['Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'D5', 'Eb5'],
  "Ab Melodic Minor": ['Ab3', 'Bb3', 'Cb4', 'C4', 'Db4', 'Eb4', 'Fb4', 'F4', 'Gb4', 'G4', 'Ab4'],
  "E Melodic Minor": ['E4', 'F#4', 'G4', 'G#4', 'A4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5'],
  "B Melodic Minor": ['B3', 'C#4', 'D4', 'D#4', 'E4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'],
  "F# Melodic Minor": ['F#4', 'G#4', 'A4', 'A#4', 'B4', 'C#5', 'D5', 'D#5', 'E5', 'E#5', 'F#5'],
  "C# Melodic Minor": ['C#4', 'D#4', 'E4', 'E#4', 'F#4', 'G#4', 'A4', 'A#4', 'B4', 'B#4', 'C#5'],
  "G# Melodic Minor": ['G#4', 'A#4', 'B4', 'B#4', 'C#5', 'D#5', 'E5', 'E#5', 'F#5', 'F##5', 'G#5'],
  "D# Melodic Minor": ['D#4', 'E#4', 'F#4', 'F##4', 'G#4', 'A#4', 'B4', 'B#4', 'C#5', 'C##5', 'D#5'],
  "A# Melodic Minor": ['A#3', 'B#3', 'C#4', 'C##4', 'D#4', 'E#4', 'F#4', 'F##4', 'G#4', 'G##4', 'A#4'],

  //Chromatic Scale
  "Chromatic Scale": ['C4', 'C#4', 'Db4', 'D4', 'D#4', 'Eb4', 'E4', 'F4', 'F#4', 'Gb4', 'G4', 'G#4', 'Ab4', 'A4', 'A#4', 'Bb4', 'B4', 'C5'],
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

//console.log("Trumpet.js built levels:", Object.keys(window.fingeringsByLevel));
