'use strict';


var x = setInterval(function() {

document.getElementById("timerstart").innerHTML = window.mins + " min "+window.secs + " sec ";

if(window.secs >59){
    window.mins=Math.floor(window.secs/60);
    window.secs = window.secs % 60;
}

if (window.secs > 0 || window.mins > 0) {
    document.getElementById("timerstart").innerHTML = window.mins + " min " + window.secs + " sec ";
    if (window.secs <= 0) {
        window.secs = 59;
        window.mins = window.mins - 1;
    } else {
        window.secs = window.secs - 1;
    }
}
else{
    document.getElementById("timerstart").innerHTML = "Done";
}
}, 1000);