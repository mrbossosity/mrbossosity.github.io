//Link enter to "answer"
document.getElementById("answerbox")
    .addEventListener("keydown", function(answerclick) {
    if (answerclick.keyCode === 13) {
        document.getElementById("answer").click();
    }
});
//Link "n" to "next"
window.addEventListener("keydown", function(nextclick) {
    if (nextclick.keyCode === 78) {
        document.getElementById("next").click();
    }
});
//link "spacebar" to "buzz"
window.addEventListener("keydown", function(spacebarclick) {
    if (spacebarclick.keyCode === 32) {
        document.getElementById("buzz").click();
    }
});
//link "p" to "pause"
window.addEventListener("keydown", function(pauseclick) {
    if (pauseclick.keyCode === 80) {
        document.getElementById("pause").click();
    }
});
//link "r" to "resume"
window.addEventListener("keydown", function(resumeclick) {
    if (resumeclick.keyCode === 82) {
        document.getElementById("resume").click();
    }
});
