"use strict";

let current_temp = 72;
let sky = "";

const getTemp = () => {
    const temperature = document.getElementById("temp");
    temperature.textContent = current_temp;
    if (current_temp >= 80) {
        temperature.className = "hot"
    } else if (current_temp >= 70) {
        temperature.className = "warm"
    } else if (current_temp >= 60) {
        temperature.className = "medium"
    } else if (current_temp >= 50) {
        temperature.className = "cool"
    } else {
        temperature.className = "cold"
    }
}

const button1 = document.getElementById("increase_temperature");
button1.addEventListener("click", () => {
    current_temp = current_temp + 1;
    getTemp();
    getLandscape();
});

const button2 = document.getElementById("decrease_temperature");
button2.addEventListener("click", () => {
    current_temp = current_temp - 1;
    getTemp();
    getLandscape();
});

const getLandscape = () => {
    const landscape = document.getElementById("landscape");
    if (current_temp >= 80) {
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (current_temp >= 70) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (current_temp >= 60) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (current_temp >= 50) {
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else {
        landscape.textContent = "⛄️⛄️🎁🎿🎿⛄️🦌🎿🎁⛄️⛄️🦌🦌⛄️🎁"
    }
}

const skyDropdown = document.getElementById("sky_dropdown");

// add click event listeners for each sky option
skyDropdown.addEventListener("click", (event) => {
    if (event.target.tagName === 'A') {
        sky = event.target.id;
        getSky();
    }
});

const getSky = () => {
    const skyElement = document.getElementById('sky');
    switch (sky) {
        case 'sunny':
            skyElement.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
            break;
        case 'cloudy':
            skyElement.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
            break;
        case 'rainy':
            skyElement.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
            break;
        case 'snowy':
            skyElement.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
            break;
        default:
            skyElement.textContent = '';
            break;
    }
}

const skyButton = document.getElementById("sky_button");

skyButton.addEventListener("click", () => {
    if (skyDropdown.classList.contains('show')) {
        skyDropdown.classList.remove('show');
    } else {
        skyDropdown.classList.add('show');
    }
});

skyDropdown.addEventListener("click", (event) => {
    if (event.target.tagName === 'A') {
        sky = event.target.id;
        getSky();
        skyDropdown.classList.remove('show'); 
    }
});
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");

cityInput.addEventListener("input", (event) => {
    cityName.textContent = event.target.value;
});

if (document.readyState !== "loading") {
    getTemp();
    getLandscape();
    getSky();
} else {
    document.addEventListener("DOMContentLoaded", getTemp);
    document.addEventListener("DOMContentLoaded", getLandscape);
    document.addEventListener("DOMContentLoaded", getSky);
}






