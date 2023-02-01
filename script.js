let hours = document.getElementById("h");
let minutes = document.getElementById("m");
let seconds = document.getElementById("s");

const Watch = setInterval(() => {
  let dateToday = new Date();
  let hours_now = dateToday.getHours();
  let minutes_now = dateToday.getMinutes();
  let seconds_now = dateToday.getSeconds();

//   hours.textContent = hours_now;
//   minutes.textContent = minutes_now;
//   seconds.textContent = seconds_now;
});
