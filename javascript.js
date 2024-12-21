// Variables to track time and state
let hours = 0, minutes = 0, seconds = 0;
let timerInterval = null;
let running = false;

// DOM elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

// Function to format time
function formatTime(num) {
    return num < 10 ? `0${num}` : num; // Add leading zero if needed
}

// Function to update the display
function updateDisplay() {
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        running = true;
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000); // Update every second
    }
}

// Function to pause the stopwatch
function pauseStopwatch() {
    running = false;
    clearInterval(timerInterval);
}

// Function to reset the stopwatch
function resetStopwatch() {
    running = false;
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    lapList.innerHTML = ''; // Clear lap times
}

// Function to record a lap time
function recordLap() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        lapList.appendChild(lapTime);
    }
}

// Event listeners for buttons
startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);

// Initialize display
updateDisplay();