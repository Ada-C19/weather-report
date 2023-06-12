'use strict';

// Define the initial temperature in Fahrenheit
let temperature = 70;

// Get the temperature display element
const temperatureDisplay = document.getElementById('tempValue');

// Get the landscape display element
const landscapeDisplay = document.getElementById('landscape');

// Function to update the temperature display
function updateTemperatureDisplay() {
  temperatureDisplay.textContent = temperature + '°F';
  
  if (temperature >= 80) {
    temperatureDisplay.style.color = 'red';
  } else if (temperature >= 70) {
    temperatureDisplay.style.color = 'orange';
  } else if (temperature >= 60) {
    temperatureDisplay.style.color = 'yellow';
  } else if (temperature >= 50) {
    temperatureDisplay.style.color = 'green';
  } else {
    temperatureDisplay.style.color = 'teal';
  }
}


// Function to update the landscape display
function updateLandscapeDisplay() {
  let landscape = '';

  if (temperature >= 80) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temperature >= 70) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temperature >= 60) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }

  landscapeDisplay.textContent = landscape;
}

// Function to handle increase temperature button click
function increaseTemperature() {
  temperature++;
  updateTemperatureDisplay();
  updateLandscapeDisplay();
}

// Function to handle decrease temperature button click
function decreaseTemperature() {
  temperature--;
  updateTemperatureDisplay();
  updateLandscapeDisplay();
}

// Add event listeners to the increase and decrease temperature controls
const increaseControl = document.getElementById('increaseTempControl');
increaseControl.addEventListener('click', increaseTemperature);

const decreaseControl = document.getElementById('decreaseTempControl');
decreaseControl.addEventListener('click', decreaseTemperature);

// Initial display update
updateTemperatureDisplay();
updateLandscapeDisplay();

//Wave 3
// Get the city name display element
const cityNameDisplay = document.getElementById('headerCityName');

// Get the city name input element
const cityNameInput = document.getElementById('cityNameInput');

// Function to update the city name display
function updateCityNameDisplay() {
  cityNameDisplay.textContent = cityNameInput.value;
}

// Add event listener to the city name input element
cityNameInput.addEventListener('input', updateCityNameDisplay);

// Initial display update
updateCityNameDisplay();

//Wave 5
// Get the sky display element
const skyDisplay = document.getElementById('sky');

// Function to update the sky display
function updateSkyDisplay() {
  const selectedSky = skySelect.value;
  let sky = '';

  if (selectedSky === 'sunny') {
    sky = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (selectedSky === 'cloudy') {
    sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (selectedSky === 'rainy') {
    sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (selectedSky === 'snowy') {
    sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }

  skyDisplay.textContent = sky;
}

// Add event listener to the sky select element
const skySelect = document.getElementById('skySelect');
skySelect.addEventListener('change', updateSkyDisplay);

// Initial display update
updateSkyDisplay();

//Wave 6
// Define the resetCityName function
function resetCityName() {
    cityNameInput.value = 'Austin'; // Set the input value to blank
    updateCityNameDisplay(); // Update the city name display
  }
  
  // Get the reset button element
  const resetButton = document.getElementById('cityNameReset');
  
  // Add event listener to the reset button
  cityNameReset.addEventListener('click', resetCityName);
  
  // Initial display update
  updateCityNameDisplay();

// Wave 4: Calling APIs
let temp;

const getLatLon = (cityName) => {
    return axios.get("http://localhost:5000/location", { params: { q: cityName } });
  };
  
  const getTemp = (latLonData) => {
    const lat = latLonData.lat;
    const lon = latLonData.lon;
    return axios.get("http://localhost:5000/weather", { params: { lat, lon } });
  };
  

    const publishTempData = (tempData) => {
    const realTemp = tempData.main.temp;
    const farTemp = Math.round((realTemp - 273.15) * 1.8 + 32);
    temperature = farTemp; // Update the global temperature variable
    updateTemperatureDisplay(temperature); // Pass the temperature to the function
    updateLandscapeDisplay(temperature); // Pass the temperature to the function
  };
    
        const getTempForCity = (cityName) => {
            return getLatLon(cityName)
              .then((response) => {
                console.log("LatLon Data:", response.data[0]); // Log the received latLonData
                return getTemp(response.data[0]);
              })
              .then((response) => {
                console.log("Temperature Data:", response.data); // Log the received temperature data
                return publishTempData(response.data);
              })
              .catch((err) => console.log(err));
          };
  
  const realTimeButton = document.querySelector("#currentTempButton");
  realTimeButton.addEventListener("click", () => {
    const cityName = document.getElementById("cityNameInput").value;
    getTempForCity(cityName);
  });
  
    const updateTemp = (temperature) => {
        const tempElement = document.getElementById("tempValue");
        tempElement.innerText = `Temperature: ${temperature}°F`;
    };