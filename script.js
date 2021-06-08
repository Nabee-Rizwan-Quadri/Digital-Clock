function digitalClock() {
    var d = new Date()

    var hours = d.getHours()
    for (var i = 0; i <= 9; i++) {
        if (hours == i) {
            hours = "0" + hours
            break
        }
    }

    var minutes = d.getMinutes()
    for (var i = 0; i <= 9; i++) {
        if (minutes == i) {
            minutes = "0" + minutes
            break
        }
    }

    var seconds = d.getSeconds()
    for (var i = 0; i <= 9; i++) {
        if (seconds == i) {
            seconds = "0" + seconds
            break
        }
    }

    if (hours == 0) {
        hours = 12
    }

    var clock = hours + " : " + minutes + " : " + seconds

    document.getElementById("clockContainer").innerText = clock
}

function calender() {
    var calender = new Date()

    document.getElementById("dateContainer").innerText = calender.toDateString();
}

calender()

var intervalID = 0;

function startClock() {
    if (intervalID == 0) {
        intervalID = setInterval(digitalClock, 1000)
    }
}

function stopClock() {
    clearInterval(intervalID)
    intervalID = 0
}