function check() {
var therealanswer = document.getElementById("typeanswer").innerHTML;
var TRAcaseinsensitive = therealanswer.toUpperCase();
var theanswer = document.getElementById("answerbox").value;
var TAcaseinsensitive = theanswer.toUpperCase();
if (TAcaseinsensitive.includes(TRAcaseinsensitive)) 
        document.getElementById("correct").style.display="block";
  else
        document.getElementById("incorrect").style.display="block";
};
