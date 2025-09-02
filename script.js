let clockInterval;
let hours = 0, minutes = 0, seconds = 0;

function updateTime() {
    document.getElementById('clock').innerText =
        String(hours).padStart(2,'0') + ":" +
        String(minutes).padStart(2,'0') + ":" +
        String(seconds).padStart(2,'0');
}

function tick() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateTime();
}

function startclock() {
    if (!clockInterval) {  // multiple interval na bane
        clockInterval = setInterval(tick, 1000);
    }
}

function stopclock() {
    clearInterval(clockInterval);
    clockInterval = null;
}

// Reset bhi add kar dete
function resetclock() {
    stopclock();
    hours = minutes = seconds = 0;
    updateTime();
}
function toggleMode(){
    document.body.classList.toggle("light");
}

// Initial display
updateTime();
