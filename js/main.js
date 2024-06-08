const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";

const API_KEY = "&appid=02e3b8e16ca9ab74967cb49577026069";
const API_UNITS = "&units=metric";

const getWeather = () => {
  const city = input.value;
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(URL)
    .then((res) => {
      const temp = res.data.main.temp;
      const hum = res.data.main.humidity;
      const status = res.data.weather[0];

      cityName.textContent = res.data.name;
      temperature.textContent = temp.toFixed(0) + "°C";
      humidity.textContent = hum + "%";
      weather.textContent = status.main;

      warning.textContent = "";
      input.value = "";

      if (status.id <= 232) {
        photo.setAttribute("src", "../img/thunderstorm.png");
      } else if (status.id > 232 && status.id <= 321) {
        photo.setAttribute("src", "../img/drizzle.png");
      } else if (status.id >= 500 && status.id <= 531) {
        photo.setAttribute("src", "../img/rain.png");
      } else if (status.id >= 600 && status.id <= 622) {
        photo.setAttribute("src", "../img/ice.png");
      } else if (status.id >= 701 && status.id <= 781) {
        photo.setAttribute("src", "../img/fog.png");
      } else if ((status.id = 800)) {
        photo.setAttribute("src", "../img/sun.png");
      } else if (status.id >= 801) {
        photo.setAttribute("src", "../img/cloud.png");
      } else {
        photo.setAttribute("src", "../img/unknown.png");
      }
    })
    .catch(() => (warning.textContent = "Wpisz poprawną nazwę miasta!"));
};

const clickEnter = (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
};

input.addEventListener("keyup", clickEnter);
button.addEventListener("click", getWeather);
