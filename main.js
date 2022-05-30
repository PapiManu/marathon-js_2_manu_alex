const hour = document.querySelector("#horloge > p");
const hourAbbr = document.querySelector("#horloge > span");
const quote = document.querySelector("#p_height_page");
const authorQuote = document.querySelector("#span_height_page");
const city = document.querySelector("#position p");

const cont =document.querySelector("body");
const curentTimezoneTitle = document.querySelector("#left_1");
const curentTimezone = document.querySelector("#position_geographique");
const dayOfTheyearTitle = document.querySelector("#left_2");
const dayOfTheyear = document.querySelector("#jour_année");
const dayOfTheWeekTitle = document.querySelector("#right_1");
const dayOfTheWeek = document.querySelector("#jour_semaine");
const weekNumberTitle = document.querySelector("#right_2");
const weekNumber = document.querySelector("#semaine_année");
const more  = document.querySelector("#button");
const divMore = document.querySelector('.more')
const divTop = document.querySelector('.height_page')
const buttonText = document.querySelector('#button >p > button')

console.log(buttonText);
more.addEventListener('click', () => {
divTop.classList.toggle('active-button')
  divMore.classList.toggle('active-button')
  buttonText.replaceChildren('LESS')
})



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
      
      
     
      const continentContent = document.createTextNode(`${ data.timezone}`);
     
      const time = document.createTextNode(`${formattedTime}`);
      const abbreviation = document.createTextNode(`${data.abbreviation}`);

       const curentTimezoneContent=document.createTextNode(`${data.timezone}`)
       const dayOfTheyearContent=document.createTextNode(`${data.day_of_year}`)
       const dayOfTheWeekContent=document.createTextNode(`${data.day_of_week}`)
       const weekNumberContent=document.createTextNode(`${data.week_number}`)


      hour.replaceChildren(time);
      hourAbbr.replaceChildren(abbreviation);



      curentTimezone.replaceChildren(curentTimezoneContent); 
      dayOfTheyear.replaceChildren(dayOfTheyearContent); 
      dayOfTheWeek.replaceChildren(dayOfTheWeekContent); 
      weekNumber.replaceChildren(weekNumberContent); 
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
