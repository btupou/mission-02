console.log("Mission 2 Connected! 👀");

// create variables for pomodoro time elements
const focusTime = document.getElementById("pomodoro-time");
const shortBreakTime = document.getElementById("short-break-time");
const longBreakTime = document.getElementById("long-break-time");
const isRunning = false;

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
});

timerMins.addEventListener("click", function (e) {
  console.log(`minutes: ${+e.target.textContent}`);
});

console.log(focusTime.textContent);
console.log(shortBreakTime);
console.log(shortBreakTime.textContent);
console.log(longBreakTime);
console.log(longBreakTime.textContent);

// change time
changeTimers.addEventListener("click", function () {
  timerMins.textContent = +focusTimeInput.value;
  focusTime.textContent = +focusTimeInput.value;
});

// <input  type="number" id="focus-input" placeholder="25">pomodoro: <span id="pomodoro-time">25</span></input><br>
// <input number="number" id="short-break-input" placeholder="5">short break: <span id="short-break-time">5</span></input><br>
// <input inputer="number" id="long-break-input" placeholder="15">long break: <span id="long-break-time">15</span></input>

let now = performance.now();
let elapsedTime = 0;
let startTime = 0;

console.log(now);

// Math.floor();
// Timer checks time -> checks elapsed time since previous check -> updates timer

let time = startTime * 60;
