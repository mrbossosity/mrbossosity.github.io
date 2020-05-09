//grab context
window.AudioContext = window.AudioContext || window.webkitAudioContext;

//declare variables
var context = new AudioContext(),
    settings = {
      id: 'keyboard',
      width: 600,
      height: 150,
      startNote: 'A2',
      whiteNotesColour: '#fff',
      blackNotesColour: '#000',
      borderColour: '#000',
      activeColour: 'darkgray',
      octaves: 2
    },
    
    keyboard = new QwertyHancock(settings),
    now = context.currentTime,
    oscOne,
    oscTwo,
    oscThree,
    oscOneType = 'square',
    oscTwoType = 'sine',
    oscThreeType = 'sine',
    
    oscOneAmp = 1,
    oscTwoAmp = 0,
    oscThreeAmp = 0,
    
    oscOneOct = 0,
    oscTwoOct = 0,
    oscThreeOct = 0,
    
    oscOneSemi = 0,
    oscTwoSemi = 0,
    oscThreeSemi = 0,

    oscOneDet = 0,
    oscTwoDet = 0,
    oscThreeDet = 0,
    
    globalAttackTime = 0,
    globalDecay = 1,
    globalSustain = 0.3,
    globalRelease,
    
    oscOneAttackTime = 0,
    oscOneDecay = 1,
    oscOneSustain = 0.3,
    
    oscTwoAttackTime = 0,
    oscTwoDecay = 1,
    oscTwoSustain = 0.3,
    
    oscThreeAttackTime = 0,
    oscThreeDecay = 1,
    oscThreeSustain = 0.3;

//master gain module 
var vca = context.createGain();
vca.gain.value = 0.3;
var nodes = [];
var nodesOsc = [];

//oscillators
function Oscillator(context, type, freq, oct, semi, det) {
  var now = context.currentTime;
  var osc = context.createOscillator();
  osc.type = type;
  osc.frequency.value = freq;
  osc.detune.setValueAtTime(oct + semi + det, now);
  return osc;
}

function OscAmp(osc) {
  var amp = context.createGain();
  amp.gain.value = 0;
  osc.connect(amp);
  return amp;
}

//global ASDR envelope
function asdr(source, attack, decay, sustain) {
  var rightNow = context.currentTime;
  source.gain.setValueAtTime(0, rightNow); //reset to zero
  source.gain.linearRampToValueAtTime(0.3, rightNow + attack); //attack time to max
  source.gain.linearRampToValueAtTime(sustain, rightNow + decay);
}

//osc ASDR envelope
function oscAsdr(source, amp, attack, decay, sustain) {
  var rightNow = context.currentTime;
  source.gain.setValueAtTime(0, rightNow); //reset to zero
  source.gain.linearRampToValueAtTime(amp, rightNow + attack); //attack time to max
  if (amp !== 0) {  
    source.gain.linearRampToValueAtTime(sustain, rightNow + decay)
  }
}

//global R envelope 
function globalR(context, source, release) {
  var now = context.currentTime;
  source.gain.cancelScheduledValues(now);
  source.gain.setValueAtTime(source.gain.value, now);
  source.gain.linearRampToValueAtTime(0, now + release);
  var timer = setTimeout(function() {
    source.disconnect();
  }, (release * 1000))
}
//osc R
function oscR(context, source, release) {
  var now = context.currentTime;
  source.stop(now + release);
  var timer = setTimeout(function() {source.disconnect()}, release * 1000)
}

//filter
function Filter(context, type, freq, q) {
  var now = context.currentTime;
  var filt = context.createBiquadFilter();
  filt.type = type;
  filt.frequency.setValueAtTime(freq, now);
  filt.Q.setValueAtTime(q, now);
  filt.gain.setValueAtTime(q, now);
  return filt
}
var filterType;
var filterFreq = 20000;
var filterQ = 1;
var filter = Filter(context, filterType, filterFreq, filterQ)

function filtEnv(filt, context, freq, attack, decay, sustain) {
  var rightNow = context.currentTime;
  filt.frequency.setValueAtTime(20, rightNow); 
  filt.frequency.linearRampToValueAtTime(freq, rightNow + attack);
  filt.frequency.linearRampToValueAtTime(sustain, rightNow + decay);
}

//convolver
function Reverb(context) {
  var convolver = context.createConvolver(),
        noiseBuffer = context.createBuffer(2, 0.65 * context.sampleRate, context.sampleRate),
        left = noiseBuffer.getChannelData(0),
        right = noiseBuffer.getChannelData(1);
    for (var i = 0; i < noiseBuffer.length; i++) {
        left[i] = Math.random() * 2 - 1;
        right[i] = Math.random() * 2 - 1;
    }
    convolver.buffer = noiseBuffer;
    return convolver;
};
var reverb = Reverb(context)


function updateVars(){
    oscOneAmp = $("#osc1amp").val();
    oscTwoAmp = $("#osc2amp").val();
    oscThreeAmp = $("#osc3amp").val();
    
    oscOneDet = parseInt($("#osc1det").val());
    oscTwoDet = parseInt($("#osc2det").val());
    oscThreeDet = parseInt($("#osc3det").val());
    
    oscOneOct = parseInt($("#osc1oct").val() * 1200);
    oscTwoOct = parseInt($("#osc2oct").val() * 1200);
    oscThreeOct = parseInt($("#osc3oct").val() * 1200);
    
    oscOneSemi = parseInt($("#osc1semi").val() * 100);
    oscTwoSemi = parseInt($("#osc2semi").val() * 100);
    oscThreeSemi = parseInt($("#osc3semi").val() * 100);
    
    globalAttackTime = parseFloat($("#attackG").val());
    globalDecay = parseFloat($("#decayG").val());
    globalSustain = parseFloat($("#sustainG").val());
    globalRelease = parseFloat($("#releaseG").val());
    
    oscOneAttackTime = parseFloat($("#attack1").val());
    oscOneDecay = parseFloat($("#decay1").val());
    oscOneSustain = parseFloat($("#sustain1").val() * oscOneAmp);
    
    oscTwoAttackTime = parseFloat($("#attack2").val());
    oscTwoDecay = parseFloat($("#decay2").val());
    oscTwoSustain = parseFloat($("#sustain2").val() * oscTwoAmp);
    
    oscThreeAttackTime = parseFloat($("#attack3").val());
    oscThreeDecay = parseFloat($("#decay3").val());
    oscThreeSustain = parseFloat($("#sustain3").val() * oscThreeAmp);
}

function updateFilt(context) {
  filter.disconnect();
  filterType = $("#filtTypeSelect").val();
  filterFreq = parseFloat($("#freqValue").val());
  filterQ = parseFloat($("#resValue").val());
  filter = Filter(context, filterType, filterFreq, filterQ);
  vca.connect(filter);
  filter.connect(context.destination);
  $(".reverbLit").click();
  $(".reverbLit").click();
}

//preset
function Preset(context,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee) {
  oscOneType = a;
  oscTwoType = b;
  oscThreeType = c;
  
  $("#osc1amp").val(d);
  $("#osc2amp").val(e);
  $("#osc3amp").val(f);
    
  $("#osc1det").val(g);
  $("#osc2det").val(h);
  $("#osc3det").val(i);
    
  $("#osc1oct").val(j);
  $("#osc2oct").val(k);
  $("#osc3oct").val(l);
    
  $("#osc1semi").val(m);
  $("#osc2semi").val(n);
  $("#osc3semi").val(o);
    
  $("#attackG").val(p)
  $("#decayG").val(q)
  $("#sustainG").val(r)
  $("#releaseG").val(s)
    
  $("#attack1").val(t)
  $("#decay1").val(u)
  $("#sustain1").val(v)
    
  $("#attack2").val(w)
  $("#decay2").val(x)
  $("#sustain2").val(y)
  
  $("#attack3").val(z)
  $("#decay3").val(aa)
  $("#sustain3").val(bb)

  filter.disconnect();
  $("#filtTypeSelect").val(cc);
  $("#freqValue").val(dd);
  $("#resValue").val(ee);
  filter = Filter(context, filterType, filterFreq, filterQ);
  vca.connect(filter);
  filter.connect(context.destination);
  $(".reverbLit").click();
  $(".reverbLit").click();
}

//connect
vca.connect(filter);
filter.connect(context.destination)

//keydown event creates voice, connects to vca out to context
keyboard.keyDown = function (note, frequency) {
  updateVars();
  var indivVca = context.createGain();
  indivVca.gain.value = 0.5;
  indivVca.connect(vca);
  
  oscOne = Oscillator(context, oscOneType, frequency, oscOneOct, oscOneSemi, oscOneDet);
  var oneAmp = OscAmp(oscOne);             
  oneAmp.connect(indivVca);            
  oscOne.start(0);      
  nodes.push(oneAmp);
  nodesOsc.push(oscOne);
  
  oscTwo = Oscillator(context, oscTwoType, frequency, oscTwoOct, oscTwoSemi, oscTwoDet);
  var twoAmp = OscAmp(oscTwo);             
  twoAmp.connect(indivVca);              
  oscTwo.start(0); 
  nodes.push(twoAmp);
  nodesOsc.push(oscTwo)
                           
  oscThree = Oscillator(context, oscThreeType, frequency, oscThreeOct, oscThreeSemi, oscThreeDet);
  var threeAmp = OscAmp(oscThree);             
  threeAmp.connect(indivVca);               
  oscThree.start(0);                            
  nodes.push(threeAmp);
  nodesOsc.push(oscThree)
                           
  //envelopes        
  oscAsdr(oneAmp, oscOneAmp, oscOneAttackTime, oscOneDecay, oscOneSustain);              
  oscAsdr(twoAmp, oscTwoAmp, oscTwoAttackTime, oscTwoDecay, oscTwoSustain);                
  oscAsdr(threeAmp, oscThreeAmp, oscThreeAttackTime, oscThreeDecay, oscThreeSustain); 
  asdr(indivVca, globalAttackTime, globalDecay, globalSustain);  
};

//keyup off notes
keyboard.keyUp = function (note, frequency) {
  var new_nodes = [];         
  var new_nodes_osc = [];
  for (var i = 0; i < nodes.length; i++) {                   
    if (Math.round(nodesOsc[i].frequency.value) === Math.round(frequency)) {
      globalR(context, nodes[i], globalRelease)
      oscR(context, nodesOsc[i], globalRelease);
    } else {
      new_nodes.push(nodes[i]);
      new_nodes_osc.push(nodesOsc[i])
    }
  }
  nodes = new_nodes;
  nodesOsc = new_nodes_osc;
};

//personal additions for SGK CV-19
//change osc1 type
$("#sine1").click(() => {oscOneType = 'sine'})
$("#square1").click(() => {oscOneType = 'square'})
$("#saw1").click(() => {oscOneType = 'sawtooth'})
$("#tri1").click(() => {oscOneType = 'triangle'})

//change osc2 type
$("#sine2").click(() => {oscTwoType = 'sine'})
$("#square2").click(() => {oscTwoType = 'square'})
$("#saw2").click(() => {oscTwoType = 'sawtooth'})
$("#tri2").click(() => {oscTwoType = 'triangle'})

//change osc3 type
$("#sine3").click(() => {oscThreeType = 'sine'})
$("#square3").click(() => {oscThreeType = 'square'})
$("#saw3").click(() => {oscThreeType = 'sawtooth'})
$("#tri3").click(() => {oscThreeType = 'triangle'})

//change wave color onclick
$(".wave").click(function() {
  if ($(this).hasClass('wave1')){
    $(".wave1").removeClass('waveLit');
  }
  if ($(this).hasClass('wave2')){
    $(".wave2").removeClass('waveLit');
  }
  if ($(this).hasClass('wave3')){
    $(".wave3").removeClass('waveLit');
  }
  $(this).addClass('waveLit')
})

//restore default amps onclick
$("#amps").click(function() {
  $("#osc1amp").val('100');
  $("#osc2amp").val('0');
  $("#osc3amp").val('0');
  oscOneAmp = 1;
  oscTwoAmp = 0;
  oscThreeAmp = 0;
})

//restore default detune onclick 
$("#dets").click(function() {
  $("#osc1det").val('0');
  $("#osc2det").val('0');
  $("#osc3det").val('0');
  oscOneDet = 0;
  oscTwoDet = 0;
  oscThreeDet = 0;
})

//reveal semis onclick oct
$("#octs").click(function() {
  $(".octContainer").addClass('noShow');
  $(".semiContainer").removeClass('noShow');
})
//and vice versa
$("#semis").click(function() {
  $(".semiContainer").addClass('noShow');
  $(".octContainer").removeClass('noShow');
})

//cycle through ADSRs for individual oscs onclick
var adsrClass = document.getElementsByClassName('adsrContainer');
var adsrClassNo = 0;
$(".adsrText").click(function() {
  adsrClass[adsrClassNo].style.display = "none";
  if (adsrClassNo == 3) {
    adsrClassNo = 0
  } else {
    adsrClassNo ++;
  }
  adsrClass[adsrClassNo].style.display = "flex";
})

//reverb
$(".reverbLit").click(function() {
  if ($(this).hasClass('lit')) {
    $(this).removeClass('lit');
    reverb.disconnect();
  } else {
    $(this).addClass('lit');
    filter.connect(reverb);
    reverb.connect(context.destination);
  }
})

$("#filtTypeSelect").on('input click', function() {
  if ($(this).val() == 'lowshelf' || $(this).val() == 'highshelf' || $(this).val() == 'peaking') {
    $("#qGain").html('Gain (dB):')
    $("#resValue").val('0')
  } else {
    $("#qGain").html('Q:')
    $("#resValue").val('1')
  }
})

$("input[type='text']").focus(function() {
  $(this).val('');
})

$("input[type='text']").keydown(function(e) {
  if (e.keyCode === 13 || e.keyCode === 9) {
    $(this).blur();
  }
})

$("#filtTypeSelect, #freqValue, #resValue").on('input', function() {
  updateFilt(context);
})

//toggle filter and filtEnv
$("#showFilter").click(function() {
  $("#filterMain").css('display', 'none');
  $("#filterEnv").css('display', 'flex')
})

$("#showEnv").click(function() {
  $("#filterEnv").css('display', 'none');
  $("#filterMain").css('display', 'flex')
})

//pitchbend
var ogPitch,
    ogPitchTwo,
    ogPitchThree;

$(window).keydown(function(e) {
  if (e.keyCode === 16) {
    var now = context.currentTime;
    var mod = oscOne.detune;
    ogPitch = oscOne.detune.value;
    mod.cancelScheduledValues(now);
    mod.setValueAtTime(mod.value, now);
    
    var modTwo = oscTwo.detune;
    ogPitchTwo = oscTwo.detune.value;
    modTwo.cancelScheduledValues(now);
    modTwo.setValueAtTime(modTwo.value, now);
    
    var modThree = oscThree.detune;
    ogPitchThree = oscThree.detune.value;
    modThree.cancelScheduledValues(now);
    modThree.setValueAtTime(modThree.value, now);
    
    mod.linearRampToValueAtTime(mod.value + 200, now + 0.2)
    modTwo.linearRampToValueAtTime(modTwo.value + 200, now + 0.2)
    modThree.linearRampToValueAtTime(modThree.value + 200, now + 0.2)
  };
})

$(window).keyup(function(e) {
  if (e.keyCode === 16) {
    var now = context.currentTime;
    var mod = oscOne.detune;
    mod.cancelScheduledValues(now);
    mod.setValueAtTime(mod.value, now);
    
    var modTwo = oscTwo.detune;
    modTwo.cancelScheduledValues(now);
    modTwo.setValueAtTime(modTwo.value, now);
    
    var modThree = oscThree.detune;
    modThree.cancelScheduledValues(now);
    modThree.setValueAtTime(modThree.value, now);
    
    mod.linearRampToValueAtTime(ogPitch, now + 0.1);
    modTwo.linearRampToValueAtTime(ogPitchTwo, now + 0.1);
    modThree.linearRampToValueAtTime(ogPitchThree, now + 0.1)
  };
})

//presets
$("#preset").on('input', function() {
  if ($(this).val() == 'default') {
    Preset(context,'square','sine','sine',1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0.05,0,1,1,0,1,1,0,1,1,'lowpass',20000,1)
  }
  if ($(this).val() == 'funkBass') {
    Preset(context,'square','sine','sine',0.75,0.33,0.86,0,0,0,-2,-1,-1,0,7,0,0,1,0.297,0.02,0,1,1,0,1,1,0,1,1,'peaking',837,6);
  }
  if ($(this).val() == 'keys') {
    Preset(context,'sine','sine','sine',0.6,0.33,0.05,0,8,5,1,2,2,0,0,7,0,0.78,0.1155,0.03,0.01,0.2,0.4,0.01,0.4,0.26,0,0.16,0.73,'highshelf',1500,10)
  };
  updateFilt(context);
})

$(".cv").click(function() {
  var everything = "Current Parameters: '" + oscOneType + "','" + oscTwoType + "','" + oscThreeType + "'," + "context"+ "," + $("#osc1amp").val()+ "," + $("#osc2amp").val()+ "," + $("#osc3amp").val()+ "," + $("#osc1det").val()+ "," + $("#osc2det").val()+ "," + $("#osc3det").val()+ "," + $("#osc1oct").val()+ "," + $("#osc2oct").val()+ "," + $("#osc3oct").val()+ "," + $("#osc1semi").val()+ "," + $("#osc2semi").val()+ "," + $("#osc3semi").val()+ "," + $("#attackG").val()+ "," + $("#decayG").val()+ "," + $("#sustainG").val()+ "," + $("#releaseG").val()+ "," + $("#attack1").val()+ "," + $("#decay1").val()+ "," + $("#sustain1").val()+ "," + $("#attack2").val()+ "," + $("#decay2").val()+ "," + $("#sustain2").val()+ "," + $("#attack3").val()+ "," + $("#decay3").val()+ "," + $("#sustain3").val()+ ",'" + $("#filtTypeSelect").val()+ "'," + $("#freqValue").val()+ "," + $("#resValue").val();
  alert(everything)
})

//save oscs
function saveOscs() {
  localStorage.setItem("osc1", oscOneType);
  localStorage.setItem("osc2", oscTwoType);
  localStorage.setItem("osc3", oscThreeType)
}

//panic button
$(".panic").click(function() {
  var rightNow = context.currentTime;
  for (var i = 0; i < nodes.length; i++) {                   
    globalR(context, nodes[i], globalRelease);
    oscR(context, nodesOsc[i], globalRelease);
  };
  nodes = [];
  nodesOsc = [];
  saveOscs();
  location.reload();
})

$(document).keydown(function(e) {
  if (e.keyCode === 192) {
    $(".panic").click()
  }
})

$(function() {
  $('form').sisyphus();
})

window.onload = function() {
  var oneType = localStorage.getItem("osc1");
  var twoType = localStorage.getItem("osc2");
  var threeType = localStorage.getItem("osc3");
  if (oneType !== null) oscOneType = oneType;
  if (twoType !== null) oscTwoType = twoType;
  if (threeType !== null) oscThreeType = threeType;
  updateVars();
  updateFilt(context);
}
