var timer
var x = 60
var y = 1
function countdown() {
    x -= y;
    document.getElementById("timer").innerHTML = "00:" + x;
}
function startTimer() {
    timer = setInterval(countdown, 1000)
}
