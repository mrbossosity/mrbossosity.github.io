var randomnumber = Math.floor(Math.random() * array.length);
var randomquestion = array[randomnumber].question;
var correspondinganswer = array[randomnumber].ANSWER;
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
  randomnumber = Math.floor(Math.random() * array.length);
  randomquestion = array[randomnumber].question;
  correspondinganswer = array[randomnumber].ANSWER;
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
