var keyObjects = [],
    key,
    romanNumeral,
    inversion,
    chordMembers,
    noteIndex;

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
  romanNumeral = $("#romanNumeral").val();
  inversion = $("#inversion").val();
  if (inversion == "root" || inversion == "7") {
    noteIndex = 0
  }
  if (inversion == "6" || inversion == "6/5") {
    noteIndex = 1
  }
  if (inversion == "6/4" || inversion == "4/3") {
    noteIndex = 2
  }
  if (inversion == "4/2") {
    noteIndex = 3
  }
  if (inversion == "root" || inversion == "6" || inversion == "6/4") {
    chordMembers = 3
  }
  if (inversion == "7" || inversion == "6/5" || inversion == "4/3" || inversion == "4/2") {
    chordMembers = 4;
    romanNumeral += "7"
  }
}

function findKeySig(element) {
  if (element.name == key) {
    return true
  } else {
    return false
  }
}

function matchNumeralToChordInKey(key, numeral) {
  var result = [];
  for (var prop in key) {
    if (romanNumeral == prop && chordMembers == key[prop].length) {
      result.push(key[prop])
    }
  }
  if (result.length == 0) {
    result.push(["N/A"])
  }
  return result[0]
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
  var filteredKey = keyObjects.filter(function(k){return k.name == key})[0];
  var matchedChord = matchNumeralToChordInKey(filteredKey, romanNumeral);
  console.log(matchedChord);
  if (romanNumeral.includes("7")){romanNumeral = romanNumeral.replace("7", "")}
  $("#text").html('');
  $("#after").html('');
  for (var i = 0; i < matchedChord.length; i++) {
    if (i == noteIndex) {
      $("#text").prepend("<span class ='bold'>" + matchedChord[i] + "</span><br>")
    } else {
      $("#text").prepend(matchedChord[i] + "<br>")
    }
  }
  if (inversion !== "root") {
    $("#text").prepend("<b>" + romanNumeral + "<sup>" + inversion + "</sup>" + ":</b><br><br>")
  }
  if (inversion == "root") {
    $("#text").prepend("<b>" + romanNumeral + ":</b><br><br>")
  }
  if (romanNumeral.includes("V") && chordMembers == 4) {
    $("#after").append("If possible, resolve leading tone (" + matchedChord[1] + ") up and chordal seventh (" + matchedChord[3] + ") down")
  }
  if (romanNumeral.includes("vii") && chordMembers == 4) {
    $("#after").append("If possible, resolve leading tone (" + matchedChord[0] + ") up and chordal seventh (" + matchedChord[3] + ") down")
  }
  if (chordMembers == 3 && !romanNumeral.includes("º") && inversion == "root") {
    $("#after").append("Double the root (" + matchedChord[0] + ") in root position")
  }
  if (chordMembers == 3 && !romanNumeral.includes("º") && inversion == "6") {
    $("#after").append("Doubling the root (" + matchedChord[0] + ") is optimal in first inversion––double the third (" + matchedChord[1] + ") ONLY with good reason")
  }
  if (chordMembers == 3 && !romanNumeral.includes("º") && inversion == "6/4") {
    $("#after").append("Double the fifth/bass (" + matchedChord[2] + ") in second inversion")
  }
  if (chordMembers == 3 && romanNumeral.includes("º")) {
    $("#after").append("Double the third (" + matchedChord[1] + ") for first inversion diminished triads")
  }
}

function dim() {
  $("#romanNumeral").val($("#romanNumeral").val() + 'º')
}
function halfDim() {
  $("#romanNumeral").val($("#romanNumeral").val() + 'ø')
}

//quality of life
$('input[type=text]').on('keydown', function(e) {
  if (e.keyCode === 13) {
    this.blur();
    $("#search").click();
  }
})

$('input[type=text]').on('focus', function() {
  $(this).val('')
})
