let counter = 0;

function incrementCounter() {
  counter++;
  document.getElementById("counter-value").textContent = counter;
}

function decrementCounter() {
  counter--;
  document.getElementById("counter-value").textContent = counter;
}
