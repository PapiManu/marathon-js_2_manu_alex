const hour = document.querySelector("#horloge > p");
const hourAbbr = document.querySelector("#horloge > span");
const quote = document.querySelector("#p_height_page");
const authorQuote = document.querySelector("#span_height_page");
const city = document.querySelector("#position p");

const curentTimezoneTitle = document.querySelector("#left_1");
const curentTimezone = document.querySelector("#position_geographique");
const dayOfTheyearTitle = document.querySelector("#left_2");
const dayOfTheyear = document.querySelector("#jour_année");
const dayOfTheWeekTitle = document.querySelector("#right_1");
const dayOfTheWeek = document.querySelector("#jour_semaine");
const weekNumberTitle = document.querySelector("#right_2");
const weekNumber = document.querySelector("#semaine_année");


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
      console.log(data);
      // Will display time in 10:30:23 format
      //let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      let formattedTime = hours + ":" + minutes.substr(-2);
      let abbr = data.abbreviation;
      let continent = data.timezone;
      let dayOftheWeek = data.day_of_week;
      let dayOftheYear = data.day_of_year;
      let weekNumber = data.week_number;
      const continentContent = document.createTextNode(`${continent}`);
      const dayOftheWeekContent = document.createTextNode(`${dayOftheWeek}`);
      const dayOftheYearContent = document.createTextNode(`${dayOftheYear}`);
      const weekNumberContent = document.createTextNode(`${weekNumber}`);




      

      const time = document.createTextNode(`${formattedTime}`);
      const abbreviation = document.createTextNode(`${abbr}`);
      const curentTimezoneTitleContent
      const curentTimezoneContent
      const dayOfTheyearTitleContent
      const dayOfTheyearContent
      const dayOfTheWeekTitleContent
      const dayOfTheWeekContent
      const weekNumberTitleContent
      const weekNumbeContent


      hour.replaceChildren(time);
      hourAbbr.replaceChildren(abbreviation);



      curentTimezoneTitle.replaceChildren(); 
      curentTimezone.replaceChildren(); 
      dayOfTheyearTitle.replaceChildren(); 
      dayOfTheyear.replaceChildren(); 
      dayOfTheWeekTitle.replaceChildren(); 
      dayOfTheWeek.replaceChildren(); 
      weekNumberTitle.replaceChildren(); 
      weekNumber.replaceChildren(); 
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



//Api Localisation_____________________________________________________

fetch("https://api.quotable.io/random").then((response) =>
  response.json().then((dataQuote) => {
    let quoteAuthor = dataQuote.author;
    let quoteRandom = dataQuote.content;
    const quoteRandomText = document.createTextNode(`${quoteRandom}`);
    const quoteAuthorText = document.createTextNode(`${quoteAuthor}`);
    quote.appendChild(quoteRandomText);
    authorQuote.appendChild(quoteAuthorText);
  })
);
//_____________________________________________________________________
