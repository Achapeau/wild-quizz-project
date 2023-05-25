const timerElement = document.querySelector(".timerSec");

let time = 30;
timerElement.innerHTML = time;

function decreaseTimer() {
  timerElement.innerHTML = time;
  if (time <= 0) {
    timerElement.innerHTML = 0;
  } else {
    time--;
  }
}

setInterval(decreaseTimer, 1000);
