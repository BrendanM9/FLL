function stopTimer(){
    display.innerHTML = "00:00";
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            display.innerHTML = "02:30";
        }
    }, 1000);
}
function underReview(){
            document.getElementById("under-review").innerHTML = "Match Under Review"
            document.getElementById("under-review").style.display = "block";
}
function allGo(){
    document.getElementById("under-review").style.display = "none";
}
function redRed(){
    document.getElementById("rcardr").style.display="block";
}
function redYellow(){
    document.getElementById("ycardr").style.display="block";
}
function blueRed(){
    document.getElementById("rcardb").style.display="block";
}
function blueYellow(){
    document.getElementById("ycardb").style.display="block";
}
function redClear(){
    document.getElementById("rcardr").style.display="none";
    document.getElementById("ycardr").style.display="none";
}
function blueClear(){
    document.getElementById("rcardb").style.display="none";
    document.getElementById("ycardb").style.display="none";
}
window.onload = function () {
    var fiveMinutes = 60 * 2.49,
        display = document.querySelector('#time');
        
        document.getElementById('start').addEventListener('click', function () { 
            startTimer(fiveMinutes, display);
        }); 
        document.getElementById("review").addEventListener("click", function() {
            underReview()
        });
        document.getElementById("go").addEventListener("click", function () {
            allGo();
        });
        document.getElementById("redred").addEventListener("click", function() {
            redRed();
        });
        document.getElementById("redyellow").addEventListener("click", function() {
            redYellow();
        });
        document.getElementById("bluered").addEventListener("click", function() {
            blueRed();
        });
        document.getElementById("blueyellow").addEventListener("click", function() {
            blueYellow();
        });
        document.getElementById("clrr").addEventListener("click", function() {
            redClear();
        });
        document.getElementById("clrb").addEventListener("click", function() {
            blueClear();
        });
};