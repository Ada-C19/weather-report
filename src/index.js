// const { default: axios } = require("axios");

// Selecting elements
const temperatureDisplay = document.getElementById("tempValue");
const increaseButton = document.getElementById("increaseTempControl");
const decreaseButton = document.getElementById("decreaseTempControl");
const body = document.body;
const realTimeButton = document.getElementById("currentTempButton");
const selectedSkyCondition = document.getElementById("skySelect");
// wave 3
// Selecting elements
const cityNameInput = document.getElementById("cityNameInput");
const cityNameDisplay = document.getElementById("headerCityName");

// Function to update the city name
function updateCityName() {
  cityNameDisplay.textContent = cityNameInput.value;
}

// Event listener for input change
cityNameInput.addEventListener("input", updateCityName);

// Reset button event listener
const cityNameResetButton = document.getElementById("cityNameReset");
cityNameResetButton.addEventListener("click", function () {
  cityNameInput.value = "";
  updateCityName();
  selectedSkyCondition.value = "";
  temperature = 70;
  updateTemperature();
  updateSky();
  updateLandscape();
  
});

// end of wave 3

// Initial temperature and landscape
let temperature = 70;
let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
let sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";

// Function to update the temperature display and color
function updateTemperature() {
  temperatureDisplay.textContent = temperature;

  if (temperature >= 80) {
    temperatureDisplay.style.color = "red";
    body.style.backgroundColor = "pink";
  } else if (temperature >= 70) {
    temperatureDisplay.style.color = "orange";
    body.style.backgroundColor = "lightyellow";
  } else if (temperature >= 60) {
    temperatureDisplay.style.color = "yellow";
    body.style.backgroundColor = "lightgreen";
  } else if (temperature >= 50) {
    temperatureDisplay.style.color = "green";
    body.style.backgroundColor = "lime";
  } else {
    temperatureDisplay.style.color = "teal";
    body.style.backgroundColor = "aqua";
  }
}

// Function to update the landscape
function updateLandscape() {
  if (temperature >= 80) {
    landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (temperature >= 70) {
    landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (temperature >= 60) {
    landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else {
    landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }

  // Display the updated landscape
  const landscapeElement = document.getElementById("landscape");
  landscapeElement.textContent = landscape;
}

// Function to update the sky
function validateSky(skyCondition) {
  // console.log(skyCondition);
  // console.log(sky);
  if (skyCondition == "Clear") {
    selectedSkyCondition.value = "sunny";
  } else if (skyCondition == "Clouds") {
    selectedSkyCondition.value = "cloudy";
  } else if (
    skyCondition == "Thunderstorm" ||
    skyCondition == "Rain" ||
    skyCondition == "Drizzle"
  ) {
    selectedSkyCondition.value = "rainy";
  } else if (skyCondition == "Snow") {
    selectedSkyCondition.value = "snowy";
  }
  // console.log(sky);

  updateSky();
}

function updateSky() {
  if (selectedSkyCondition.value == "sunny") {
    sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  } else if (selectedSkyCondition.value == "cloudy") {
    sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  } else if (selectedSkyCondition.value == "rainy") {
    sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (selectedSkyCondition.value == "snowy") {
    sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
  } else {
    sky = "☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ☁️ ";
  }
  // Display the updated sky
  const skyElement = document.getElementById("sky");
  skyElement.textContent = sky;
}

// Initial setup
updateTemperature();
updateLandscape();
// validateSky();

//listener
realTimeButton.addEventListener("click", function () {
  getLatLon();
});

selectedSkyCondition.addEventListener("click", function () {
  updateSky();
});

// const base_url = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:5000"
const base_url = "https://weather-report-server-j4vl.onrender.com"
const getLatLon = () => {
  axios
    .get(`${base_url}/location`, {
      params: {
        q: cityNameInput.value,
      },
    })
    .then((response) => {
      // console.log(response.data)
      // console.log(response.data[0].lat);
      let latitude = response.data[0].lat;
      // console.log(response.data[0].lon);
      let longtitude = response.data[0].lon;
      getWeather(longtitude, latitude);
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertKelToFahren = (kelvin) => {
  // console.log(temperature)
  temperature = Math.floor(((kelvin - 273.15) * 9) / 5 + 32);
  // console.log(temperature)
  updateTemperature();
  updateLandscape();
  // validateSky();
};

const getWeather = (long, lati) => {
  axios
    .get("http://127.0.0.1:5000/weather", {
      params: {
        lon: long,
        lat: lati,
      },
    })
    .then((response) => {
      // console.log(response);
      kelvin = response.data.main.temp;
      convertKelToFahren(kelvin);
      // console.log(response.data.weather[0].main);
      skyCondition = response.data.weather[0].main;
    })
    .then(() => {
      validateSky(skyCondition);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Event listeners for temperature controls
increaseButton.addEventListener("click", function () {
  temperature++;
  updateTemperature();
  updateLandscape();
});

decreaseButton.addEventListener("click", function () {
  temperature--;
  updateTemperature();
  updateLandscape();
});
