//check if answers are right
function check() {
    clearInterval(timer);
var answer1 = $("#box1").val(),
    answerCI1 = answer1.toUpperCase(),
    answer2 = $("#box2").val(),
    answerCI2 = answer2.toUpperCase(),
    answer3 = $("#box3").val(),
    answerCI3 = answer3.toUpperCase(),
    answer4 = $("#box4").val(),
    answerCI4 = answer4.toUpperCase(),
    answer5 = $("#box5").val(),
    answerCI5 = answer5.toUpperCase(),
    answer6 = $("#box6").val(),
    answerCI6= answer6.toUpperCase(),
    answer7 = $("#box7").val(),
    answerCI7 = answer7.toUpperCase(),
    answer8 = $("#box8").val(),
    answerCI8 = answer8.toUpperCase(),  
    TRACI1 = array[randomnumber].ANSWER1.toUpperCase(),
    TRACI2 = array[randomnumber].ANSWER2.toUpperCase(),
    TRACI3 = array[randomnumber].ANSWER3.toUpperCase(),
    TRACI4 = array[randomnumber].ANSWER4.toUpperCase(),
    TRACI5 = array[randomnumber].ANSWER5.toUpperCase(),
    TRACI6 = array[randomnumber].ANSWER6.toUpperCase(),
    TRACI7 = array[randomnumber].ANSWER7.toUpperCase(),
    TRACI8 = array[randomnumber].ANSWER8.toUpperCase();
    
  if (answerCI1 == TRACI1) {
    $("#correct1").show();
    add10();    
  }
  else {
    $("#incorrect1").show();
    $("#ra1").html(array[randomnumber].ANSWER1);
  }
   if (answerCI2 == TRACI2) {
    $("#correct2").show();
    add10();
  }
  else {
    $("#incorrect2").show();
    $("#ra2").html(array[randomnumber].ANSWER2);
  }
  if (answerCI3 == TRACI3) {
    $("#correct3").show();
    add10();
  }
  else {
    $("#incorrect3").show();
    $("#ra3").html(array[randomnumber].ANSWER3);
  }
  if (answerCI4 == TRACI4) {
    $("#correct4").show();
    add10();
  }
  else {
    $("#incorrect4").show();
    $("#ra4").html(array[randomnumber].ANSWER4);
  }
  if (answerCI5 == TRACI5) {
    $("#correct5").show();
    add10();
  }
  else {
    $("#incorrect5").show();
    $("#ra5").html(array[randomnumber].ANSWER5);
  }
  if (answerCI6 == TRACI6) {
    $("#correct6").show();
    add10();
  }
  else {
    $("#incorrect6").show();
    $("#ra6").html(array[randomnumber].ANSWER6);
  }
  if (answerCI7 == TRACI7) {
    $("#correct7").show();
    add10();
  }
  else {
    $("#incorrect7").show();
    $("#ra7").html(array[randomnumber].ANSWER7);
  }
  if (answerCI8 == TRACI8) {
    $("#correct8").show();
    add10();
  }
  else {
    $("#incorrect8").show();
    $("#ra8").html(array[randomnumber].ANSWER8);
  }
}
//end check
//points
var total = 0;

function zero() {
  total = 0;
  $("#pointstext").html("Points: " + "" + total);
}

function add10() {
  total = total + 10;
  $("#pointstext").html("Points: " + "" + total);
}

function sub5() {
  total = total - 5;
  $("#pointstext").html("Points: " + "" + total);
}
//end-points
