const hour = document.querySelector("#horloge > p");
const hourAbbr = document.querySelector("#horloge > span");
const quote = document.querySelector("#p_height_page");
const authorQuote = document.querySelector("#span_height_page");
const city = document.querySelector("#position p");
const cont = document.querySelector("body");
const curentTimezoneTitle = document.querySelector("#left_1");
const curentTimezone = document.querySelector("#position_geographique");
const dayOfTheyearTitle = document.querySelector("#left_2");
const dayOfTheyear = document.querySelector("#jour_année");
const dayOfTheWeekTitle = document.querySelector("#right_1");
const dayOfTheWeek = document.querySelector("#jour_semaine");
const weekNumberTitle = document.querySelector("#right_2");
const weekNumber = document.querySelector("#semaine_année");
const more = document.querySelector(".button-look");
const divMore = document.querySelector(".more-transition");
const divTop = document.querySelector(".height_page");
const buttonText = document.querySelector(".button-look > p > button");
const buttonLogo = document.querySelector(".img-fleche");
const info = document.querySelector(".info-grid");
const refresh = document.querySelector(".button_refresh");
const messageGently = document.querySelector("#messageGently");
const logoGently = document.querySelector("#meteo_img > p > img");
const buttonMore = document.querySelector("#button_more");
const zoneMore  = document.querySelector('.more')

//hover du bouton more_________________________________________

buttonMore.addEventListener("mouseenter", () => {
  buttonLogo.style.fill = "grey";
});
buttonMore.addEventListener("mouseout", () => {
  buttonLogo.style.fill = "black";
});
//______________________________________________________________

i = 0;
more.addEventListener("click", () => {
  i++;
  more.classList.toggle("active-button");
  divTop.classList.toggle("active-button");
  divMore.classList.toggle("active-button");
  info.classList.toggle("active-button");
  buttonLogo.classList.toggle("active-button");
  if (i % 2 !== 0) {
    buttonText.replaceChildren("LESS");
  } else {
    buttonText.replaceChildren("MORE");
  }
});

//Api Heures, temps et lieu_________________________________________

function timeSet() {
  fetch("http://worldtimeapi.org/api/ip").then((response) =>
    response.json().then((data) => {
      let unix_timestamp = data.unixtime;
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();
      console.log(hours);
      // Will display time in 10:30:23 format
      //let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      let formattedTime = hours + ":" + minutes.substr(-2);
      const continentContent = document.createTextNode(`${data.timezone}`);
      const time = document.createTextNode(`${formattedTime}`);
      const abbreviation = document.createTextNode(`${data.abbreviation}`);
      const curentTimezoneContent = document.createTextNode(`${data.timezone}`);
      const dayOfTheyearContent = document.createTextNode(
        `${data.day_of_year}`
      );
      const dayOfTheWeekContent = document.createTextNode(
        `${data.day_of_week}`
      );
      const weekNumberContent = document.createTextNode(`${data.week_number}`);
      hour.replaceChildren(time);
      hourAbbr.replaceChildren(abbreviation);
      curentTimezone.replaceChildren(curentTimezoneContent);
      dayOfTheyear.replaceChildren(dayOfTheyearContent);
      dayOfTheWeek.replaceChildren(dayOfTheWeekContent);
      weekNumber.replaceChildren(weekNumberContent);

      if (hours >= 05 && hours < 12) {
        console.log("it is the night");
        messageGently.replaceChildren("GOOD MORNING, IT’S CURRENTLY");
        logoGently.src = "/assets/desktop/icon-moon.svg";
        cont.style.backgroundImage =
          "url(/assets/desktop/bg-image-daytime.jpg)";
          zoneMore.classList.add('more_night')

      } else if (hours >= 12 && hours < 17) {
        console.log("it is the day");
        messageGently.replaceChildren("GOOD AFTERNOON, IT’S CURRENTLY");
        logoGently.src = "/assets/desktop/icon-sun.svg";
        cont.style.backgroundImage =
          "url(/assets/desktop/bg-image-daytime.jpg)";
      } else {
        messageGently.replaceChildren("GOOD EVENING, IT’S CURRENTLY");
        logoGently.src = "/assets/desktop/icon-moon.svg";
        cont.style.backgroundImage =
          "url(/assets/desktop/bg-image-nighttime.jpg)";
      }
    })
  );
}

setInterval(() => {
  timeSet();
}, 1000);
//_____________________________________________________________________

//Api Localisation_____________________________________________________

fetch("https://geolocation-db.com/json/").then((response) =>
  response.json().then((dataLocalisation) => {
    // let timeZone = data.timezone

    const timeZoneText = document.createTextNode(
      `${dataLocalisation.city},${dataLocalisation.country_code}`
    );
    city.replaceChildren(timeZoneText);
  })
);
//_____________________________________________________________________

//Api Citation_____________________________________________________
function refreshButton() {
  fetch("https://api.quotable.io/random").then((response) =>
    response.json().then((dataQuote) => {
      let quoteAuthor = dataQuote.author;
      let quoteRandom = dataQuote.content;
      const quoteRandomText = document.createTextNode(`${quoteRandom}`);
      const quoteAuthorText = document.createTextNode(`${quoteAuthor}`);
      quote.replaceChildren(quoteRandomText);
      authorQuote.replaceChildren(quoteAuthorText);
    })
  );
}
refreshButton();
refresh.addEventListener("click", () => {
  refreshButton();
});

//_____________________________________________________________________
