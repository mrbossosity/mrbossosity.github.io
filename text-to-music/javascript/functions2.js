/*we begin by declaring constants and variables used in the program*/
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
      lettersOnly = /[a-zA-Z]/;

var inputString,
    strToSeq,
    indeces,
    reducedIndeces,
    melody,
    context = new AudioContext(),
    Oscillator,
    Amp,
    AbFrequencies = [207.65, 233.08, 261.63, 277.18, 311.13, 349.23, 392.00, 415.30],
    interval,
    detune;

function resetVariables() {//this function processes the string input and resets all variables
  inputString = '';
  strToSeq = '';
  indeces = [];
  reducedIndeces = [];
  melody = '';
  inputString = $("#query").val();
}

function removePunctuation(string) {//remove all non-letters from the input string
  strToSeq = string.toUpperCase().split("");
  strToSeq = strToSeq.filter((k) => k.match(lettersOnly))
}

function numericalIndex(k) {//give the numerical equivalent of each letter in the string to return a sequence of integers
  let index = alphabet.indexOf(k) + 1;
  indeces.push(index)
}

//the execute function calls all the functions declared above, then generates the melody
function execute() {
  resetVariables();
  removePunctuation(inputString);
  for (let i in strToSeq) {
    numericalIndex(strToSeq[i])
  };//at this point, the sequence of integers has been generated 
  for (let i in indeces) {//this sub-function addresses all values in the sequence larger than 8
    if (indeces[i] <= 8) {
      reducedIndeces.push(indeces[i])
    } else {
      let temp = Math.round((indeces[i] / 26) * 8);
      reducedIndeces.push(temp)
    }
  } //reducedIndeces is the sequence, now all items <= 8 
  for (let i in reducedIndeces) {//translate the sequence of integers to a sequence of scale degrees
    if (reducedIndeces[i] == 8) {
      melody += ("Ab ")
    } else {
      melody += (Abmaj.scale[reducedIndeces[i] - 1] + " ")
    }
  }
  $("#result").html("Melody (in " + Abmaj.name + "):<br>" + melody);
  music()//the master music function-- all Web Audio functions declared and explained below
}

/*Here, we take advantage of Javascript's Web Audio API
We will create oscillators and have them play the melody notes at programmed times*/

function Osc(frequency, detune) {//create a new oscillator at a custom pitch
  var osc = context.createOscillator();
  osc.type = 'sine';
  osc.frequency.value = frequency;
  osc.detune.value = detune;
  return osc
}

function Gain() {//create a VCA (gain unit) to modulate the amplitude of an oscillator
  var amp = context.createGain();
  amp.gain.value = 0.3;
  return amp;
}

function createOscAndAmp(noteNum) {//using the above Osc() and Gain(), create a new oscillator and its own coupled gain unit
  Oscillator = new Osc(AbFrequencies[noteNum], detune); //create osc
  Amp = new Gain(); //create gain unit
  Oscillator.connect(Amp); //send osc output to gain unit
  Amp.connect(vca) //send amp output to master gain
}

function Reverb(context) {//reverb effect
  var convolver = context.createConvolver(),
        noiseBuffer = context.createBuffer(2, 1.2 * context.sampleRate, context.sampleRate),
        left = noiseBuffer.getChannelData(0),
        right = noiseBuffer.getChannelData(1);
    for (var i = 0; i < noiseBuffer.length; i++) {
        left[i] = Math.random() * 2 - 1;
        right[i] = Math.random() * 2 - 1;
    }
    convolver.buffer = noiseBuffer;
    return convolver;
}; 

var reverb = new Reverb(context) //create a reverb instance
var vca = context.createGain(); //all oscillators and gains created are sent to this master gain to temper the overall volume before going to audio output
vca.gain.value = 0.2; 
vca.connect(context.destination); //connect master gain signal to audio output
vca.connect(reverb); //send some of the master signal to the reverb unit
reverb.connect(context.destination) //connect reverb to audio output

//colorful aesthetics
var colorChangeTimer;
var colorChange = () => {
  colorChangeTimer = requestAnimationFrame(colorChange)
  $("#container").animate( {
    backgroundColor: jQuery.Color(30,144,255,1)
  }, 8500);
  $("#container").animate( {
    backgroundColor: jQuery.Color(255, 250, 205, 1)
  }, 8500);
  $("#container").animate( {
    backgroundColor: jQuery.Color(200,40,150,0.3)
  }, 8500);
}

var playTimer;
function playOsc(x) {//iterate through the scale degree sequence and play a new oscillator at the specified pitch once every x milliseconds
  var noteNo = 0;
  playTimer = setInterval(function(){
    let now = context.currentTime;
    createOscAndAmp(reducedIndeces[noteNo] - 1, detune);//build an osc and gain unit
    Oscillator.start(now); //start the osc
    Oscillator.stop(now + (x / 1000) + 0.001); //schedule the osc's termination
    Amp.gain.cancelScheduledValues(now);
    Amp.gain.setValueAtTime(Amp.gain.value, now);
    Amp.gain.linearRampToValueAtTime(0, now + (x / 1000)) //fade the gain unit to make the note "pluck"
    if (noteNo == reducedIndeces.length - 1) {//if at end of sequence, return to beginning iteration
      noteNo = 0;
    } else { //else advance the iteration
      noteNo++ 
    }
  }, x + 1)
}

function updateVariablesAndReset() {
  interval = parseFloat($("#interval").val()); //update variables based on user input
  detune = parseFloat($("#detune").val());
  cancelAnimationFrame(colorChangeTimer)
  clearInterval(playTimer); //stops anything currently playing
}

//this is the master music function triggered at the end of execute() to call the update and play functions declared above
function music() {
  updateVariablesAndReset(); 
  requestAnimationFrame(colorChange);
  playOsc(interval)
}

/*below are small details which improve page functionality*/

$('#interval, #detune').on('focus', function() {
  $(this).val('')
})

$('input[type=text]').on('keydown', function(e) {
  if(e.keyCode === 13) {
    $(this).blur();
  }
})

$("#query").on('keydown', function(e) {
  if (e.keyCode === 13) {
    $("#search").click();
    $(this).blur()
  }
})

$("#mvt").click(() => $("#query").val("If f is continuous on [a,b] then there exists at least one c, a<c<b such that f prime of c equals f of b minus f of a over b minus a"))
$("#ivt").click(() => $("#query").val("For f continuous on [a,b] f takes every value between f of a and f of b"))
$("#continuity").click(() => $("#query").val("A function is continuous at x equals a if the limit of f of x as x approaches a exists, f of a exists, and the limit as f of x as x approaches a equals f of a."))
