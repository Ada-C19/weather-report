"use strict";

let current_temp = 72

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
        landscape.textContent = "⛄️⛄️🎁❄❄⛄️🦌❄🎁⛄️⛄️🦌🦌⛄️🎁"
    }
}

if (document.readyState !== "loading") {
    getTemp();
    getLandscape();
} else {
    document.addEventListener("DOMContentLoaded", getTemp);
    document.addEventListener("DOMContentLoaded", getLandscape);
}


