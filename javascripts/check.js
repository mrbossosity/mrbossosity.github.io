function check() {
var therealanswer = document.getElementById("typeanswer").innerHTML;
var TRAcaseinsensitive = therealanswer.toUpperCase();
var theanswer = document.getElementById("answerbox").value;
var TAcaseinsensitive = theanswer.toUpperCase();
if (TAcaseinsensitive.includes(TRAcaseinsensitive)) {
  alert("Correct!")
  }
 else {
  alert("Wrong!");
  }
};
