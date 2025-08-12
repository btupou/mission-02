console.log("Mission 2 Connected! 👀");

// create variables for pomodoro time elements
const focusTime = document.getElementById("pomodoro-time");
const shortBreakTime = document.getElementById("short-break-time");
const longBreakTime = document.getElementById("long-break-time");
let timerRunning = false;

const focusTimeInput = document.getElementById("focus-input");
const shortBreakTimeInput = document.getElementById("short-break-input");
const longBreakTimeInput = document.getElementById("long-break-input");

// timer = document.getElementById("timer");
const timerSecs = document.getElementById("timer-secs");
const timerMins = document.getElementById("timer-mins");

// change timers button
const changeTimers = document.getElementById("change-timers");

console.log(focusTimeInput);
console.log(shortBreakTimeInput);
console.log(longBreakTimeInput);

// Event Listeners
focusTimeInput.addEventListener("change", function (e) {
  console.log(`Pomodoro Time: ${e.target.value}`);
});

shortBreakTimeInput.addEventListener("change", function (e) {
  console.log(`Short Break Time: ${e.target.value}`);
});

longBreakTimeInput.addEventListener("change", function (e) {
  console.log(`Long Break Time: ${e.target.value}`);
});

timerSecs.addEventListener("click", function (e) {
  console.log(`seconds: ${+e.target.textContent}`);
  // clearInterval();
  startTimer();
});

timerMins.addEventListener("click", function (e) {
  console.log(`minutes: ${+e.target.textContent}`);
  pauseTimer();
  // startTimer();
});

console.log(focusTime.textContent);
console.log(shortBreakTime);
console.log(shortBreakTime.textContent);
console.log(longBreakTime);
console.log(longBreakTime.textContent);

// change time
changeTimers.addEventListener("click", function () {
  if (timerRunning != true) {
    timerMins.textContent = +focusTimeInput.value;
    focusTime.textContent = +focusTimeInput.value;
    console.log("pomodoro time changed!");
    shortBreakTime.textContent = +shortBreakTimeInput.value;
    console.log("short time changed");
    longBreakTime.textContent = +longBreakTimeInput.value;
    console.log("long break time changed");
  } else {
    alert("Timer is running!");
  }
});

let elapsedTime = 0;
let startTime = +timerMins.textContent;
const timerStates = [
  "Focusing",
  "Short Rest",
  "Focusing",
  "Short Rest",
  "Focusing",
  "Short Rest",
  "Focusing",
  "Long Break",
];
const defaultTimes = [25, 5, 15];
let state = timerStates[0];
let pomodoros = 0;

// let time = startTime * 60;
let time = startTime * 60;
console.log(`start time: ${time}`);

// console.log(timerRunning);
// setInterval(updateTimer, 1000);
// toggleTimer();
// console.log(timerRunning);

function updateTimer() {
  const mins = Math.floor(time / 60);
  let secs = time % 60;

  console.log(`mins: ${mins} : secs: ${secs}`);

  // check if secs is 0? make it 00!
  timerMins.textContent = +mins;
  if (secs <= 9) {
    timerSecs.textContent = "0" + +secs;
    secs = timerSecs.textContent;
  } else {
    timerSecs.textContent = +secs;
    secs = timerSecs.textContent;
  }

  // decerement timer i.e 1500 -> 1499
  time--;
  elapsedTime++;
  console.log(`time left: ${+time} | time elapsed: ${+elapsedTime}`);
  changeTabTitle(mins, secs, state);
}

function changeStates() {
  if (timerStates[pomodoros + 1] === "Long Break") {
  } else {
    pomodoros++;
    state = timerStates[pomodoros];
  }
}

function toggleTimer() {
  if (timerRunning) {
    timerRunning = false;
    elapsedTime = 0;
  } else {
    timerRunning = true;
    elapsedTime = 0;
  }
}

// Change the tab title to show timer
function changeTabTitle(mins, secs, state) {
  document.title = `🍅 ${state}: ${mins}:${secs} `;
}

// Reset timer variables
function resetTimer() {
  clearInterval(timerId);
  elapsedTime = 0;
  pomodoros = 0;
}

function pauseTimer() {
  if (timerRunning) {
    clearInterval(timerId);
    timerRunning = false;
  }
}

function startTimer() {
  if (!timerRunning) {
    timerId = setInterval(updateTimer, 1000);
    timerRunning = true;
  }
}

// for each pomodoro completed add a tomato on the screen
// 🍅
// #FECC59
// #3BA76B
// #F04C4A
// #F177A8
// #26BDEF

// TODO
// RESTART TIMER ONCE PAUSED
// STOP TIMER AND RESET VARIABLES ONCE PAUSED
// CHANGE BACKGROUND DURING DIFFERENT STATES
