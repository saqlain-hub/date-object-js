function checkDate() {
  const date = new Date();

  let x;

  x = date.getDate();
  console.log(x);
  x = date.getDay();
  console.log(x);

  x = date.getFullYear();
  console.log(x);

  x = date.getHours();
  console.log(x);

  x = date.getMilliseconds();
  console.log(x);

  x = date.getMinutes();
  console.log(x);

  x = date.getMonth();
  console.log(x);

  x = date.getSeconds();
  console.log(x);

  x = date.getTime();
  console.log(x);

  x = date.getTimezoneOffset();
  console.log(x);
}

function updateDate() {
  const timeEl = document.querySelector("#time");
  const dayEl = document.querySelector("#day");
  const dateEl = document.querySelector("#date");

  const dateObj = getDateObj();

  const hours = dateObj.getHours();
  const mins = dateObj.getMinutes();
  const day = dateObj.getDay();
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();
  const todayDate = `${date} / ${month + 1} / ${year}`;

  timeEl.innerText = `${hours}:${mins}`;
  dayEl.innerText = checkDay(day);
  dateEl.innerText = todayDate;

  function checkDay(day) {
    let dayAlpha;
    switch (day) {
      case 1:
        dayAlpha = "Monday";
        break;
      case 2:
        dayAlpha = "Tuesday";
        break;
      case 3:
        dayAlpha = "Wednesday";
        break;
      case 4:
        dayAlpha = "Thursday";
        break;
      case 5:
        dayAlpha = "Friday";
        break;
      case 6:
        dayAlpha = "Saturday";
        break;
      case 7:
        dayAlpha = "Sunday";
        break;
    }
    return dayAlpha;
  }

  function getDateObj() {
    const date = new Date();
    return date;
  }
}

const btn = document.querySelector("#update");

updateDate();

btn.addEventListener("click", () => {
  updateDate();
});
