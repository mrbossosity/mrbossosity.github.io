var keyObjects = [],
    key,
    bassNote,
    inversion,
    noteIndex,
    chordMembers;

function createKeyObject(key,i,ii,iii,iv,v,vi,vii) {
  this.name = key;
  this.iNotes = i + ", " + iii + ", " + v;
  this.iiNotes = ii + ", " + iv + ", " + vi;
  this.ii7Notes = ii + ", " + iv + ", " + vi + ", " + i; 
  this.iiiNotes = iii + ", " + v + ", " + vii;
  this.ivNotes = iv + ", " + vi + ", " + i;
  this.vNotes = v + ", " + vii + ", " + ii;
  this.v7Notes = v + ", " + vii + ", " + ii + ", " + iv;
  this.viNotes = vi + ", " + i + ", " + iii;
  function determine7() {
    let seven = vi;
    if (vi.includes('b')) {
      seven += 'b'
    }
    if (vi.includes('#')) {
      seven = seven.replace('#', '♮')
    }
    if (!vi.includes('b') && !vi.includes('#')) {
      seven += 'b'
    }
    return seven;
  }
  this.viiNotes = vii + ", " + ii + ", " + iv;
  this.vii7Notes = vii + ", " + ii + ", " + iv + ", " + determine7();
  this.I = this.iNotes.split(", ")
  this.ii = this.iiNotes.split(", ")
  this.ii7 = this.ii7Notes.split(", ")
  this.iii = this.iiiNotes.split(", ")
  this.IV = this.ivNotes.split(", ")
  this.V = this.vNotes.split(", ")
  this.V7 = this.v7Notes.split(", ")
  this.vi = this.viNotes.split(", ")
  this.viiº = this.viiNotes.split(", ")
  this.viiº7 = this.vii7Notes.split(", ")
}

function createMinorObject(key,i,ii,iii,iv,v,vi,vii) {
  this.name = key;
  function determine3() {
    let three = v;
    if (v.includes('b')) {
      three = three.replace('b', '♮')
    }
    if (v.includes('#')) {
      three = three.replace('#', 'x')
    }
    if (!v.includes('b') && !v.includes('#')) {
      three += '#'
    }
    return three;
  }
  this.iNotes = vi + ", " + i + ", " + iii;
  function determineDim() {
    var dim = vi;
    if (vi.includes('b')) {
      dim += 'b'
    }
    if (vi.includes('#')) {
      dim = dim.replace('#', '♮')
    }
    if (!vi.includes('b') && !vi.includes('#')) {
      dim += 'b'
    }
    return dim;
  }
  this.iiNotes = vii + ", " + ii + ", " + iv;
  this.iiHalfDim7Notes = vii + ", " + ii + ", " + iv + ", " + vi;
  this.iiDim7Notes = vii + ", " + ii + ", " + iv + ", " + determineDim();
  this.iiiNotes = i + ", " + iii + ", " + v;
  this.ivNotes = ii + ", " + iv + ", " + vi;
  this.vNotes = iii + ", " + determine3() + ", " + vii;
  this.v7Notes = iii + ", " + determine3() + ", " + vii + ", " + ii;
  this.viNotes = iv + ", " + vi + ", " + i;
  this.viiNotes = determine3() + ", " + vii + ", " + ii;
  this.vii7Notes = determine3() + ", " + vii + ", " + ii + ", " + iv;
  this.i = this.iNotes.split(", ")
  this.iiº = this.iiNotes.split(", ")
  this.iiø7 = this.iiHalfDim7Notes.split(", ");
  this.iiº7 = this.iiDim7Notes.split(", ")
  this.III = this.iiiNotes.split(", ")
  this.iv = this.ivNotes.split(", ")
  this.V = this.vNotes.split(", ")
  this.V7 = this.v7Notes.split(", ")
  this.VI = this.viNotes.split(", ")
  this.viiº = this.viiNotes.split(", ")
  this.viiº7 = this.vii7Notes.split(", ")
}

const Cmaj = new createKeyObject('Cmaj','C','D','E','F','G','A','B'),
      Gmaj = new createKeyObject('Gmaj','G','A','B','C','D','E','F#'),
      Dmaj = new createKeyObject('Dmaj','D','E','F#','G','A','B','C#'),
      Amaj = new createKeyObject('Amaj','A','B','C#','D','E','F#','G#'),
      Emaj = new createKeyObject('Emaj','E','F#','G#','A','B','C#','D#'),
      Bmaj = new createKeyObject('Bmaj','B','C#','D#','E','F#','G#','A#'),
      Gbmaj = new createKeyObject('Gbmaj','Gb','Ab','Bb','Cb','Db','Eb','F'),
      Dbmaj = new createKeyObject('Dbmaj','Db','Eb','F','Gb','Ab','Bb','C'),
      Abmaj = new createKeyObject('Abmaj','Ab','Bb','C','Db','Eb','F','G'),
      Ebmaj = new createKeyObject('Ebmaj','Eb','F','G','Ab','Bb','C','D'),
      Bbmaj = new createKeyObject('Bbmaj','Bb','C','D','Eb','F','G','A'),
      Fmaj = new createKeyObject('Fmaj','F','G','A','Bb','C','D','E'),
      
      Amin = new createMinorObject('Amin','C','D','E','F','G','A','B'),
      Emin = new createMinorObject('Emin','G','A','B','C','D','E','F#'),
      Bmin = new createMinorObject('Bmin','D','E','F#','G','A','B','C#'),
      FSmin = new createMinorObject('F#min','A','B','C#','D','E','F#','G#'),
      CSmin = new createMinorObject('C#min','E','F#','G#','A','B','C#','D#'),
      GSmin = new createMinorObject('G#min','B','C#','D#','E','F#','G#','A#'),
      Ebmin = new createMinorObject('Ebmin','Gb','Ab','Bb','Cb','Db','Eb','F'),
      Bbmin = new createMinorObject('Bbmin','Db','Eb','F','Gb','Ab','Bb','C'),
      Fmin = new createMinorObject('Fmin','Ab','Bb','C','Db','Eb','F','G'),
      Cmin = new createMinorObject('Cmin','Eb','F','G','Ab','Bb','C','D'),
      Gmin = new createMinorObject('Gmin','Bb','C','D','Eb','F','G','A'),
      Dmin = new createMinorObject('Dmin','F','G','A','Bb','C','D','E');

keyObjects.push(Cmaj,Gmaj,Dmaj,Amaj,Emaj,Bmaj,Gbmaj,Dbmaj,Abmaj,Ebmaj,Bbmaj,Fmaj,Amin,Emin,Bmin,FSmin,CSmin,GSmin,Ebmin,Bbmin,Fmin,Cmin,Gmin,Dmin)

function update() {
  key = $("#key").val();
  bassNote = $("#bassNote").val();
  inversion = $("#inversion").val();
  if (inversion == "root" || inversion == "7") {
    noteIndex = 0;
  }
  if (inversion == "6" || inversion == "6/5") {
    noteIndex = 1;
  }
  if (inversion == "6/4" || inversion == "4/3") {
    noteIndex = 2;
  }
  if (inversion == "4/2") {
    noteIndex = 3;
  }
  if (inversion == "root" || inversion == "6" || inversion == "6/4") {
    chordMembers = 3
  }
  if (inversion == "7" || inversion == "6/5" || inversion == "4/3" || inversion == "4/2") {
    chordMembers = 4
  }
}

function findKeySig(element) {
  if (element.name == key) {
    return true
  } else {
    return false
  }
}

function filterOutChords(object) {
  var chord = [];
  var result = [];
  for (var prop in object) {
    if (Array.isArray(object[prop]) && object[prop].length == chordMembers && object[prop].some(function(e){return e.includes(bassNote)})) {
      chord.push(object[prop])
    }
  }
  for (var i = 0; i < chord.length; i++) {
    if (chord[i].indexOf(bassNote) == noteIndex) {
      result.push(chord[i])
    }
  }
  if (result.length == 0) {result.push(["N/A"])}
  return result;
}

function filterResultChord(result, keyObject) {
  var final;
  for (var prop in keyObject) {
    if (Array.isArray(keyObject[prop]) && arraysEqual(result, keyObject[prop])) {
      final = prop
    }
  }
  if (final.includes("7")){final = final.replace("7", "")}
  return final;
}

function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function search() {
  update();
  var filteredKey = keyObjects.filter(function(k){return k.name == key});
  var filteredNote = filterOutChords(filteredKey[0]);
  var resultChord = filterResultChord(filteredNote[0], filteredKey[0]);
  console.log(filteredNote[0]);
  console.log(resultChord)
  $("#text").html('')
  $("#after").html('')
  for (var i = 0; i < filteredNote[0].length; i++) {
    if (i == noteIndex) {
      $("#text").prepend("<span class ='bold'>" + filteredNote[0][i] + "</span><br>")
    } else {
      $("#text").prepend(filteredNote[0][i] + "<br>")
    }
  }
  if (inversion !== "root") {
    $("#text").prepend("<span class='numeral'>" + resultChord + "<sup>" + inversion + "</sup>:</span><br><br>")
  }
  if (inversion == "root") {
    $("#text").prepend("<span class='numeral'>" + resultChord + ":</span><br><br>")
    $("#after").append("<br>Double the root (" + filteredNote[0][0] + ")");
  }
  if (inversion == "6" && resultChord !== "viiº" && resultChord !== "iiº") {
    $("#after").append("<br>If possible, double the root (" + filteredNote[0][0] + ")")
  }
  if (inversion == "6" && (resultChord == "viiº" || resultChord == "iiº")) {
    $("#after").append("<br>Double the third (" + filteredNote[0][1] + ") for diminished triads in first inversion")
  }
  if (inversion == "6/4") {
    $("#after").append("<br>Double the fifth (" + filteredNote[0][2] + ")")
  }
  if ((inversion == "7" || inversion == "6/5" || inversion == "4/3" || inversion == "4/2") && filteredNote[0][0] !== "N/A") {
    if (arraysEqual(filteredNote[0], filteredKey[0].V7)) {
      $("#after").append("<br>If possible, resolve leading tone (" + filteredNote[0][1] + ") up and chordal seventh (" + filteredNote[0][3] + ") down")
    }
    if (arraysEqual(filteredNote[0], filteredKey[0].viiº7)) {
      $("#after").prepend("<br>If possible, resolve leading tone (" + filteredNote[0][0] + ") up and chordal seventh (" + filteredNote[0][3] + ") down")
    }
  }
  if (resultChord == "iiø7") {
    $("#after").prepend("Note: Lower the seventh scale degree (" + filteredNote[0][3] + ") for iiº7<br><br>")
  }
}

function flat() {
  $("#bassNote").val($("#bassNote").val() + 'b')
}
function sharp() {
  $("#bassNote").val($("#bassNote").val() + '#')
}
function natural() {
  $("#bassNote").val($("#bassNote").val() + '♮')
}
function doubleFlat() {
  $("#bassNote").val($("#bassNote").val() + 'bb')
}
function doubleSharp() {
  $("#bassNote").val($("#bassNote").val() + 'x')
}

$('input[type=text]').on('keydown', function(e) {
  if (e.keyCode === 13) {
    this.blur();
  }
})

$('input[type=text]').on('focus', function() {
  $(this).val('')
})
