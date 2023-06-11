// Selecting elements
const temperatureDisplay = document.getElementById('tempValue');
const increaseButton = document.getElementById('increaseTempControl');
const decreaseButton = document.getElementById('decreaseTempControl');
const body = document.body;

// wave 3
// Selecting elements
const cityNameInput = document.getElementById('cityNameInput');
const cityNameDisplay = document.getElementById('headerCityName');

// Function to update the city name
function updateCityName() {
  cityNameDisplay.textContent = cityNameInput.value;
}

// Event listener for input change
cityNameInput.addEventListener('input', updateCityName);

// Reset button event listener
const cityNameResetButton = document.getElementById('cityNameReset');
cityNameResetButton.addEventListener('click', function () {
  cityNameInput.value = '';
  updateCityName();
});

// end of wave 3

// Initial temperature and landscape
let temperature = 70;
let landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';

// Function to update the temperature display and color
function updateTemperature() {
  temperatureDisplay.textContent = temperature;
  
  if (temperature >= 80) {
    temperatureDisplay.style.color = 'red';
    body.style.backgroundColor = 'pink';
  } else if (temperature >= 70) {
    temperatureDisplay.style.color = 'orange';
    body.style.backgroundColor = 'lightyellow';
  } else if (temperature >= 60) {
    temperatureDisplay.style.color = 'yellow';
    body.style.backgroundColor = 'lightgreen';
  } else if (temperature >= 50) {
    temperatureDisplay.style.color = 'green';
    body.style.backgroundColor = 'lime';
  } else {
    temperatureDisplay.style.color = 'teal';
    body.style.backgroundColor = 'aqua';
  }
}

// Function to update the landscape
function updateLandscape() {
  if (temperature >= 80) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temperature >= 70) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temperature >= 60) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  
  // Display the updated landscape
  const landscapeElement = document.getElementById('landscape');
  landscapeElement.textContent = landscape;
}

// Initial setup
updateTemperature();
updateLandscape();

// Event listeners for temperature controls
increaseButton.addEventListener('click', function() {
  temperature++;
  updateTemperature();
  updateLandscape();
});

decreaseButton.addEventListener('click', function() {
  temperature--;
  updateTemperature();
  updateLandscape();
});
