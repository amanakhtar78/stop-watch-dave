const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");
// console.log(items);

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// let futureDate = new Date(2023, 8, 20, 3, 30, 20);
// console.log(futureDate);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
let day = futureDate.getDay();
day = weekdays[day];
const set_month = futureDate.getMonth();
const month = months[set_month];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const sec = futureDate.getSeconds();
giveaway.textContent = `sale ends in ${day}, ${date}  ${month},  ${year}  ${hours}:${minutes}`;

const futureTime = futureDate.getTime();
console.log(futureTime);

function calculteTime() {
  const today = new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(t / oneDay);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(minutes);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(seconds);

  const values = [days, hours, minutes, seconds];

  function alter(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  items.forEach(function (item, index) {
    item.innerHTML = alter(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 className="expired">sorry, this giveaway is over</h4>`;
  }
}
let countdown = setInterval(calculteTime, 1000);
calculteTime();
