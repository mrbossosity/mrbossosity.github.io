function startquestion() {
  randomnumber = Math.floor(Math.random()* array.length);
  $("#date-timer").show();
  $("#date").html(array[randomnumber].date);
  $("#topic").html(array[randomnumber].topic);
  $("#prompt").html(array[randomnumber].prompt);
  $("#1").html("(1) " + array[randomnumber].one);
  $("#question1").show();
  $("#box1").show();
  $("#box1").focus();
};

function question2(){
  var answer = $("#box1").val();
  $("#answer1").html("ANSWER: " + answer);
  $("#box1").hide();
  $("#question2").show();
  $("#2").html("(2) " + array[randomnumber].two);
  $("#box2").show();
  $("#box2").focus();
};
$("#box1").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question2();
  }
});

function question3(){
  var answer = $("#box2").val();
  $("#answer2").html("ANSWER: " + answer);
  $("#box2").hide();
  $("#question3").show();
  $("#3").html("(3) " + array[randomnumber].three);
  $("#box3").show();
  $("#box3").focus();
};
$("#box2").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question3();
  }
});

function question4(){
  var answer = $("#box3").val();
  $("#answer3").html("ANSWER: " + answer);
  $("#box3").hide();
  $("#question4").show();
  $("#4").html("(4) " + array[randomnumber].four);
  $("#box4").show();
  $("#box4").focus();
};
$("#box3").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question4();
  }
});

function question5(){
  var answer = $("#box4").val();
  $("#answer4").html("ANSWER: " + answer);
  $("#box4").hide();
  $("#question5").show();
  $("#5").html("(5) " + array[randomnumber].five);
  $("#box5").show();
  $("#box5").focus();
};
$("#box4").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question5();
  }
});

function question6(){
  var answer = $("#box5").val();
  $("#answer5").html("ANSWER: " + answer);
  $("#box5").hide();
  $("#question6").show();
  $("#6").html("(6) " + array[randomnumber].six);
  $("#box6").show();
  $("#box6").focus();
};
$("#box5").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question6();
  }
});

function question7(){
  var answer = $("#box6").val();
  $("#answer6").html("ANSWER: " + answer);
  $("#box6").hide();
  $("#question7").show();
  $("#7").html("(7) " + array[randomnumber].seven);
  $("#box7").show();
  $("#box7").focus();
};
$("#box6").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question7();
  }
});

function question8(){
  var answer = $("#box7").val();
  $("#answer7").html("ANSWER: " + answer);
  $("#box7").hide();
  $("#question8").show();
  $("#8").html("(8) " + array[randomnumber].eight);
  $("#box8").show();
  $("#box8").focus();
};
$("#box7").on("keydown", function (e) {
  if (13 == e.keyCode) {
     question8();
  }
});

function endquestion(){
  var answer = $("#box8").val();
  $("#answer8").html("ANSWER: " + answer);
  $("#box8").hide();
};
$("#box8").on("keydown", function (e) {
  if (13 == e.keyCode) {
     endquestion();
     check();
  }
});
