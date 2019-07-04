'use strict';

let timerstart = document.getElementById('startTimer');

timerstart.onclick = function(element) {
    var x = document.getElementById("timerForm");
    var mins = x.elements[0].value;
    var secs = x.elements[1].value;
    var newWindow = window.open('timerpage.html');

    if (/^\d+$/.test(mins)){
        newWindow.mins = Math.floor(mins);
    }
    else{
        newWindow.mins = 0;
    }

    if (/^\d+$/.test(secs)){
        newWindow.secs = Math.floor(secs);
    }
    else{
        newWindow.secs = 0;
    }
};
