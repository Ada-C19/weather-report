"use strict";
// Global variables
let temperature = 70; // Initial temperature

// DOM elements
const temperatureElement = document.getElementById('temperature');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const landscapeImg = document.getElementById('landscape-img');

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
        landscapeImg.src = 'styles/sunny1.jpeg';
        landscapeImg.alt = 'Sunny';
        emojiContainer.textContent = '☀️☀️🌤️👙👙🕶️🧴🧴☀️☀️🌞🌞🌻🌻😎🩱🩱🩳☀️☀️😎';
    } else if (temperature >= 70 && temperature <= 79) {
        temperatureElement.style.color = 'grey';
        landscapeImg.src = 'styles/cloudy.jpeg';
        landscapeImg.alt = 'Cloudy';
        emojiContainer.textContent = '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☹️☹️☹️☹️⛆⛆⛆⛆⛆☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️';
    } else if (temperature >= 60 && temperature <= 69) {
        temperatureElement.style.color = 'indigo';
        landscapeImg.src = 'styles/rainy.jpeg';
        landscapeImg.alt = 'Rainy';
        emojiContainer.textContent = '☔️🌧️⛈️⛈️🌦️☔️☔️☔︎⛆⛈🌧️⛈️⛈️💧💧☔️☔️💧💧🌧️🌧️';
    } else if (temperature >= 50 && temperature <= 59) {
        temperatureElement.style.color = 'orange';
        landscapeImg.src = 'styles/autumn.jpeg';
        landscapeImg.alt = 'Snowy';
        emojiContainer.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️';
    } else {
        temperatureElement.style.color = 'teal';
        landscapeImg.src = 'styles/snowy.jpeg';
        landscapeImg.alt = 'Autumn';
        emojiContainer.textContent = '🍂🍂🍁🍁🍃🎃🎃🤧🤧☁️☁️🧦🧦🧣🧣🧥🧥🍁🍁';
    }
}
