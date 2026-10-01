window.NoteRenderer = (() => {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const config = {
    viewBox: "0 40 320 240",

    staffTopY: 110,
    lineSpacing: 24,

    staffStartX: 34,
    staffBaseEndX: 520,
    staffWidthScale: 0.55 * 0.95,

    bassClefScale: 0.18,
    bassClefYOffset: 112,

    trebleClefScale: 1.05,
    trebleClefXOffset: -7,
    trebleClefYOffset: 86,

    noteScale: 3.58,
    noteYOffset: -1,

    ledgerHalfWidth: 24,

    flatScale: 0.0076,
    flatXOffset: -14,
    flatYOffset: 12,

    sharpScale: 2.56,
    sharpXOffset: -14,
    sharpYOffset: 17
  };

  let svg, staffLinesGroup, ledgerLinesGroup, clefGroup, noteHeadGroup, accidentalGroup, flatGroup, sharpGroup;

  const naturalIndex = { C:0,D:1,E:2,F:3,G:4,A:5,B:6 };

  const staffBottomY = () => config.staffTopY + config.lineSpacing * 4;
  const staffStep = () => config.lineSpacing / 2;

  const staffWidth = () => (config.staffBaseEndX - config.staffStartX) * config.staffWidthScale;
  const staffEndX = () => config.staffStartX + staffWidth();

  const noteX = () => (config.staffStartX + 96 + staffEndX()) / 2;
  const accidentalX = () => noteX() - 40;

  const bassF3Y = () => config.staffTopY + config.lineSpacing;
  const bassIndex = () => naturalIndex.F + 3 * 7;

  const trebleG4Y = () => config.staffTopY + config.lineSpacing * 3;
  const trebleIndex = () => naturalIndex.G + 4 * 7;

  function create(tag, attrs={}) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v));
    return el;
  }

  function parse(note){
    const m = note.match(/^([A-G])([b#]?)([0-9])$/);
    return {letter:m[1], accidental:m[2], octave:+m[3]};
  }

  function getY(note, clef){
    const p = parse(note);
    const idx = naturalIndex[p.letter] + p.octave * 7;

    if(clef==="bass"){
      return bassF3Y() - (idx - bassIndex()) * staffStep();
    }
    if(clef==="treble"){
      return trebleG4Y() - (idx - trebleIndex()) * staffStep();
    }
  }

  function drawStaff(){
    staffLinesGroup.innerHTML="";
    for(let i=0;i<5;i++){
      staffLinesGroup.appendChild(create("line",{
        x1:config.staffStartX,
        x2:staffEndX(),
        y1:config.staffTopY+i*config.lineSpacing,
        y2:config.staffTopY+i*config.lineSpacing,
        stroke:"black",
        "stroke-width":3
      }));
    }
  }
  
    function drawBass(){
    clefGroup.innerHTML="";
    clefGroup.setAttribute("transform",
      `translate(${config.staffStartX+6},${config.bassClefYOffset}) scale(${config.bassClefScale})`
    );

    clefGroup.innerHTML = `
      <path d="M176.014,0l-2.823,0.01C89.091,1.164,20.78,63.557,15.904,118.564c-3.125,35.072,4.693,63.941,22.568,83.494c16.307,17.803,39.765,26.836,69.727,26.836c31.095,0,61.603-29.77,61.603-60.106c0-30.803-25.076-55.869-55.888-55.869c-16.569,0-27.575,7.323-34.858,12.179c-2.853,1.892-5.796,3.854-7.121,3.854c-0.446,0-1.477-1.184-2.458-5.635c-3.399-15.335,1.902-33.644,14.212-48.98c10.399-12.978,34.858-34.726,81.876-34.726c65.67,0,101.833,52.894,101.833,148.952c0,192.852-165.703,271.845-216.483,291.459c-10.398,4.016-13.778,12.716-12.492,19.553C39.828,507.002,45.947,512,53.686,512c2.448,0,5.037-0.496,7.657-1.477l5.807-2.165C262.916,435.82,362.19,326.247,362.19,182.648C362.19,57.164,265.688,0,176.014,0z"/>
      <circle cx="455.486" cy="85.548" r="41.282"/>
      <circle cx="455.486" cy="252.647" r="41.282"/>
    `;
  }

function drawTreble() {
  clefGroup.innerHTML = "";

  clefGroup.setAttribute(
    "transform",
    `translate(${config.staffStartX + config.trebleClefXOffset}, ${config.trebleClefYOffset}) scale(${config.trebleClefScale})`
  );

  clefGroup.innerHTML = `
    <path
      d="m51.688 5.25c-5.427-0.1409-11.774 12.818-11.563 24.375 0.049 3.52 1.16 10.659 2.781 19.625-10.223 10.581-22.094 21.44-22.094 35.688-0.163 13.057 7.817 29.692 26.75 29.532 2.906-0.02 5.521-0.38 7.844-1 1.731 9.49 2.882 16.98 2.875 20.44 0.061 13.64-17.86 14.99-18.719 7.15 3.777-0.13 6.782-3.13 6.782-6.84 0-3.79-3.138-6.88-7.032-6.88-2.141 0-4.049 0.94-5.343 2.41-0.03 0.03-0.065 0.06-0.094 0.09-0.292 0.31-0.538 0.68-0.781 1.1-0.798 1.35-1.316 3.29-1.344 6.06 0 11.42 28.875 18.77 28.875-3.75 0.045-3.03-1.258-10.72-3.156-20.41 20.603-7.45 15.427-38.04-3.531-38.184-1.47 0.015-2.887 0.186-4.25 0.532-1.08-5.197-2.122-10.241-3.032-14.876 7.199-7.071 13.485-16.224 13.344-33.093 0.022-12.114-4.014-21.828-8.312-21.969zm1.281 11.719c2.456-0.237 4.406 2.043 4.406 7.062 0.199 8.62-5.84 16.148-13.031 23.719-0.688-4.147-1.139-7.507-1.188-9.5 0.204-13.466 5.719-20.886 9.813-21.281zm-7.719 44.687c0.877 4.515 1.824 9.272 2.781 14.063-12.548 4.464-18.57 21.954-0.781 29.781-10.843-9.231-5.506-20.158 2.312-22.062 1.966 9.816 3.886 19.502 5.438 27.872-2.107 0.74-4.566 1.17-7.438 1.19-7.181 0-21.531-4.57-21.531-21.875 0-14.494 10.047-20.384 19.219-28.969zm6.094 21.469c0.313-0.019 0.652-0.011 0.968 0 13.063 0 17.99 20.745 4.688 27.375-1.655-8.32-3.662-17.86-5.656-27.375z"
      fill="black"
      fill-rule="evenodd"
      clip-rule="evenodd"
    />
  `;
}

  function drawNote(){
    noteHeadGroup.innerHTML = `
      <path d="M 0.65021,3.39329 C -1.06679,3.30244 -2.40853,1.77833 -2.94692,0.20226 C -3.27311,-0.72278 -3.09395,-2.11050 -2.00726,-2.37034 C -0.43285,-2.63774 0.87360,-1.30033 1.60581,-0.02047 C 2.12741,0.92880 2.41578,2.42368 1.43779,3.17615 C 1.20558,3.33188 0.92487,3.39434 0.65021,3.39329 z M 3.38546,-2.01000 C 1.45101,-3.18490 -0.99259,-3.27642 -3.11087,-2.61890 C -4.45270,-2.14975 -5.98731,-1.15177 -6.00000,0.47250 C -6.00093,2.06396 -4.52000,3.05675 -3.20951,3.52959 C -1.13482,4.20824 1.25896,4.14856 3.19601,3.06669 C 4.29249,2.48333 5.26434,1.27535 4.93479,-0.06357 C 4.75358,-0.92454 4.09404,-1.56877 3.38546,-2.01000 z"/>
    `;
  }

  function drawAccidental(note, y) {
    accidentalGroup.innerHTML = "";

    const p = parse(note);

    if (!p.accidental) return;

    if (p.accidental === "b") {
      accidentalGroup.innerHTML = `
        <text
          x="${accidentalX() + config.flatXOffset}"
          y="${y + config.flatYOffset}"
          font-size="72"
          font-family="serif"
          fill="black"
        >♭</text>
      `;
    }

    if (p.accidental === "#") {
      accidentalGroup.innerHTML = `
        <text
          x="${accidentalX() + config.sharpXOffset}"
          y="${y + config.sharpYOffset}"
          font-size="58"
          font-family="serif"
          fill="black"
        >♯</text>
      `;
    }
  }

  function drawLedger(y) {
  ledgerLinesGroup.innerHTML = "";

  const topStaffY = config.staffTopY;
  const bottomStaffY = staffBottomY();

  // Above staff
  if (y < topStaffY) {
    for (
      let yy = topStaffY - config.lineSpacing;
      yy >= y;
      yy -= config.lineSpacing
    ) {
      ledgerLinesGroup.appendChild(create("line", {
        x1: noteX() - config.ledgerHalfWidth,
        x2: noteX() + config.ledgerHalfWidth,
        y1: yy,
        y2: yy,
        stroke: "black",
        "stroke-width": 3
      }));
    }
  }

  // Below staff
  if (y > bottomStaffY) {
    for (
      let yy = bottomStaffY + config.lineSpacing;
      yy <= y;
      yy += config.lineSpacing
    ) {
      ledgerLinesGroup.appendChild(create("line", {
        x1: noteX() - config.ledgerHalfWidth,
        x2: noteX() + config.ledgerHalfWidth,
        y1: yy,
        y2: yy,
        stroke: "black",
        "stroke-width": 3
      }));
    }
  }
}

  function init(id){
    const c=document.getElementById(id);
    c.innerHTML="";

    svg=create("svg",{id:"noteRendererSvg",viewBox:config.viewBox});
    staffLinesGroup=create("g");
    clefGroup=create("g");
    ledgerLinesGroup=create("g");
    noteHeadGroup=create("g");
    accidentalGroup = create("g");
    
	svg.append(staffLinesGroup,clefGroup,ledgerLinesGroup,accidentalGroup,noteHeadGroup);
    c.appendChild(svg);

    drawStaff();
    drawNote();
  }

  function render(note,clef="bass"){
    const y=getY(note,clef);
    drawStaff();
    clef==="bass"?drawBass():drawTreble();

    noteHeadGroup.setAttribute("transform",
      `translate(${noteX()},${y+config.noteYOffset}) scale(${config.noteScale})`
    );

    drawLedger(y);
	drawAccidental(note, y);
  }

  return {init,renderNote:render};
})();