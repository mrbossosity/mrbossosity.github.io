var myArray = src = "mrbossosity.github.io/JSON/
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    var i = 0;
    var speed = 60;
function typeWriter() {
  if (i < rand.length) {
    document.getElementById("question").innerHTML += rand.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
