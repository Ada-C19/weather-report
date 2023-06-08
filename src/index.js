"use strict";
// Global variables
let temperature = 70; // Initial temperature

// DOM elements
const temperatureElement = document.getElementById('temperature');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');

// Event listeners for the buttons
increaseBtn.addEventListener('click', increaseTemperature);
decreaseBtn.addEventListener('click', decreaseTemperature);

// Function to increase the temperature
function increaseTemperature() {
    temperature++;
    updateTemperatureDisplay();
}

// Function to decrease the temperature
function decreaseTemperature() {
    temperature--;
    updateTemperatureDisplay();
}

// Function to update the temperature display, change the text color, and update the landscape
function updateTemperatureDisplay() {
    temperatureElement.textContent = `${temperature}°F`;

    if (temperature >= 80) {
        temperatureElement.style.color = 'red';
        document.body.innerHTML = '<img src="styles/summer.jpeg" alt="Summer">';
    } else if (temperature >= 70 && temperature <= 79) {
        temperatureElement.style.color = 'orange';
        document.body.innerHTML = '<img src="styles/cloudy.jpeg" alt="Cloudy">';
    } else if (temperature >= 60 && temperature <= 69) {
        temperatureElement.style.color = 'yellow';
        document.body.innerHTML = '<img src="styles/rainy.jpeg" alt="Rainy">';
    } else if (temperature >= 50 && temperature <= 59) {
        temperatureElement.style.color = 'green';
        document.body.innerHTML = '<img src="styles/snowy.jpeg" alt="Snowy">';
    } else {
        temperatureElement.style.color = 'teal';
        document.body.innerHTML = '<img src="styles/autumn.jpeg" alt="Autumn">';
    }
}
