var radj = Math.floor(Math.random() * 25);
var rnoun = Math.floor(Math.random() * 25);

$("#cusername").html(randadj[radj] + " " + randnoun[rnoun])
//typewriter here
var random;
var timer; var timer2; var timer3;
var char;
var sentence;
var answer;
var date;
var target = document.getElementById("question");
var speed = 50;
var usernameresume = 0;

function type() {
  if(char < sentence.length) {
    target.innerHTML += sentence.charAt(char++);
  } 
  else {
    clearInterval(timer);
  } 
}

function reset() {
    clearInterval(timer);
    var random = Math.floor(Math.random() * array.length);
    target.innerHTML = '';
    sentence = array[random].question;
    answer = array[random].ANSWER;
    date = array[random].date;
    char = 0;
    timer = setInterval(type, speed);
    usernameresume = 0;
}

var check = document.getElementById("skip")

function resetanswernext() {
  $("#answerbox").val('');
  $("span.buzz").hide();
  $("#answerinput").html('')
}

$("#next").click(function(){
  $("#buzz").prop('disabled', false);
  reset();
  resetanswernext();
  $("#jqdate").html(date);
  $(".bottom").css("display", "none")
  if (check.checked == true) {
    $("#next").prop("disabled", false);
  }
  else {
    $("#next").prop("disabled", true)
  }
});

$("#pause").click(function(){
  clearInterval(timer);
  $("#resume").prop("disabled", false);
  $("#pause").prop("disabled", true);
  $("#buzz").prop("disabled", true);
  $("#resume").css("display", "inline");
  $("#pause").css("display", "none");
  $(".date").css({"left": "16.85vw", "width" : "50.2vw"});
});

$("#resume").click(function(){
  timer = setInterval(type, speed);
  $("#pause").prop("disabled", false);
  $("#resume").prop("disabled", true);
  $("#buzz").prop("disabled", false);
  $("#resume").css("display", "none");
  $("#pause").css("display", "inline")
  $(".date").css({"left": "15.35vw", "width" : "51.6vw"});
});

$("#darkmode").click(function() {
  $("body").toggleClass("invert");
  $("button").toggleClass("invert");
  if ($("#darkmode").html() == "Yes") {
    $("#darkmode").html('No')
  }
  else {
    $("#darkmode").html('Yes')
  }
});

function disablebuttons() {
  $("#next").prop("disabled", true);
  $("#pause").prop("disabled", true);
  $("#resume").prop("disabled", true);
  $("#buzz").prop("disabled", true);
}

$("#buzz").click(function() {
  clearInterval(timer);
  disablebuttons();
  $("#answerbox").css("display", "inline");
  $(".bottom").css("display", "inline")
  $("#jqdate").css("display", "none");
  $(".buzz").show();
  $("#answerbox").focus();
  target.innerHTML += " ∆ ";
  usernameresume = 1;
})

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 78) {    
    document.getElementById("next").click();
  }
});

window.addEventListener("keydown", function(e) { 
  if (e.keyCode === 80) {
    document.getElementById("pause").click();
  }
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 32) {
    document.getElementById("buzz").click();
  }
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 82) {
    document.getElementById("resume").click();
  }
});

$("#answerbox").keydown(function(e) {
  if (e.keyCode === 13) {
    assess();
    clearInterval(timer2);
    clear_answer_box();
    reveal();
    $("#jqdate").css("display", "inline");
    $("#next").prop("disabled", false);
    $("#pause").prop("disabled", false);
  };
})

var pts = 0;

function assess() {
  var useranswer = $("#answerbox").val();
  var uauc = useranswer.toUpperCase();
  var auc = answer.toUpperCase();
  if (uauc.includes(auc)) {
    pts = (pts += 10);
    $("#points").html(pts);
  }
  else {
    pts = (pts -= 5);
    $("#points").html(pts)
  }
}

function clear_answer_box() {
  $("#answerbox").blur();
  $("#answerbox").css('display', 'none')
}

function reveal() {
  $("#jqdate").html(date + " ANSWER: " + answer);
  target.innerHTML = sentence;
};

$("#answerbox").on('keydown', function() {
  timer2 = setInterval(function() {
    var value = $("#answerbox").val();
    $("#answerinput").html(value)
  }, 10)
})

$("#username").on('keydown', function() {
  disablebuttons();
  timer3 = setInterval(function() {
    var name = $("#username").val();
    $("#cusername").html(name)
  }, 10)
})

$("#username").on('focus', function() {
  $("#pause").click();
})


$("#username").on("keydown", function (e){
  if (e.keyCode === 13) {
    clearInterval(timer3);
    $("#username").blur();
    $("#pause").prop("disabled", true);
    $("#resume").prop("disabled", false);
    $("#buzz").prop("disabled", false);
    $("#next").prop("disabled", false);
    if (usernameresume == 0) {
      $("#resume").click();
    }
    else {  
      $("#resume").prop("disabled", true);
      $("#pause").prop("disabled", true);
      $("#resume").css("display", "none");
      $("#pause").css("display", "inline");
    }
  }
})
