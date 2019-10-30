var total = 0;

document.getElementById('add10').onclick = add10;
document.getElementById('sub5').onclick = sub5;

function zero() {
  total = 0;
  document.getElementById('pointstext').innerHTML = "Points: " + ""+total;
}

function add10() {
  total = total + 10;
  document.getElementById('pointstext').innerHTML = "Points: "+total;
}

function sub5() {
  total = total - 5;
  document.getElementById('pointstext').innerHTML = "Points: " + total;
}

function check() {
var therealanswer = document.getElementById("typeanswer").innerHTML;
var TRAcaseinsensitive = therealanswer.toUpperCase();
var theanswer = document.getElementById("answerbox").value;
var TAcaseinsensitive = theanswer.toUpperCase();
if (TAcaseinsensitive.includes(TRAcaseinsensitive)) 
        add10();
  else
        sub5();
if (TAcaseinsensitive.includes(TRAcaseinsensitive)) 
        document.getElementById("correct").style.display="block";
  else
        document.getElementById("incorrect").style.display="block";
};
