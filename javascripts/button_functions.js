var allowskip = document.getElementById("skip?");
function disablenext () {
 if(allowskip.checked == false){
  document.getElementById("next").disabled=true;
  document.getElementById("next").style = 
    "color:silver; background-color: rgb(255,157,0); border:1px solid silver; box-shadow: 0px 1px 1px gray;"
  } 
 else {
  document.getElementById("next").disabled=false;
  }
}
function enablenext () {
  document.getElementById("next").disabled=false;
  document.getElementById("next").style = 
  "color:white; background-color: orange; border:1px solid white; box-shadow: 0px 1px 4px darkorange;"
  }
        //this disables the other buttons upon buzzing so typing n, p, r, or space doesn't trigger their linked functions
function killbuttons() {
  document.getElementById("next").disabled=true;
  document.getElementById("next").style = "color:silver; background-color: rgb(255,157,0); border:1px solid silver; box-shadow: 0px 1px 1px gray;";
  document.getElementById("pause").disabled=true;
  document.getElementById("resume").disabled=true;
} 
        //this enables pause, resume, and buzz onclick next
function buttonsalive() {
  document.getElementById("pause").disabled=false;
  document.getElementById("resume").disabled=false;
  document.getElementById("buzz").disabled=false;
  document.getElementById("buzz").style = "color:white; background-color: red; border: 1px solid white; box-shadow: 0px 1px 4px maroon;";
} 
 //buzzed look and disable buzz onclick
function buzzed () {
  document.getElementById("buzz").style = "color:gray; background-color: rgb(195,0,0); border: 1px solid lightgray; box-shadow: 0px 1px 1px gray;"
}
function disablebuzz () {
  document.getElementById("buzz").disabled=true;  
} 
//clear textbox onclick next
function cleartext() {
  document.getElementById("answerbox").value = ""
  }  
//pause/resume
function pause() {
  clearInterval(timer);
  }
function resume() {
  timer = setInterval (type, speed)
  }
//focus cursor in textbox, display your answer onclick answer
function focusanswer() {
  document.getElementById("answerbox").focus();
  }
function youranswer() {
  var answer = document.getElementById("answerbox").value;
  document.getElementById("youranswer").innerHTML = answer
  }
//onclick buzz starts timeout! show answer after 6000
var buzztimeout;

function timeup() {
  clearTimeout(buzztimeout);
  buzztimeout = setTimeout(outoftime, 6000);
}
function outoftime() {
  showyouranswer(2); 
  answerform(1);
  youranswer(); 
  enablenext(); 
  typetoend();
  correspondinganswerform(2);
}
 //onclick answer overrides buzz button's timeout, show answer onclick
var answerbuzztimeout;

function answertimeup() {
  clearTimeout(buzztimeout);
  clearTimeout(answerbuzztimeout);
  answerbuzztimeout = setTimeout(answeroutoftime, 0);
}
function answeroutoftime() {
  showyouranswer(2); 
  answerform(1);
  youranswer(); 
  enablenext(); 
  typetoend();
  correspondinganswerform(2);
}
//type rest of question quickly to reveal answer
function typetoend() {
  timer = setInterval (type, 0)
}
//show or hide forms 
function answerform(a) {
  if(a==1)
        document.getElementById("buzzanswer").style.display="none";
  else
        document.getElementById("buzzanswer").style.display="block";
}
function showyouranswer(b) {
  if(b==1)
        document.getElementById("showyouranswer").style.display="none";
  else
        document.getElementById("showyouranswer").style.display="block";
}
function correspondinganswerform(a) {
  if(a==1)
        document.getElementById("correspondinganswer").style.display="none";
  else
        document.getElementById("correspondinganswer").style.display="block";
}
function correctness() {
        document.getElementById("correct").style.display="none";
        document.getElementById("incorrect").style.display="none";
}
