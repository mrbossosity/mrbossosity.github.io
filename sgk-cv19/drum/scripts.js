window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context = new AudioContext,
    oscType,
    oscFreq,
    transLength,
    transGain,
    pitchDetune,
    pitchDecay,
    oscDecay,
    oscRel,
    SoscType,
    SoscFreq,
    StransLength,
    StransGain,
    SpitchDetune,
    SpitchDecay,
    SoscDecay,
    SoscRel,
    StailGain,
    StailLength,
    HtransGain,
    HtransLength,
    HtailGain,
    HtailLength;

function Osc(context, type, frequency) {
  var osc = context.createOscillator();
  osc.type = type;
  osc.frequency.value = frequency;
  return osc
}

function Noise(context, length, vol) {
  var now = context.currentTime;
  var bufferLength = length * context.sampleRate, //length in sec = frames * sample rate
      buffer = context.createBuffer(1, bufferLength, context.sampleRate),
      output = buffer.getChannelData(0);
  for (var i = 0; i < bufferLength; i++) {
    output[i] = Math.random() * 2 - 1
  }
  
  var noise = context.createBufferSource();
  noise.buffer = buffer;
  noise.start(0);
  var noiseAmp = context.createGain();
  noiseAmp.gain.value = vol;
  noise.connect(noiseAmp);
  noiseAmp.connect(context.destination)
  //decay
  noiseAmp.gain.cancelScheduledValues(now);
  noiseAmp.gain.setValueAtTime(noiseAmp.gain.value, now);
  noiseAmp.gain.exponentialRampToValueAtTime(0.001, now + length)
  
  var timer = setTimeout(function() {
    noise.disconnect();
    noiseAmp.disconnect()
  }, length * 1000)
}

function Pitch(context, osc, amt, decay) {
  var now = context.currentTime;
  var mod = osc.frequency;
  mod.cancelScheduledValues(now);
  mod.setValueAtTime(mod.value, now);
  mod.exponentialRampToValueAtTime(amt, now + decay)
}

function Amp(context) {
  var vca = context.createGain();
  vca.gain.value = 0.3;
  return vca
}

function Decay(context, osc, amp, decay) {
  var now = context.currentTime;
  amp.gain.cancelScheduledValues(now);
  amp.gain.setValueAtTime(amp.gain.value, now);
  amp.gain.linearRampToValueAtTime(0, now + decay);
  var timer = setTimeout(function() {
    amp.disconnect();
    osc.stop(now);
    osc.disconnect();
  }, (decay * 1000));
}

function kickUpdate() {
  oscType = $("#oscType").val();
  oscFreq = parseFloat($("#oscFreq").val());
  oscDecay = parseFloat($("#oscDecay").val() / 1000);
  pitchDetune = parseFloat($("#pitchDetune").val());
  pitchDecay = parseFloat($("#pitchTime").val() / 1000);
  transLength = parseFloat($("#transLength").val()) / 1000;
  transGain = parseFloat($("#transGain").val()) / 100 * 0.3
}

function snareUpdate() {
  SoscType = $("#SoscType").val();
  SoscFreq = parseFloat($("#SoscFreq").val());
  SoscDecay = parseFloat($("#SoscDecay").val() / 1000);
  SpitchDetune = parseFloat($("#SpitchDetune").val());
  SpitchDecay = parseFloat($("#SpitchTime").val() / 1000);
  StransGain = parseFloat($("#StransGain").val()) / 100 * 0.3;
  StransLength = parseFloat($("#StransLength").val()) / 1000;
  StailGain = parseFloat($("#StailGain").val()) / 100 * 0.3;
  StailLength = parseFloat($("#StailLength").val()) / 1000;
}

function hatUpdate() {
  HtransGain = parseFloat($("#HtransGain").val()) / 100 * 0.3;
  HtransLength = parseFloat($("#HtransLength").val()) / 1000;
  HtailGain = parseFloat($("#HtailGain").val()) / 100 * 0.3;
  HtailLength = parseFloat($("#HtailLength").val()) / 1000;
}

$("#kick").click(function(){
  kickUpdate();
  var now = context.currentTime;
  var osc = new Osc(context, oscType, oscFreq);
  Noise(context, transLength, transGain)
  var vca = new Amp(context);
  osc.connect(vca);
  vca.connect(context.destination);
  Pitch(context, osc, pitchDetune, pitchDecay)
  osc.start(now);
  Decay(context, osc, vca, oscDecay, oscRel);
})

$("#snare").click(function(){
  snareUpdate();
  var now = context.currentTime;
  var osc = Osc(context, SoscType, SoscFreq);
  Noise(context, StransLength, StransGain);
  Noise(context, StailLength, StailGain);
  var vca = Amp(context);
  osc.connect(vca);
  vca.connect(context.destination);
  Pitch(context, osc, SpitchDetune, SpitchDecay)
  osc.start(now);
  Decay(context, osc, vca, SoscDecay, SoscRel);
})

$("#hat").click(function(){
  hatUpdate();
  var now = context.currentTime;
  Noise(context, HtransLength, HtransGain);
  Noise(context, HtailLength, HtailGain);
})

$(document).keydown(function(e) {
  if (e.keyCode === 49) {
    $("#kick").css({'background-color': 'mediumblue', 'transform': 'translateY(2px)', 'box-shadow': 'none'});
    $("#kick").click();
  } 
})

$(document).keyup(function(e) {
  if (e.keyCode === 49) {
    $("#kick").css({'background-color': 'rgb(200,200,220)', 'transform': 'translateY(-2px)', 'box-shadow': '0 4px 1px'});
  } 
})

$(document).keydown(function(e) {
  if (e.keyCode === 51) {
    $("#hat").css({'background-color': 'mediumblue', 'transform': 'translateY(2px)', 'box-shadow': 'none'});
    $("#hat").click();
  } 
})

$(document).keyup(function(e) {
  if (e.keyCode === 51) {
    $("#hat").css({'background-color': 'rgb(200,200,220)', 'transform': 'translateY(-2px)', 'box-shadow': '0 4px 1px'});
  } 
})

$(document).keydown(function(e) {
  if (e.keyCode === 50) {
    $("#snare").css({'background-color': 'mediumblue', 'transform': 'translateY(2px)', 'box-shadow': 'none'});
    $("#snare").click();
  } 
})

$(document).keyup(function(e) {
  if (e.keyCode === 50) {
    $("#snare").css({'background-color': 'rgb(200,200,220)', 'transform': 'translateY(-2px)', 'box-shadow': '0 4px 1px'});
  } 
})

$('input').keydown(function(e){
  if (e.keyCode ===13) {
    $(this).blur();
  }
})

var containers = document.getElementsByClassName('container')
var contNo = 0

$(".inst").click(function() {
  containers[contNo].classList.add('noShow');
  if (contNo == 2) {
    contNo = 0
  } else {
    contNo++;
  }
  containers[contNo].classList.remove('noShow')
})


//vue????
var oscD = new Vue ({
  el: "#oscD",
  data: {
    message: 176
  }
})

var oscIF = new Vue ({
  el: "#oscIF",
  data: {
    message: 205
  }
})

var oscFF = new Vue ({
  el: "#oscFF",
  data: {
    message: 50
  }
})

var pitchMD = new Vue ({
  el: "#pitchMD",
  data: {
    message: 48
  }
})

var tGain = new Vue ({
  el: '#tGain',
  data: {
    message: 40
  }
})

var tLength = new Vue ({
  el: '#tLength',
  data: {
    message: 13
  }
})


//snare vue
var SoscD = new Vue ({
  el: "#SoscD",
  data: {
    message: 36
  }
})

var SoscIF = new Vue ({
  el: "#SoscIF",
  data: {
    message: 540
  }
})

var SoscFF = new Vue ({
  el: "#SoscFF",
  data: {
    message: 256
  }
})

var SpitchMD = new Vue ({
  el: "#SpitchMD",
  data: {
    message: 14
  }
})

var StGain = new Vue ({
  el: '#StGain',
  data: {
    message: 40
  }
})

var StLength = new Vue ({
  el: '#StLength',
  data: {
    message: 18
  }
})

var StlGain = new Vue ({
  el: '#StlGain',
  data: {
    message: 23
  }
})

var StlLength = new Vue ({
  el: '#StlLength',
  data: {
    message: 248
  }
})

//hat vue
var HtGain = new Vue ({
  el: '#HtGain',
  data: {
    message: 40
  }
})

var HtLength = new Vue ({
  el: '#HtLength',
  data: {
    message: 18
  }
})

var HtlGain = new Vue ({
  el: '#HtlGain',
  data: {
    message: 14
  }
})

var HtlLength = new Vue ({
  el: '#HtlLength',
  data: {
    message: 140
  }
})

function kickPreset(a,b,c,d,e,f,g) {
  $("#oscType").val(a);
  $("#oscDecay").val(b);
  $("#oscFreq").val(c);
  $("#pitchDetune").val(d)
  $("#pitchTime").val(e);
  $("#transGain").val(f);
  $("#transLength").val(g);
  oscD.message = b;
  oscIF.message = c;
  oscFF.message = d;
  pitchMD.message = e;
  tGain.message = f;
  tLength.message = g;
}

function snarePreset(a,b,c,d,e,f,g,h,i) {
  $("#SoscDecay").val(b);
  $("#SoscFreq").val(c);
  $("#SpitchDetune").val(d)
  $("#SpitchTime").val(e);
  $("#StransGain").val(f);
  $("#StransLength").val(g);
  $("#StailGain").val(h);
  $("#StailLength").val(i);
  SoscD.message = b;
  SoscIF.message = c;
  SoscFF.message = d;
  SpitchMD.message = e;
  StGain.message = f;
  StLength.message = g;
  StlGain.message = h;
  StlLength.message = i;
}

//presets?
$("#kickPreset").on('input', function() {
  if ($(this).val() == 'preset1') {
     kickPreset('sine', 176, 205, 50, 48, 40, 13);
  }
  if ($(this).val() == 'preset2') {
     kickPreset('triangle', 195, 185, 40, 40, 20, 14);
  }
})

$("#snarePreset").on('input', function() {
  if ($(this).val() == 'preset1') {
     snarePreset('triangle', 36, 540, 256, 14, 40, 18, 23, 248);
  }
  if ($(this).val() == 'preset2') {
     snarePreset('triangle', 90, 560, 200, 18, 79, 10, 39, 351);
  }
})


//sequencer
$(".nav").click(function() {
  if ($(this).html() == 'Sequencer') {
    $(this).html('Drums');
    $(".main").addClass('noShow');
    $(".second").removeClass('noShow')
  } else {
    $(this).html('Sequencer');
    $(".second").addClass('noShow');
    $(".main").removeClass('noShow')
  }
})

var Measure = $(".sequencer").clone();

$("#add").click(function() {
  $(Measure).appendTo(".sequencer")
})

$('.step, .step2').on("click", function() {
  if ($(this).hasClass('stepLit')) {
    $(this).removeClass('stepLit')
  } else {
    $(this).addClass('stepLit')
  }
})

var kickSteps = document.getElementsByClassName('kick'),
    snareSteps = document.getElementsByClassName('snare'),
    hatSteps = document.getElementsByClassName('hat'),
    step = 0;

function checkSequence() {
  if (step < kickSteps.length) {
    if (kickSteps[step].classList.contains('stepLit')) {
      $("#kick").click();
    }
    if (snareSteps[step].classList.contains('stepLit')) {
      $("#snare").click();
    }
    if (hatSteps[step].classList.contains('stepLit')) {
      $("#hat").click();
    }
    
    kickSteps[step].classList.add('stepPlay');
    snareSteps[step].classList.add('stepPlay');
    hatSteps[step].classList.add('stepPlay');
    
    if (step !== 0) {
      if (kickSteps[(step - 1)].classList.contains('stepPlay')) {
        kickSteps[(step - 1)].classList.remove('stepPlay');
      };
      if (snareSteps[(step - 1)].classList.contains('stepPlay')) {
        snareSteps[(step - 1)].classList.remove('stepPlay');
      };
      if (hatSteps[(step - 1)].classList.contains('stepPlay')) {
        hatSteps[(step - 1)].classList.remove('stepPlay');
      };
    }
    if (step == 0) {
      if (kickSteps[(31)].classList.contains('stepPlay')) {
        kickSteps[(31)].classList.remove('stepPlay');
      };
      if (snareSteps[(31)].classList.contains('stepPlay')) {
        snareSteps[(31)].classList.remove('stepPlay');
      };
      if (hatSteps[(31)].classList.contains('stepPlay')) {
        hatSteps[(31)].classList.remove('stepPlay');
      };
    }
    step++
  } 
  if (step == kickSteps.length) {
    step = 0
  }
}

var playing;

function playSequence(bpm) {
  var sixteenth = 60000 / bpm / 4;
  playing = setInterval(function() {
    checkSequence()
  }, sixteenth)
}

$("#play").click(function(){
  var tempo = parseFloat($("#bpm").val());
  playSequence(tempo);
  $(this).prop("disabled", true);
})

$("#stop").click(function() {
  clearInterval(playing);
  step = 0;
  $("#play").prop('disabled', false);
  $('.step .step2').removeClass('stepPlay')
})

$("#bpm").on('focus', function() {
  $("#stop").click();
  $(this).val('')
})

//keydown play/stop
$(document).keydown(function(e) {
  if (e.keyCode === 188) {
    $("#play").click();
  } 
})

$(document).keydown(function(e) {
  if (e.keyCode === 190) {
    $("#stop").click();
  } 
})
