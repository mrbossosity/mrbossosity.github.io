var timer
var target = document.getElementById("timer")
var x = 60
var y = 1
var randomnumber
function countdown() {
    x -= y;
    if (x < 10) {
      target.innerHTML = "00:0" + x;
    }
    else {
      target.innerHTML = "00:" + x;
    }
}
function reset() {
  clearInterval(timer);
  target.innerHTML = "1:00";
  $(".nodisplay").hide();
  $(".ANSWER").html("ANSWER:");
  $(".box").val("");
  startquestion();
  x = 60
}

function startTimer() {
    reset();
    timer = setInterval(countdown, 1000);
}
