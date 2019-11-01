document.getElementById("username").focus();
function password() {
    var mypassword = document.getElementById("password").value;
    var password = "iolani63";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    if (mypassword.includes(password)) 
        document.getElementById("gotohome").click()
    else 
        document.getElementById("burn").style.display = "block";
        document.getElementById("main").style.display = "none";
        document.getElementById("back").style.display = "block";
};
    document.getElementById("password")
        .addEventListener("keydown", function(answerclick) {
        if (answerclick.keyCode === 13) {
            document.getElementById("submit").click();
    }
});
document.getElementById("username")
    .addEventListener("keydown", function(answerclick) {
    if (answerclick.keyCode === 13) {
        document.getElementById("submit").click();
    }
});
function back(){
    document.getElementById("burn").style.display = "none";
    document.getElementById("main").style.display = "flex"
    document.getElementById("back").style.display = "none";
    document.getElementById("username").focus();
};
