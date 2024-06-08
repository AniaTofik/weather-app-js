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
  const city = input.value || "Toronto";
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios.get(URL).then((res) => {
    console.log(res.data);
    const temp = res.data.main.temp;
    const hum = res.data.main.humidity;
    const status = res.data.weather[0];

    cityName.textContent = res.data.name;
    temperature.textContent = temp.toFixed(0) + "°C";
    humidity.textContent = hum + "%";
    weather.textContent = status.main;
  });
};
button.addEventListener("click", getWeather);
