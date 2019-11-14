var timer
var target = document.getElementById("timer")
var x = 60
var y = 1
function countdown() {
    x -= y;
    target.innerHTML = "00:" + x;
}

function reset() {
  clearInterval(timer);
  target.innerHTML = "1:00"
  x = 60
}

function startTimer() {
    reset();
    timer = setInterval(countdown, 1000)
}
