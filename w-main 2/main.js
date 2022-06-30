/*jslint browser:true */
"use strict";

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open(
  "GET",
  "//api.openweathermap.org/data/2.5/weather?zip=10001,us&appid=79d79c2ff2788a39e63dd665f04cf187&units=imperial",
  true
);
weatherConditions.responseType = "text";
weatherConditions.send(null);

weatherConditions.onload = function () {
  if (weatherConditions.status === 200) {
    cObj = JSON.parse(weatherConditions.responseText);
    //console.log(cObj);
    document.getElementById("location").innerHTML = cObj.name;
    document.getElementById("weather").innerHTML = cObj.weather[0].description;
    document.getElementById("temperature").innerHTML = cObj.main.temp;
    document.getElementById("desc").innerHTML = "Wind Speed " + cObj.wind.speed;
  } //end if
}; //end function

// GET THE FORECARST
weatherForecast.open(
  "GET",
  "//api.openweathermap.org/data/2.5/forecast?zip=10001,us&appid=79d79c2ff2788a39e63dd665f04cf187&units=imperial",
  true
);
weatherForecast.responseType = "text";
weatherForecast.send();

weatherForecast.onload = function () {
  if (weatherForecast.status === 200) {
    fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);

    var date_raw = fObj.list[0].dt_txt;
    date_raw = date_raw.substring(5, 11);
    document.getElementById("r1c1").innerHTML = date_raw;

    var iconcode = fObj.list[0].weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById("r1c2").scr = icon_path;
    document.getElementById("r1c3").innerHTML =
      fObj.list[0].main.temp_min + "&deg;";
    document.getElementById("r1c4").innerHTML =
      fObj.list[0].main.temp_max + "&deg;";

    var date_raw = fObj.list[8].dt_txt;
    date_raw = date_raw.substring(5, 11);
    document.getElementById("r2c1").innerHTML = date_raw;

    var iconcode = fObj.list[8].weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById("r2c2").scr = icon_path;
    document.getElementById("r2c3").innerHTML =
      fObj.list[8].main.temp_min + "&deg;";
    document.getElementById("r2c4").innerHTML =
      fObj.list[8].main.temp_max + "&deg;";

    var date_raw = fObj.list[16].dt_txt;
    date_raw = date_raw.substring(5, 11);
    document.getElementById("r3c1").innerHTML = date_raw;

    var iconcode = fObj.list[16].weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById("r3c2").scr = icon_path;
    document.getElementById("r3c3").innerHTML =
      fObj.list[16].main.temp_min + "&deg;";
    document.getElementById("r3c4").innerHTML =
      fObj.list[16].main.temp_max + "&deg;";
  } //end if
}; //end function
