const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
function load(id){const context={};context.window=context;vm.createContext(context);for(const file of ['js/scales.js','js/instrument-builder.js',`js/instruments/${id}.js`])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);return context;}
test('enharmonic octave boundaries and double accidentals',()=>{const {ScaleLibrary:t}=load('Flute');for(const [a,b] of [['Cb5','B4'],['B#4','C5'],['F##5','G5']])assert.equal(t.parse(a).midi,t.parse(b).midi);});
test('melodic minor keeps the minor third and descends naturally',()=>{const c=load('Flute');assert.deepEqual(Array.from(c.ScaleLibrary.sequence('G4','Melodic Minor')),['G4','A4','Bb4','C5','D5','E5','F#5','G5','F5','Eb5','D5','C5','Bb4','A4','G4']);});
test('concert Bb uses correct written tonic',()=>{for(const [id,tonic] of [['Flute','Bb'],['Trumpet','C'],['Clarinet','C'],['Alto_Sax','G'],['Tenor_Sax','C'],['Single_Horn','F']]){const c=load(id);assert.equal(c.scaleSequences['Bb Major'][0].replace(/\d+$/,''),tonic);}});
for(const file of fs.readdirSync(path.join(root,'js/instruments'))){const id=file.slice(0,-3);test(`${id}: all offered scales are complete and every fingering matches the diagram`,()=>{const c=load(id),t=c.ScaleLibrary;const svg=fs.readFileSync(path.join(root,'images/svg',id.toLowerCase()+'.svg'),'utf8');const ids=new Set(Array.from(svg.matchAll(/\bid="([^"]+)"/g),m=>m[1]));for(const [name,pool] of Object.entries(c.fingeringsByLevel)){assert.ok(Object.keys(pool).length);for(const entry of Object.values(pool))for(const button of entry.fingering)assert.ok(ids.has(button),`${name}: missing button ${button}`);if(/Major|Minor/.test(name)){const sequence=c.scaleSequences[name];assert.equal(sequence.length,name.endsWith('Melodic Minor')?15:8);const start=t.parse(sequence[0]).midi;const intervals=name.endsWith('Major')?t.patterns.Major:t.patterns[name.replace(/^\S+ /,'')];for(let i=0;i<8;i++)assert.equal(t.parse(sequence[i]).midi-start,intervals[i]);}}});}
test('renderer accepts every offered spelling and alternate fingering',()=>{
 function element(){return {innerHTML:'',attributes:{},children:[],setAttribute(k,v){this.attributes[k]=v;},append(...nodes){this.children.push(...nodes);},appendChild(node){this.children.push(node);}};}
 for(const file of fs.readdirSync(path.join(root,'js/instruments'))){const c=load(file.slice(0,-3)),container=element();c.document={createElementNS:element,getElementById:()=>container};vm.runInContext(fs.readFileSync(path.join(root,'js/note-renderer.js'),'utf8'),c);c.NoteRenderer.init('test');for(const pool of Object.values(c.fingeringsByLevel))for(const note of Object.keys(pool))c.NoteRenderer.renderNote(note,c.instrumentClef);assert.ok(!JSON.stringify(container).includes('NaN'));}
});
