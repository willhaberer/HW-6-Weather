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
var currentCity = "Atlanta";
//buttons
var atlBtn = document.querySelector("#atlanta");
atlBtn.addEventListener("click", function () {
  currentCity = "Atlanta";
  getWeather(currentCity);
});
var ausBtn = document.querySelector("#austin");
ausBtn.addEventListener("click", function () {
  currentCity = "Austin";
  getWeather(currentCity);
});
var chiBtn = document.querySelector("#chicago");
chiBtn.addEventListener("click", function () {
  currentCity = "Chicago";
  getWeather(currentCity);
});
var denBtn = document.querySelector("#denver");
denBtn.addEventListener("click", function () {
  currentCity = "Denver";
  getWeather(currentCity);
});
var nshBtn = document.querySelector("#nashville");
nshBtn.addEventListener("click", function () {
  currentCity = "Nashville";
  getWeather(currentCity);
});
var orlBtn = document.querySelector("#orlando");
orlBtn.addEventListener("click", function () {
  currentCity = "Orlando";
  getWeather(currentCity);
});
var seaBtn = document.querySelector("#seattle");
seaBtn.addEventListener("click", function () {
  currentCity = "Seattle";
  getWeather(currentCity);
});
var searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", function () {
  var searchCity = document.getElementById("city-input");
  getWeather(searchCity.value);
  console.log("here is seach city " + searchCity.value);
});
//Global Variables
var apiKey = "6af492900db892592abaa92efa28260e";
var todaysDate = moment().format;
var currentCity = "Atlanta";
// var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=";
// var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";
// var fullURL = requestURL + currentCity + urlAPI;

var fiveDayRequestURL =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=";
var fiveDayAPIKey = "0c567f8a43f5aa7a347b1b6a12fca740";
var fiveDayCount = "&cnt=5&units=imperial";
var appID = "&appid=";
var fiveDayFullURL =
  fiveDayRequestURL + currentCity + fiveDayCount + appID + fiveDayAPIKey;

function getWeather(city) {
  currentCity = city;
  var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";
  var fullURL = requestURL + currentCity + urlAPI + apiKey;

  $.ajax({
    url: fullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    cityInfo.textContent = city;
    temp.textContent = " " + Math.floor(response.main.temp) + "\xB0" + "F";
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
  console.log("running 5 day functions");
  $.ajax({
    url: fiveDayFullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
  });
}

getWeather(currentCity);
get5Days();
update5DayForecast();
