# note-ed.app

Static fingering practice app. No build step or package installation is needed to deploy. Serve this folder over HTTP; opening the HTML directly from disk prevents diagram fetches.

## Where to make changes

- `js/scales.js`: shared scale patterns, concert key list, spelling, and chromatic notes.
- `js/instrument-builder.js`: shared fingering lookup, concert-to-written transposition, and complete-scale validation.
- `js/instruments/*.js`: each instrument's fingerings, clef, beginner note groups, and written starting registers.
- `js/selection.js`: menu choices generated from those shared definitions.
- `js/note-renderer.js`: notation display, including double accidentals and alternate oboe F fingerings.

## Add a scale type

Add its ascending semitone offsets to `ScaleLibrary.patterns` in `js/scales.js`. Eight-note diatonic patterns, including the octave, are supported. The menu and every instrument pick up the new type automatically. Other structures such as pentatonic scales need an explicit letter-degree pattern in the generator rather than treating every note as the next letter.

Melodic minor uses raised sixth and seventh ascending and natural minor descending. `window.scaleSequences` preserves the ordered sequence; `window.fingeringsByLevel` is the unique note pool used for random practice.

## Change an instrument

`scaleRoots` specifies written major tonic registers. `minorRoots` supplies minor register overrides. Concert labels are generated centrally from `transpose`: semitones and diatonic letter steps from concert to written pitch. For example, a Bb instrument uses `{ semitones: 2, steps: 1 }`. Octave-transposing instruments use the same pitch-class relationship, while their explicit written registers control displayed octaves.

Fingerings resolve by absolute written pitch, so Cb5 uses B4 and B#4 uses C5. Keep the canonical natural and ordinary sharp/flat notes correct; you do not need extra entries for theoretical spellings. Oboe alternate fingerings retain distinct named entries such as `F5-Forked`.

The builder first tries the requested register, then the nearest complete octave (-1, +1, -2, +2). If no complete scale exists within the fingering data, the menu disables that choice and explains the missing notes. It never quietly truncates a scale or replaces it with Level 1.

## Existing data limitations

Both horn files lack F3, which their Levels 2–4 and chromatic scale request. Those choices are disabled until an F3 fingering is supplied. The bass-guitar data covers E2–B3, so 20 scale choices cannot fit a complete octave; these are also disabled. Existing fingering accuracy is retained, not independently audited against an instrument reference.

## Verification

Run `node --test tests/*.test.cjs` with Node.js. Tests check scale intervals, melodic-minor direction, concert transposition, enharmonic octave boundaries, completeness, and SVG button IDs for all 17 instruments.
