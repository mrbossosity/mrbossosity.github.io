function startquestion() {
  document.getElementById("date-timer").style.display = "inline";
  document.getElementById("date").innerHTML = array[randomnumber].date;
  document.getElementById("1").innerHTML = "(1) " + array[randomnumber].one;
  document.getElementById("question1").style.display = "inline";
  document.getElementById("box1").focus();
};

function question2(){
  var answer = document.getElementById("box1").value;
  document.getElementById("answer1").innerHTML = "ANSWER: " + answer;
  document.getElementById("box1").style.display = "none";
  document.getElementById("question2").style.display = "inline";
  document.getElementById("2").innerHTML = "(2) " + array[randomnumber].two;
  document.getElementById("box2").focus();
};

document.getElementById("box1").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question2();
  }
});

function question3(){
  var answer = document.getElementById("box2").value;
    document.getElementById("answer2").innerHTML = "ANSWER: " + answer;
  document.getElementById("box2").style.display = "none";
  document.getElementById("question3").style.display = "inline";
  document.getElementById("3").innerHTML = "(3) " + array[randomnumber].three;
  document.getElementById("box3").focus();
};

document.getElementById("box2").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question3();
  }
});

function question4(){
  var answer = document.getElementById("box3").value;
    document.getElementById("answer3").innerHTML = "ANSWER: " + answer;
  document.getElementById("box3").style.display = "none";
  document.getElementById("question4").style.display = "inline";
  document.getElementById("4").innerHTML = "(4) " + array[randomnumber].four;
  document.getElementById("box4").focus();
};

document.getElementById("box3").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question4();
  }
});

function question5(){
  var answer = document.getElementById("box4").value;
    document.getElementById("answer4").innerHTML = "ANSWER: " + answer;
  document.getElementById("box4").style.display = "none";
  document.getElementById("question5").style.display = "inline";
  document.getElementById("5").innerHTML = "(5) " + array[randomnumber].five;
  document.getElementById("box5").focus();
};

document.getElementById("box4").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question5();
  }
});

function question6(){
  var answer = document.getElementById("box5").value;
    document.getElementById("answer5").innerHTML = "ANSWER: " + answer;
  document.getElementById("box5").style.display = "none";
  document.getElementById("question6").style.display = "inline";
  document.getElementById("6").innerHTML = "(6) " + array[randomnumber].six;
  document.getElementById("box6").focus();
};

document.getElementById("box5").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question6();
  }
});

function question7(){
  var answer = document.getElementById("box6").value;
    document.getElementById("answer6").innerHTML = "ANSWER: " + answer;
  document.getElementById("box6").style.display = "none";
  document.getElementById("question7").style.display = "inline";
  document.getElementById("7").innerHTML = "(7) " + array[randomnumber].seven;
  document.getElementById("box7").focus();
};

document.getElementById("box6").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question7();
  }
});

function question8(){
  var answer = document.getElementById("box7").value;
    document.getElementById("answer7").innerHTML = "ANSWER: " + answer;
  document.getElementById("box7").style.display = "none";
  document.getElementById("question8").style.display = "inline";
  document.getElementById("8").innerHTML = "(8) " + array[randomnumber].eight;
  document.getElementById("box8").focus();
};

document.getElementById("box7").addEventListener("keydown", function (e) {
  if (13 == e.keyCode) {
     question8();
  }
});
