let timerInterval;
let timerSeconds = 0;

function startTimer() {
  timerInterval = setInterval(() => {
    timerSeconds++;
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    document.getElementById("timer-display").textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  document.getElementById("timer-display").textContent = "00:00";
}
