var randomnumber = Math.floor((Math.random() * 17) + 0);
var randomquestion = questions[randomnumber];
var correspondinganswer = answers[randomnumber];
        //typewriter stuff
var target = document.getElementById("question");
var char;
var timer;
var sentence;
function type(){
  if(char < sentence.length) {
    target.innerHTML += sentence.charAt(char++);
  } 
  else {
    clearInterval(timer);
  } 
}
function reset() {
  clearInterval(timer);
  randomnumber = Math.floor((Math.random() * 17) + 0);
  randomquestion = questions[randomnumber];
  correspondinganswer = answers[randomnumber];
  sentence = randomquestion;
  char = 0;
  target.innerHTML = '';
}
function typeWriter() {
  reset();  
  var speed = document.getElementById("speedvalue").value;
  timer = setInterval(type, speed);
}
function pause() {
  clearInterval(timer)
}
function resume() {
  var resumespeed = document.getElementById("speedvalue").value;
  timer = setInterval(type, resumespeed);
}
function typeanswer() {
  document.getElementById("typeanswer").innerHTML = correspondinganswer;
}
