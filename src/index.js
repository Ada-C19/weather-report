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

const button3 = document.getElementById("sky_button");
button3.addEventListener("click", () => {
    sky_dropdown.classList.toggle("show")
})

const sunnyWeather = document.getElementById("sunny");
sunnyWeather.addEventListener("click", () => {
    sky = "sunny";
    getSky();
    sky_dropdown.classList = ("sky_dropdown")
})

const cloudyWeather = document.getElementById("cloudy");
cloudyWeather.addEventListener("click", () => {
    sky = "cloudy";
    getSky();
    sky_dropdown.classList = ("sky_dropdown")
})

const rainyWeather = document.getElementById("rainy");
rainyWeather.addEventListener("click", () => {
    sky = "rainy";
    getSky();
    sky_dropdown.classList = ("sky_dropdown")
})

const snowyWeather = document.getElementById("snowy");
snowyWeather.addEventListener("click", () => {
    sky = "snowy";
    getSky();
    sky_dropdown.classList = ("sky_dropdown")
})

const getSky = () => {
    const sky_element = document.getElementById("sky");
    if (sky === "sunny") {
        sky_element.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (sky === "cloudy") {
        sky_element.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (sky === "rainy") {
        sky_element.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (sky === "snowy") {
        sky_element.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    } else {
        sky_element.textContent = ""
    }
}


if (document.readyState !== "loading") {
    getTemp();
    getLandscape();
    getSky();
} else {
    document.addEventListener("DOMContentLoaded", getTemp);
    document.addEventListener("DOMContentLoaded", getLandscape);
    document.addEventListener("DOMContentLoaded", getSky);
}


