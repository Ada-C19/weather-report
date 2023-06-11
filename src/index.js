// const { default: axios } = require("axios");

// Selecting elements
const temperatureDisplay = document.getElementById("tempValue");
const increaseButton = document.getElementById("increaseTempControl");
const decreaseButton = document.getElementById("decreaseTempControl");
const body = document.body;

const realTimeButton = document.getElementById("currentTempButton")
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
});

// end of wave 3

// Initial temperature and landscape
let temperature = 70;
let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";

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

// Initial setup
updateTemperature();
updateLandscape();


//listener
realTimeButton.addEventListener("click", function () {
  getLatLon();
})

const getLatLon = () => {
  axios
    .get("http://127.0.0.1:5000/location", {
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
      getWeather(longtitude, latitude)
    })
    .catch((error) => {
      console.log(error)
    });
};

const convertKelToFahren = (kelvin) => {
  // console.log(temperature)
  temperature = Math.floor((kelvin - 273.15) * 9/5 + 32)
  // console.log(temperature)
  updateTemperature()
  updateLandscape()
}

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
      kelvin = response.data.main.temp
      convertKelToFahren(kelvin)
      // console.log(response.data.main.temp)
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
