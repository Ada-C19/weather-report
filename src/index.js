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


const getSky = () => {
    const skyElement = document.getElementById('sky');
    const skyChoice = document.getElementById('sky-select').value
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

document.getElementById('sky-select').addEventListener('change', function() {
    sky = this.value; // this line will set the sky value to the selected option
    getSky(); 
});

const button3 = document.getElementById("get_real_temp");
button2.addEventListener("click", () => {
    getLocation()
});

const axios = require("axios");
const locationAPI = "http://127.0.0.1:5000/location";
const weatherAPI = "http://127.0.0.1:5000/weather";

const getLocation = (query) => {
    let lat, lon; axios.get(locationAPI,
        {
            params: {
                q: query
            }
        })
        .then((response) => {
            lat = response.data[0]["lat"]
            lon = response.data[0]["lon"]
            getWeather(lat, lon)
        })
        .catch((error) => {
            console.log('cannot find city')
        })
}

const getWeather = (lat, lon) => {
    axios.get(weatherAPI, {
        params: {
            lat: lat,
            lon: lon
        }
    })
    .then ((response) => {
        current_temp = response.data[current][temp]
        getTemp()
    })
    . catch((error) => {
        console.log('error finding weather')
    })
}




