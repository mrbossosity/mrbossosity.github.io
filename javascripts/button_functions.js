function enableButtons() {
  document.getElementById("pause").disabled=false;
  document.getElementById("resume").disabled=false;
  document.getElementById("skip").disabled=false;
  document.getElementById("buzz").disabled=false;
  document.getElementById("answer").disabled=false;
  }
  
function disablenext () {
  document.getElementById("next").disabled=true;
  }
function enablenext () {
  document.getElementById("next").disabled=false;
  }
function pause() {
  speed = 1000000000;
  }
function resume() {
  speed = 55;
  }
function buzz() {
  speed = 10000000000;
  }
function skip() {
  speed = 0
  }
function focusanswer() {
  document.getElementById("answerbox").focus();
  }
function answerform(a) {
  if(a==1)
        document.getElementById("buzzanswer").style.display="none";
  else
        document.getElementById("buzzanswer").style.display="block";
}
 function reload() {
  setTimeout(function(){location.reload(); }, 4000);
}
