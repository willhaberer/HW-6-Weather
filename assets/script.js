//Dependencies
var cityInfo = document.querySelector("#city");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");

//Global Variables
var apiKey = "6af492900db892592abaa92efa28260e";
var todaysDate = moment().format;
var currentCity = "Atlanta";
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";
var fullURL = requestURL + currentCity + urlAPI;

var fiveDayRequestURL =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=";
var fiveDayAPIKey = "26d8cd665198a335a455e347f59024fc";
var fiveDayCount = "&cnt=5";
var fiveDayFullURL =
  fiveDayRequestURL + currentCity + fiveDayCount + fiveDayAPIKey;

function getWeather() {
  $.ajax({
    url: fullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    temp.textContent = " " + Math.floor(response.main.temp);
    wind.textContent = " " + response.wind.speed + " MPH";
    humidity.textContent = " " + response.main.humidity + " %";
  });
}

function get5Days() {
  for (var i = 1; i < 6; i++) {
    if (i === 1) {
      c1.textContent = moment().add(i, "days").format("MM/DD/YYYY");
    } else if (i === 2) {
      c2.textContent = moment().add(i, "days").format("MM/DD/YYYY");
    } else if (i === 3) {
      c3.textContent = moment().add(i, "days").format("MM/DD/YYYY");
    } else if (i === 4) {
      c4.textContent = moment().add(i, "days").format("MM/DD/YYYY");
    } else if (i === 5) {
      c5.textContent = moment().add(i, "days").format("MM/DD/YYYY");
    }
  }
}

function update5DayForecast() {
  $.ajax({
    url: fiveDayFullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

getWeather();
get5Days();
update5DayForecast();
cityInfo.textContent = currentCity;
