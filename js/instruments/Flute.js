/* ==CARL FISCHER HANDY MANUAL IDs== */ 

// One clef definition for the whole instrument.
window.instrumentClef = 'treble';

// Part 1: Master note list
const allNotes = {
  'C4': {
  fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI', '3', '4'],
  },
  'C#4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI', '3'],	
  },
  'Db4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI', '3'],
  },
  'D4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'Eb4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'E4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', '2'],
  },
  'Fb4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', '2'],
  },
  'E#4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', '2'],
  },
  'F4': {
    fingering: ['6', 'I', 'II', 'III', 'IV', '2'],
  },
  'F#4': {
    fingering: ['6', 'I', 'II', 'III', 'VI', '2'],
  },
  'Gb4': {
    fingering: ['6', 'I', 'II', 'III', 'VI', '2'],
  },
  'G4': {
    fingering: ['6', 'I', 'II', 'III', '2'],
    },
  'G#4': {
    fingering: ['6', 'I', 'II', 'III', '1', '2'],
  },
  'Ab4': {
    fingering: ['6', 'I', 'II', 'III', '1', '2'],
  },
  'A4': {
    fingering: ['6', 'I', 'II', '2'],
    },
  'A#4': {
    fingering: ['6', 'I', 'IV', '2'],
  },
  'Bb4': {
    fingering: ['6', 'I', 'IV', '2'],
  },
  'B4': {
    fingering: ['6', 'I', '2'],
  },
  'Cb4': {
    fingering: ['6', 'I', '2'],
  },
  'B#5': {
    fingering: ['I', '2'],
  },
  'C5': {
    fingering: ['I', '2'],
  },
  'C#5': {
    fingering: ['2'],
  },
  'Db5': {
    fingering: ['2'],
  },
  'D5': {
    fingering: ['6', 'II', 'III', 'IV', 'V', 'VI'],
  },
  'D#5': {
    fingering: ['6', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'Eb5': {
    fingering: ['6', 'II', 'III', 'IV', 'V', 'VI', '2'],
  },
  'E5': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', '2'],
  },
  'Fb5': {
    fingering: ['6', 'I', 'II', 'III', 'IV', 'V', '2'],
  },
  'E#5': {
    fingering: ['6', 'I', 'II', 'III', 'IV', '2'],
  },
  'F5': {
    fingering: ['6', 'I', 'II', 'III', 'IV', '2'],
  },
  'F#5': {
    fingering: ['6', 'I', 'II', 'III', 'VI', '2'],
  },
  'Gb5': {
    fingering: ['6', 'I', 'II', 'III', 'VI', '2'],
  },
  'G5': {
    fingering: ['6', 'I', 'II', 'III', '2'],
  },
  'G#5': {
    fingering: ['6', 'I', 'II', 'III', '1', '2'],
  },
  'Ab5': {
    fingering: ['6', 'I', 'II', 'III', '1', '2'],
  },
  'A5': {
    fingering: ['6', 'I', 'II', '2'],
  },
  'A#5': {
    fingering: ['6', 'I', 'IV', '2'],
  },
  'Bb5': {
    fingering: ['6', 'I', 'IV', '2'],
  },
  'B5': {
    fingering: ['6', 'I', '2'],
  },
  'Cb5': {
    fingering: ['6', 'I', '2'],
  },
  'B#6': {
    fingering: ['I', '2'],
  },
  'C6': {
    fingering: ['I', '2'],
  },
  'C#6': {
    fingering: ['2'],
  },
  'Db6': {
    fingering: ['2'],
  },
  'D6': {
    fingering: ['6', 'II', 'III', '2'],
  },
  'D#6': {
    fingering: ['6', 'I', 'II', 'III', '1', 'IV', 'V', 'VI', '2'],
  },
  'Eb6': {
    fingering: ['6', 'I', 'II', 'III', '1', 'IV', 'V', 'VI', '2'],
  },
  'E6': {
    fingering: ['6', 'I', 'II', 'IV', 'V', '2'],
  },
  'Fb6': {
    fingering: ['6', 'I', 'II', 'IV', 'V', '2'],
  },
  'E#6': {
    fingering: ['6', 'I', 'III', 'IV', '2'],
  },
  'F6': {
    fingering: ['6', 'I', 'III', 'IV', '2'],
  },
  'F#6': {
    fingering: ['6', 'I', 'III', 'VI', '2'],
  },
  'Gb6': {
    fingering: ['6', 'I', 'III', 'VI', '2'],
  },
  'G6': {
    fingering: ['I', 'II', 'III', '2'],
  },
  'G#6': {
    fingering: ['II', 'III', '1', '2'],
  },
  'Ab6': {
    fingering: ['II', 'III', '1', '2'],
  },
  'A6': {
    fingering: ['6', 'II', '1', 'IV', '2'],
  },
  'A#6': {
    fingering: ['6', '1', 'IV', '7'],
  },
  'Bb6': {
    fingering: ['6', '1', 'IV', '7'],
  },
  'B6': {
    fingering: ['6', 'I', '1', '8'],
  },
  'Cb6': {
    fingering: ['6', 'I', '1', '8'],
  },
  'Bb7': {
    fingering: ['I', 'II', 'III', '1', 'IV'],
  },
  'C7': {
    fingering: ['I', 'II', 'III', '1', 'IV'],
  }
};

// Part 2: Notes grouped by level
const allLevels = {
  
  //Pre-made Levels
  "First 3 Notes": ['Bb4', 'C5', 'D5'],
  "Level 1": ['Bb4', 'C5', 'D5', 'Eb5', 'F5'],
  "Level 2": ['A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'A5'],
  "Level 3": ['F4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'Ab5', 'Bb5'],
  "Level 4": ['Eb4', 'E4', 'F4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'F5', 'G5', 'Ab5', 'A5', 'Bb5'],
  
  //Scales
  //Major Scales
  "C Major": ['C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'],
  "F Major": ['F4', 'G4', 'A4', 'Bb4', 'C5', 'D5', 'E5', 'F5'],
  "Bb Major": ['Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5', 'A5', 'Bb5'],
  "Eb Major": ['Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5', 'D5', 'Eb5'],
  "Ab Major": ['Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'G5', 'Ab5'],
  "Db Major": ['Db5', 'Eb5', 'F5', 'Gb5', 'Ab5', 'Bb5', 'C6', 'Db6'],
  "Gb Major": ['Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'F5', 'Gb5'],
  "Cb Major": ['Cb5', 'Db5', 'Eb5', 'Fb5', 'Gb5', 'Ab5', 'Bb5', 'Cb6'],
  "G Major": ['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5'],
  "D Major": ['D5', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C#6', 'D6'],
  "A Major": ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G#5', 'A5'],
  "E Major": ['E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6', 'D#6', 'E6'],
  "B Major": ['B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A#5', 'B5'],
  "F# Major": ['F#4', 'G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E#5', 'F#5'],
  "C# Major": ['C#5', 'D#5', 'E#5', 'F#5', 'G#5', 'A#5', 'B#5', 'C#6'],
  
  //Natural Minor Scales
  "A Natural Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5'],
  "D Natural Minor": ['D5', 'E5', 'F5', 'G5', 'A5', 'Bb5', 'C6', 'D6'],
  "G Natural Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F5', 'G5'],
  "C Natural Minor": ['C5', 'D5', 'Eb5', 'F5', 'G5', 'Ab5', 'Bb5', 'C6'],
  "F Natural Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'Eb5', 'F5'],
  "Bb Natural Minor": ['Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'Gb5', 'Ab5', 'Bb5'],
  "Eb Natural Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5'],
  "Ab Natural Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'Gb5', 'Ab5'],
  "E Natural Minor": ['E5', 'F#5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6'],
  "B Natural Minor": ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5', 'B5'],
  "F# Natural Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'],
  "C# Natural Minor": ['C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6'],
  "G# Natural Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F#5', 'G#5'],
  "D# Natural Minor": ['D#5', 'E#5', 'F#5', 'G#5', 'A#5', 'B5', 'C#6', 'D#6'],
  "A# Natural Minor": ['A#4', 'B#4', 'C#5', 'D#5', 'E#5', 'F#5', 'G#5', 'A#5'],

  //Harmonic Minor Scales
  "A Harmonic Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G#5', 'A5'],
  "D Harmonic Minor": ['D5', 'E5', 'F5', 'G5', 'A5', 'Bb5', 'C#6', 'D6'],
  "G Harmonic Minor": ['G4', 'A4', 'Bb4', 'C5', 'D5', 'Eb5', 'F#5', 'G5'],
  "C Harmonic Minor": ['C5', 'D5', 'Eb5', 'F5', 'G5', 'Ab5', 'B5', 'C6'],
  "F Harmonic Minor": ['F4', 'G4', 'Ab4', 'Bb4', 'C5', 'Db5', 'E5', 'F5'],
  "Bb Harmonic Minor": ['Bb4', 'C5', 'Db5', 'Eb5', 'F5', 'Gb5', 'A5', 'Bb5'],
  "Eb Harmonic Minor": ['Eb4', 'F4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'D5', 'Eb5'],
  "Ab Harmonic Minor": ['Ab4', 'Bb4', 'Cb5', 'Db5', 'Eb5', 'Fb5', 'G5', 'Ab5'],
  "E Harmonic Minor": ['E5', 'F#5', 'G5', 'A5', 'B5', 'C6', 'D#6', 'E6'],
  "B Harmonic Minor": ['B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A#5', 'B5'],
  "F# Harmonic Minor": ['F#4', 'G#4', 'A4', 'B4', 'C#5', 'D5', 'E#5', 'F#5'],
  "C# Harmonic Minor": ['C#5', 'D#5', 'E5', 'F#5', 'G#5', 'A5', 'B#5', 'C#6'],
  "G# Harmonic Minor": ['G#4', 'A#4', 'B4', 'C#5', 'D#5', 'E5', 'F##5', 'G#5'],
  "D# Harmonic Minor": ['D#5', 'E#5', 'F#5', 'G#5', 'A#5', 'B5', 'C##6', 'D#6'],
  "A# Harmonic Minor": ['A#4', 'B#4', 'C#5', 'D#5', 'E#5', 'F#5', 'G##5', 'A#5'],

  //Melodic Minor Scales
  "A Melodic Minor": ['A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5'],
  "D Melodic Minor": ['D5', 'E5', 'F5', 'G5', 'A5', 'Bb5', 'B5', 'C6', 'C#6', 'D6'],
  "G Melodic Minor": ['G4', 'A4', 'Bb4', 'B4', 'C5', 'D5', 'Eb5', 'E5', 'F5', 'F#5', 'G5'],
  "C Melodic Minor": ['C5', 'D5', 'Eb5', 'E5', 'F5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6'],
  "F Melodic Minor": ['F4', 'G4', 'Ab4', 'A4', 'Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5'],
  "Bb Melodic Minor": ['Bb4', 'C5', 'Db5', 'D5', 'Eb5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5'],
  "Eb Melodic Minor": ['Eb4', 'F4', 'Gb4', 'G4', 'Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'D5', 'Eb5'],
  "Ab Melodic Minor": ['Ab4', 'Bb4', 'Cb5', 'C5', 'Db5', 'Eb5', 'Fb5', 'F5', 'Gb5', 'G5', 'Ab5'],
  "E Melodic Minor": ['E5', 'F#5', 'G5', 'G#5', 'A5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6'],
  "B Melodic Minor": ['B4', 'C#5', 'D5', 'D#5', 'E5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5'],
  "F# Melodic Minor": ['F#4', 'G#4', 'A4', 'A#4', 'B4', 'C#5', 'D5', 'D#5', 'E5', 'E#5', 'F#5'],
  "C# Melodic Minor": ['C#5', 'D#5', 'E5', 'E#5', 'F#5', 'G#5', 'A5', 'A#5', 'B5', 'B#5', 'C#6'],
  "G# Melodic Minor": ['G#4', 'A#4', 'B4', 'B#4', 'C#5', 'D#5', 'E5', 'E#5', 'F#5', 'F##5', 'G#5'],
  "D# Melodic Minor": ['D#5', 'E#5', 'F#5', 'F##5', 'G#5', 'A#5', 'B5', 'B#5', 'C#6', 'C##6', 'D#6'],
  "A# Melodic Minor": ['A#4', 'B#4', 'C#5', 'C##5', 'D#5', 'E#5', 'F#5', 'F##5', 'G#5', 'G##5', 'A#5'],
  
  //Chromatic Scales
  "Chromatic Scale": ['Bb4', 'B4', 'C5', 'C#5', 'Db5', 'D5', 'D#5', 'Eb5', 'E5', 'F5', 'F#5', 'Gb5', 'G5', 'G#5', 'Ab5', 'A5', 'A#5', 'Bb5'],
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

//console.log("Flute.js built levels:", Object.keys(window.fingeringsByLevel));