const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=";

const API_KEY = "&appid=02e3b8e16ca9ab74967cb49577026069";
const API_UNITS = "&units=metric";
