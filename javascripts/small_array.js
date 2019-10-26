var questions = [
     'Two weeks after a Robert Geiger news story coined a name for this event, Hugh Bennett was made director of a new agency within the Interior Department. This event prompted the Soil Conservation Act, as it was partly caused by cattle overgrazing. Dorothea Lange’s iconic photograph Migrant Mother depicts a family during, for ten points, what event in which "Okies" attempted to move to California to avoid severe drought during the Great Depression?'                                                                                                                             
      'Genseric captured this city after his betrothal to Eudocia was broken, and Alaric was able to capture this city after the death of Stilicho. The Battle of the Allia led to the capture of this city, which was forced to measure out ransom money using weighted scales by Brennus. Romulus Augustulus was deposed after the capture of this city in 476 AD. For ten points, name this city that was sacked several times during the fall of its Italy-based empire.'                                                                                                                              
      'This kingdom was briefly controlled by Britain after the arrival of the HMS Carysfort in the Paulet Affair. Because Kalakaua had been intimidated into giving his power away, this kingdom’s legal code was known as the Bayonet Constitution. Sanford Dole was appointed president of this kingdom shortly before it was annexed by William McKinley in 1898. For ten points, name this kingdom, that was ruled by Queen Liliuokalani and became the 50th US state.'                                                                                                                               
      'In what became known as this city’s "mile," a group of troops including Randall Ramaglia walked through RPG fire to a rally point at National Street. William Garrison commanded troops in a battle in this city that was part of the larger Operation Gothic Serpent; in that battle, troops under Mohammad Farah Aidid shot down two Black Hawk helicopters. For ten points, name this site of a 1993 battle involving Delta Force, the capital of Somalia.'                                                                                                                               
      'This leader’s promotion of pro-feminist policies was noted with the statement "Women hold up half the sky." This man began the Anti-Rightist Campaign after severe criticism led him to undo the Hundred Flowers Movement. In a failed attempt to modernize, this man encouraged peasants to create backyard furnaces during the Great Leap Forward, which began in 1958. For ten points, name this Communist chairman of China.'                                                                                                                              
      'This President’s doctrine pledged support to Middle Eastern governments, including military support for Camille Chamoun of Lebanon. Earl Warren was appointed as Chief Justice by this president a year before Brown v. Board of Education overturned the doctrine of "separate but equal." This president sent members of 101st Airborne Division to escort the Little Rock Nine. For ten points, name this president and former World War II Supreme Allied Commander.'                                                                                                                               
      'Members of this religious movement follow a ruleset called the Ordnung. One of the most conservative sects of this religious group, based in Nebraska, is known for its brown clothing. Some young people from this religious group are allowed to disobey norms in an exploratory period called Rumspringa. Lancaster County, Pennsylvania was a migration site for many members of, for ten points, what religious group known for living without the conveniences of modern technology?'                                                                                                                               
      'In this work, a character recounts the tale of a man named Er who revives on his funeral pyre and shares an account of the afterlife. A character in this work tries to explain the psyche by asking Glaucon to imagine a divided line and imagines a ring that makes the wearer invisible, the Ring of Gyges. The Allegory of the Cave and the bene ts of rule under a \philosopher-king" are described in, for ten points, what Platonic dialogue about justice and forms of government like oligarchy and democracy?'                                                                                                                               
      'This battle was fought concurrently with an engagement at Wavre [wahv], leading to the absence of Emmanuel Grouchy. This battle is commemorated by the Lion’s Mound, where a commander was shot off his horse. The arrival of Gebhard von Blucher’s Prussians helped turn the tide of this battle, which ended the Hundred Days and forced its loser into exile in St. Helena. For ten points, name this 1815 battle in which Wellington defeated Napoleon for the last time.'                                                                                                                               
	];
var answers = [
     'Dust Bowl',
     'Rome',
     'Hawaii',
     'Mogadishu',
     'Mao Zedong',
     'Eisenhower',
     'Amish',
     'The Republic',
     'Battle of Waterloo',
  ];
var randomnumber = Math.floor((Math.random() * 3) + 0);
var randomquestion = questions[randomnumber];
var correspondinganswer = answers[randomnumber];
        //typewriter stuff
var target = document.getElementById("question");
var char;
var timer;
var sentence;
function type(){
  if(char < sentence.length) {
    target.innerHTML += sentence.charAt(char++);
  } 
  else {
    clearInterval(timer);
  } 
}
function reset() {
  clearInterval(timer);
  randomnumber = Math.floor((Math.random() * 8) + 0);
  randomquestion = questions[randomnumber];
  correspondinganswer = answers[randomnumber];
  sentence = randomquestion;
  char = 0;
  target.innerHTML = '';
}
function typeWriter() {
  reset();  
  var speed = document.getElementById("speedvalue").value;
  timer = setInterval(type, speed);
}
function pause() {
  clearInterval(timer)
}
function resume() {
  var resumespeed = document.getElementById("speedvalue").value;
  timer = setInterval(type, resumespeed);
}
function typeanswer() {
  document.getElementById("typeanswer").innerHTML = correspondinganswer;
}
