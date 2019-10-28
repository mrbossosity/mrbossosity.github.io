//Link enter to "go-to-room"
document.getElementById("go-to-room")
    .addEventListener("keydown", function(answerclick) {
    if (answerclick.keyCode === 13) {
        document.getElementById("go-to-room").click();
    }
});
