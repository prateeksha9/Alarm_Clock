
const display = document.getElementById('clock');

function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var session = "AM";

    if(hour > 12){
        session = "PM";
        hour = hour - 12;
    }

    if(hour == 0){
        session = "AM";
        hour = 0;
    }

    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    var currentTime = hour + ":" + minute + ":" + second + " " + session;

    display.innerHTML = currentTime;
}

showTime();

//update showTime in every second
setInterval(showTime, 1000);