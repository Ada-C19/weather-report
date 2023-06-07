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


