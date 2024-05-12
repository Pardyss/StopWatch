let timediv = document.getElementById("timesDiv");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");
let resume = document.querySelector("#resume");
let startBtn = document.querySelector("#start");

let startClock = document.querySelector("#startClock");
let clocks = document.querySelector("#clocks");
let start;
let end;
let ms;
let clicked = false;
let seconds2;
let mins2;
let hours2;
var seconds;
var mins;
var hours;
let newStart;
let newEnd;
let intervalid2;
let duration = 0;
let start2;
let end2;

function stopWatch() {
  clicked = true;

  intervalid = setInterval(() => {
    let dateTime2 = new Date();
    end = dateTime2.getTime();
    const difference = end - start;

    ms = Math.floor(difference % 1000);
    const seconds = Math.floor(difference / 1000);

    mins = Math.floor(seconds / 60);
    hours = Math.floor(mins / 60) % 60;
    days = Math.floor((hours / 24) % 24);

    seconds2 = seconds % 60;
    mins2 = mins % 60;
    hours2 = hours % 60;

    timediv.innerHTML = `${hours2.toString().padStart(2, "0")} : ${mins2
      .toString()
      .padStart(2, "0")} : ${seconds2.toString().padStart(2, "0")}.${ms
      .toString()
      .padStart(3, "0")}`;
  }, 1);
}

startBtn.addEventListener("click", function () {
  let dateTime = new Date();

  start = dateTime.getTime();
  if (!clicked) {
    stopWatch();
  }
});

pause.addEventListener("click", function () {
  clearInterval(intervalid);
  clearInterval(intervalid2);
  let dateTime3 = new Date();
  end = dateTime3.getTime();
  clicked = false;
  duration += end - start;
  console.log(duration, "duration");
});

resume.addEventListener("click", function () {
  if (!clicked) {
    let dateTime = new Date();

    start = dateTime.getTime();
    let dateTime2 = new Date();
    newStart = dateTime2.getTime();
    clicked = true;
    intervalid2 = setInterval(() => {
      let dateTime2 = new Date();
      newEnd = dateTime2.getTime();
      let zeroStart = newEnd - newStart;
      difference = zeroStart + duration;
      ms = Math.floor(difference % 1000);
      const seconds = Math.floor(difference / 1000);

      mins = Math.floor(seconds / 60);
      hours = Math.floor(mins / 60) % 60;
      days = Math.floor((hours / 24) % 24);

      seconds2 = seconds % 60;
      mins2 = mins % 60;
      hours2 = hours % 60;

      timediv.innerHTML = `${hours2.toString().padStart(2, "0")} : ${mins2
        .toString()
        .padStart(2, "0")} : ${seconds2.toString().padStart(2, "0")}.${ms
        .toString()
        .padStart(3, "0")}`;
    }, 1);
  }
});

reset.addEventListener("click", function () {
  clearInterval(intervalid);
  timediv.innerHTML = "00 : 00: 00.000";
  clicked = false;
});

setInterval(() => {
  const time = new Date();

  let clockHour = time.getHours();
  let clockMins = time.getMinutes();
  let clockSeconds = time.getSeconds();

  clocks.innerHTML =
    `${clockHour.toString().padStart(2, "0")}` +
    ":" +
    `${clockMins.toString().padStart(2, "0")}` +
    ":" +
    `${clockSeconds.toString().padStart(2, "0")}`;
}, 1000);
