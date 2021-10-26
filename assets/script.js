//Dependencies
var cityInfo = document.querySelector("#city");
var temp = document.querySelector("#temp");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");

//Global Variables
var apiKey = "6af492900db892592abaa92efa28260e";
var todaysDate = moment().format;
var currentCity = "Atlanta";
var requestURL = "api.openweathermap.org/data/2.5/weather?q=";
var urlAPI = "&units=imperial&appid=6af492900db892592abaa92efa28260e";

function getWeather() {
  // fetch(api.openweathermap.org/data/2.5/weather?q=currentCity&appid=apiKey)

  $.ajax({
    url: requestURL + currentCity + "",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
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

getWeather();
get5Days();
cityInfo.textContent = currentCity;
