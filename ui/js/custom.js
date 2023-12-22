// Key: cfcaea0b0c884c728f953206232009

// current weather: 'http://api.weatherapi.com/v1/current.json?key=cfcaea0b0c884c728f953206232009&q=${cityName}&days=3&alerts=yes'

const getAllCities = async () => {
  console.log("test one");
  let cities = await fetch("http://localhost:3000/get-cities");
  let citiesParsed = await cities.json();
  console.log(citiesParsed);
  return citiesParsed;
};
getAllCities(); // This function is called when app first loads, you will call this function in your JavaScript file. You might call it inside of another function.

function checkSubmit(e) {
  if (e && e.keyCode == 13) {
    getWeather();
  }
}

let allCitiesSearched = [];

async function getWeather() {
  let cityNameUnfixed = document.getElementById("cityName").value;
  console.log(cityNameUnfixed);
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=cfcaea0b0c884c728f953206232009&q=${cityNameUnfixed}&days=7&alerts=yes`
  );
  let data = await response.json();
  console.log(data);
  document.getElementById("cityName").value = "";
  document.getElementById("query-form").style.display = "flex !important";
  document.getElementById("query-form").style.flexDirection = "row !important";
  document.getElementById("query-form").style.justifyContent =
    "space-between !important";
  document.getElementById("query-form").style.alignItems = "center !important";
  document.getElementById("results-container").style.opacity = 1;
  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  cityName = toTitleCase(cityNameUnfixed);
  console.log(cityName);
  allCitiesSearched.push(cityName);
  console.log(allCitiesSearched);
  let country = data.location.country;
  let currentTempF = data.current.temp_f;
  let currentTempC = data.current.temp_c;
  let unnecessaryComment = "";
  if (currentTempF >= 75) {
    unnecessaryComment = "hot";
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(library/hot.png)";
  } else if (currentTempF >= 45) {
    unnecessaryComment = "moderate";
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(library/moderate.png)";
  } else {
    unnecessaryComment = "cold";
    document.getElementsByTagName("body")[0].style.backgroundImage =
      "url(library/cold.jpeg)";
  }
  let currentHighF = data.forecast.forecastday[0].day.maxtemp_f;
  let currentHighC = data.forecast.forecastday[0].day.maxtemp_c;
  let currentLowF = data.forecast.forecastday[0].day.mintemp_f;
  let currentLowC = data.forecast.forecastday[0].day.mintemp_c;
  let currentPrecipitation =
    data.forecast.forecastday[0].day.daily_chance_of_rain;
  let tomorrowAverageF = data.forecast.forecastday[1].day.avgtemp_f;
  let tomorrowAverageC = data.forecast.forecastday[1].day.avgtemp_c;
  let tomorrowHighF = data.forecast.forecastday[1].day.maxtemp_f;
  let tomorrowHighC = data.forecast.forecastday[1].day.maxtemp_c;
  let tomorrowLowF = data.forecast.forecastday[1].day.mintemp_f;
  let tomorrowLowC = data.forecast.forecastday[1].day.mintemp_c;
  let tomorrowPrecipitation =
    data.forecast.forecastday[1].day.daily_chance_of_rain;
  let overmorrowAverageF = data.forecast.forecastday[2].day.avgtemp_f;
  let overmorrowAverageC = data.forecast.forecastday[2].day.avgtemp_c;
  let overmorrowHighF = data.forecast.forecastday[2].day.maxtemp_f;
  let overmorrowHighC = data.forecast.forecastday[2].day.maxtemp_c;
  let overmorrowLowF = data.forecast.forecastday[2].day.mintemp_f;
  let overmorrowLowC = data.forecast.forecastday[2].day.mintemp_c;
  let overmorrowPrecipitation =
    data.forecast.forecastday[2].day.daily_chance_of_rain;
  let followingMorrowAverageF = data.forecast.forecastday[3].day.avgtemp_f;
  let followingMorrowAverageC = data.forecast.forecastday[3].day.avgtemp_c;
  let followingMorrowHighF = data.forecast.forecastday[3].day.maxtemp_f;
  let followingMorrowHighC = data.forecast.forecastday[3].day.maxtemp_c;
  let followingMorrowLowF = data.forecast.forecastday[3].day.mintemp_f;
  let followingMorrowLowC = data.forecast.forecastday[3].day.mintemp_c;
  let followingMorrowPrecipitation =
    data.forecast.forecastday[3].day.daily_chance_of_rain;
  if (data.alerts.alert.length !== 0) {
    var alert = data.alerts.alert[0].desc.value;
  } else {
    var alert = "Snuffleupagus";
  }
  let day = new Date(data.location.localtime);
  let today = day.getDay();
  let highs = [
    data.forecast.forecastday[0].day.maxtemp_f,
    data.forecast.forecastday[1].day.maxtemp_f,
    data.forecast.forecastday[2].day.maxtemp_f,
    data.forecast.forecastday[3].day.maxtemp_f,
    data.forecast.forecastday[4].day.maxtemp_f,
    data.forecast.forecastday[5].day.maxtemp_f,
    data.forecast.forecastday[6].day.maxtemp_f,
  ];
  let highest = Math.max(...highs);
  let hottestDayNumber = 0;
  for (let snuffleupagus = 0; snuffleupagus < highs.length; snuffleupagus++) {
    if (highs[snuffleupagus] === highest) {
      hottestDayNumber = today + snuffleupagus;
    }
  }
  let hottestDay = "";
  if (hottestDayNumber === 0) {
    hottestDay = "Sunday";
  } else if (hottestDayNumber === 1) {
    hottestDay = "Monday";
  } else if (hottestDayNumber === 2) {
    hottestDay = "Tuesday";
  } else if (hottestDayNumber === 3) {
    hottestDay = "Wednesday";
  } else if (hottestDayNumber === 4) {
    hottestDay = "Thursday";
  } else if (hottestDayNumber === 5) {
    hottestDay = "Friday";
  } else {
    hottestDay = "Saturday";
  }
  document.getElementById("current").innerHTML = `<h1>Current Temp</h2>
    <h2>${cityName}, ${country}</h2>
    <h1>${currentTempF}° </h1>
    <p>Today's High: ${currentHighF}° </p>
    <p>Today's Low: ${currentLowF}° </p>
    <p>Chance of precipitation: ${currentPrecipitation}% </p>`;
  document.getElementById(
    "unnecessary-comment"
  ).innerHTML = `<h1>It's ${unnecessaryComment} today.</h1>`;
  document.getElementById("tomorrow").innerHTML = `<h1>Tomorrow</h1>
    <h3>Average Temp: ${tomorrowAverageF}° </h3>
    <p>Tomorrow's High: ${tomorrowHighF}° </p>
    <p>Tomorrow's Low: ${tomorrowLowF}° </p>
    <p>Chance of precipitation: ${tomorrowPrecipitation}% </hp`;
  document.getElementById("overmorrow").innerHTML = `<h1>Overmorrow</h1>
    <h3>Average Temp: ${overmorrowAverageF}° </h3>
    <p>Overmorrow's High: ${overmorrowHighF}° </p>
    <p>Overmorrow's Low: ${overmorrowLowF}° </p>
    <p>Chance of precipitation: ${overmorrowPrecipitation}% </p>`;
  document.getElementById(
    "following-morrow"
  ).innerHTML = `<h1>Following Morrow</h1>
    <h3>Average Temp: ${followingMorrowAverageF}° </h3>
    <p>Following Morrow's High: ${followingMorrowHighF}° </p>
    <p>Following Morrow's Low: ${followingMorrowLowF}° </p>
    <p>Chance of precipitation: ${followingMorrowPrecipitation}% </p>`;
  document.getElementById(
    "hottest"
  ).innerHTML = `<span id="hottestSpan"><h2>The hottest day this week will be ${hottestDay} with a high of ${highest}°</h2></span>`;
  if (alert != "Snuffleupagus") {
    document.getElementById(
      "alerts"
    ).innerHTML = `<h1>ALERT: ${data.alerts.alert[0].desc}</h1>`;
  } else {
    document.getElementById("alerts").style = "opacity: 0";
  }
  if (alert != "Snuffleupagus") {
    document.getElementById("alerts").style =
      "background-color: white; border: 20px solid red; flex-grow: 4; margin: 1rem; padding: 1rem";
  } else {
    document.getElementById("alerts").style = "opacity: 0";
  }
}
