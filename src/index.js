"use strict";
// Global variables
let temperature = 70; // Initial temperature
let emoji = "";
let sky = "";
let skyEmoji = "";

// DOM elements
const temperatureElement = document.getElementById('temperature');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const landscapeImg = document.getElementById('landscape-img');
const emojiElement = document.getElementById('emoji');
const cityElement = document.getElementById('city');
const skyElement = document.getElementById('sky');
const skyEmojiElement = document.getElementById('skyEmoji');

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
        emojiElement.textContent = '☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️🏝️🥵🌞';
        landscapeImg.src = 'styles/sunny1.jpeg';
        landscapeImg.alt = 'Sunny';
    } else if (temperature >= 70 && temperature <= 79) {
        temperatureElement.style.color = 'grey';
        emojiElement.textContent = '🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️';
        landscapeImg.src = 'styles/cloudy.jpeg';
        landscapeImg.alt = 'Cloudy';
    } else if (temperature >= 60 && temperature <= 69) {
        temperatureElement.style.color = 'indigo';
        emojiElement.textContent = '☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈';
        landscapeImg.src = 'styles/rainy.jpeg';
        landscapeImg.alt = 'Rainy';
    } else if (temperature >= 50 && temperature <= 59) {
        temperatureElement.style.color = 'orange';
        emojiElement.textContent = '🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️';
        landscapeImg.src = 'styles/autumn.jpeg';
        landscapeImg.alt = 'Autumn';
    } else {
        temperatureElement.style.color = 'teal';
        emojiElement.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️';
        landscapeImg.src = 'styles/snowy.jpeg';
        landscapeImg.alt = 'Snowy';
    }
}

function updateSkyDisplay() {
    // skyElement.textContent = sky;

    if (sky = "Sunny") {
        skyEmojiElement.textContent = '🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️';

    } else if (sky === "cloudy") {
        skyEmojiElement.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️🌤 ☁️ ☁️☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️☁️☁️☁️ ☁️ 🌤 ☁️☁️☁️☁️🌤';

    } else if (sky === "rainy") {
        skyEmojiElement.textContent = '🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️';
        
    } else if (sky === "snowy") {
        skyEmojiElement.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️❄️';
    }
}
