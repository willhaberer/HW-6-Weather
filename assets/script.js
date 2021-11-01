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
var c1temp = document.querySelector("#c1temp");
var c2temp = document.querySelector("#c2temp");
var c3temp = document.querySelector("#c3temp");
var c4temp = document.querySelector("#c4temp");
var c5temp = document.querySelector("#c5temp");
var c1wind = document.querySelector("#c1wind");
var c2wind = document.querySelector("#c2wind");
var c3wind = document.querySelector("#c3wind");
var c4wind = document.querySelector("#c4wind");
var c5wind = document.querySelector("#c5wind");
var c1humidity = document.querySelector("#c1humidity");
var c2humidity = document.querySelector("#c2humidity");
var c3humidity = document.querySelector("#c3humidity");
var c4humidity = document.querySelector("#c4humidity");
var c5humidity = document.querySelector("#c5humidity");
var currentCity = "Atlanta";

//buttons
// var atlBtn = document.querySelector("#atlanta");
// atlBtn.addEventListener("click", function () {
//   currentCity = "Atlanta";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var ausBtn = document.querySelector("#austin");
// ausBtn.addEventListener("click", function () {
//   currentCity = "Austin";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var chiBtn = document.querySelector("#chicago");
// chiBtn.addEventListener("click", function () {
//   currentCity = "Chicago";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var denBtn = document.querySelector("#denver");
// denBtn.addEventListener("click", function () {
//   currentCity = "Denver";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var nshBtn = document.querySelector("#nashville");
// nshBtn.addEventListener("click", function () {
//   currentCity = "Nashville";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var orlBtn = document.querySelector("#orlando");
// orlBtn.addEventListener("click", function () {
//   currentCity = "Orlando";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
// var seaBtn = document.querySelector("#seattle");
// seaBtn.addEventListener("click", function () {
//   currentCity = "Seattle";
//   getWeather(currentCity);
//   update5DayForecast(currentCity);
// });
var searchBtn = document.querySelector("#search");
searchBtn.addEventListener("click", function () {
  var searchCity = document.getElementById("city-input");
  getWeather(searchCity.value);
  update5DayForecast(searchCity.value);
  handlePastSearch(searchCity.value);
});

// function citySearch() {
//   var searchCity = document.getElementById("city-input");
//   getWeather(searchCity.value);
//   update5DayForecast(searchCity.value);
//   handlePastSearch(searchCity.value);
// }

//Global Variables
var apiKey = "6af492900db892592abaa92efa28260e";
var todaysDate = moment().format;
var currentCity = "Atlanta";
// var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=";
// var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";
// var fullURL = requestURL + currentCity + urlAPI;

function getWeather(city) {
  currentCity = city;
  var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";
  var fullURL = requestURL + currentCity + urlAPI;

  $.ajax({
    url: fullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    cityInfo.textContent = city;
    temp.textContent = " " + Math.floor(response.main.temp) + "\xB0" + "F";
    wind.textContent = " " + response.wind.speed + " MPH";
    humidity.textContent = " " + response.main.humidity + "%";
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

function update5DayForecast(currentCity) {
  var fiveDayRequestURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
  var fiveDayAPIKey = "0c567f8a43f5aa7a347b1b6a12fca740";
  var appID = "&units=imperial&appid=";
  var fiveDayFullURL = fiveDayRequestURL + currentCity + appID + fiveDayAPIKey;
  $.ajax({
    url: fiveDayFullURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    c1temp.textContent =
      " " + Math.floor(response.list[0].main.temp) + "\xB0" + "F";
    c2temp.textContent =
      " " + Math.floor(response.list[1].main.temp) + "\xB0" + "F";
    c3temp.textContent =
      " " + Math.floor(response.list[2].main.temp) + "\xB0" + "F";
    c4temp.textContent =
      " " + Math.floor(response.list[3].main.temp) + "\xB0" + "F";
    c5temp.textContent =
      " " + Math.floor(response.list[4].main.temp) + "\xB0" + "F";
    c1wind.textContent = " " + response.list[0].wind.speed + " MPH";
    c2wind.textContent = " " + response.list[1].wind.speed + " MPH";
    c3wind.textContent = " " + response.list[2].wind.speed + " MPH";
    c4wind.textContent = " " + response.list[3].wind.speed + " MPH";
    c5wind.textContent = " " + response.list[4].wind.speed + " MPH";
    c1humidity.textContent = " " + response.list[0].main.humidity + "%";
    c2humidity.textContent = " " + response.list[1].main.humidity + "%";
    c3humidity.textContent = " " + response.list[2].main.humidity + "%";
    c4humidity.textContent = " " + response.list[3].main.humidity + "%";
    c5humidity.textContent = " " + response.list[4].main.humidity + "%";
  });
}
const searchArr = [];

function handlePastSearch(searchCity) {
  if (searchArr.length > 0) {
    $("#past-search").empty();
  }
  if (searchArr.length < 8) {
    searchArr.unshift(searchCity);
    for (let i = 0; i < searchArr.length; i++) {
      var buttons = $("<button>" + searchArr[i] + "</button>").click(
        function () {
          var searchCity = document.getElementById("city-input");
          getWeather(searchCity.value);
          update5DayForecast(searchCity.value);
          handlePastSearch(searchCity.value);
        }
      );
      buttons.addClass("city-button");
      buttons.appendTo("#past-search");
    }
  } else {
    searchArr.pop();
    searchArr.unshift(searchCity);
    for (let i = 0; i < searchArr.length - 1; i++) {
      var buttons = $("<button>" + searchArr[i] + "</button>").click(
        function () {
          var searchCity = document.getElementById("city-input");
          getWeather(searchCity.value);
          update5DayForecast(searchCity.value);
          handlePastSearch(searchCity.value);
        }
      );
      buttons.addClass("city-button");
      buttons.appendTo("#past-search");
    }
  }
}

getWeather(currentCity);
get5Days();
update5DayForecast(currentCity);
