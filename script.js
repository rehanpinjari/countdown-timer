const dayselement = document.getElementById("days");
const hourselement = document.getElementById("hours");
const minuteselement = document.getElementById("minutes");
const secondselement = document.getElementById("seconds");

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor (totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) %60 
    
    dayselement.innerHTML = formatTime(days);
    hourselement.innerHTML = formatTime(hours);
    minuteselement.innerHTML = formatTime(minutes);
    secondselement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}

// Initial Call
countdown();

setInterval(countdown, 1000);