function check() {
var therealanswer = document.getElementById("typeanswer").innerHTML;
var TRAcaseinsensitive = therealanswer.toUpperCase();
var theanswer = document.getElementById("answerbox").value;
var TAcaseinsensitive = theanswer.toUpperCase();
if (TAcaseinsensitive.includes(TRAcaseinsensitive)) {
  document.getElementById("incorrect").display = "none";
  document.getElementById("correct").display = "block";
  }
 else {
  document.getElementById("correct").style.display = "none";
  document.getElementById("incorrect").style.display = "block";
  }
};
