function createKeyObject(name,i,ii,iii,iv,v,vi,vii) {
  this.name = name;
  this.scale = Array(i,ii,iii,iv,v,vi,vii)
}

function createMinorObject(name,i,ii,iii,iv,v,vi,vii) {
  this.name = name;
  this.scale = Array(vi,vii,i,ii,iii,iv,v)
  function determineV() {
    var result;
    if (v.includes("#")) {
      result = (v.replace("#", "") + "x") 
    }
    if (v.includes("b")) {
      result = (v.replace("b", "") + "♮") 
    }
    if (!v.includes("b") && !v.includes("#")) {
      result = v + "#" 
    }
    return result
  }
  this.harmonicMinor = Array(vi,vii,i,ii,iii,iv,determineV())
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

var keyObjects = [];
keyObjects.push(Cmaj,Gmaj,Dmaj,Amaj,Emaj,Bmaj,Gbmaj,Dbmaj,Abmaj,Ebmaj,Bbmaj,Fmaj,Amin,Emin,Bmin,FSmin,CSmin,GSmin,Ebmin,Bbmin,Fmin,Cmin,Gmin,Dmin)
