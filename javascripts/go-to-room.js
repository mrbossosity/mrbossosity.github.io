//Link enter to "go-to-room"
document.getElementById("room-name")
    .addEventListener("keydown", function(answerclick) {
    if (answerclick.keyCode === 13) {
        document.getElementById("go-to-room").click();
    }
});
