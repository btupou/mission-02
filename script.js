console.log("Mission 2 Connected! 👀");

// create variables for pomodoro time elements
focusTime = document.getElementById("pomodoro-time");
shortBreakTime = document.getElementById("short-break-time");
longBreakTime = document.getElementById("long-break-time");

focusTimeInput = document.getElementById("focus-input");
shortBreakTimeInput = document.getElementById("short-break-input");
longBreakTimeInput = document.getElementById("long-break-input");

console.log(focusTimeInput);
console.log(shortBreakTimeInput);
console.log(longBreakTimeInput);

focusTimeInput.addEventListener("change", function (e) {
  console.log(e.target.value);
});

shortBreakTimeInput.addEventListener("change", function (e) {
  console.log(e.target.value);
});
longBreakTimeInput.addEventListener("change", function (e) {
  console.log(e.target.value);
});

console.log(focusTime);
console.log(focusTime.textContent);
console.log(shortBreakTime);
console.log(shortBreakTime.textContent);
console.log(longBreakTime);
console.log(longBreakTime.textContent);
