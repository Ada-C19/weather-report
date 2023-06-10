"use strict";

let currentTemp = 72;
document.addEventListener("DOMContentLoaded", function() {

let current_temp = 72;
let sky = "";
let defaultCityName = "What city are you searching for?";


function getTemp() {
    const temperature = document.getElementById("temp");
    temperature.textContent = currentTemp;
    if (currentTemp >= 80) {
        temperature.className = "hot";
    } else if (currentTemp >= 70) {
        temperature.className = "warm";
    } else if (currentTemp >= 60) {
        temperature.className = "medium";
    } else if (currentTemp >= 50) {
        temperature.className = "cool";
    } else {
        temperature.className = "cold";
    }
}

const button1 = document.getElementById("increase_temperature");
button1.addEventListener("click", () => {
    currentTemp = currentTemp + 1;
    getTemp();
    getLandscape();
});

const button2 = document.getElementById("decrease_temperature");
button2.addEventListener("click", () => {
    currentTemp = currentTemp - 1;
    getTemp();
    getLandscape();
});

const getLandscape = () => {
    const landscape = document.getElementById("landscape");
    if (currentTemp >= 80) {
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (currentTemp >= 70) {
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (currentTemp >= 60) {
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (currentTemp >= 50) {
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
    cityName.textContent = defaultCityName; 

} else {
    document.addEventListener("DOMContentLoaded", getTemp);
    document.addEventListener("DOMContentLoaded", getLandscape);
    document.addEventListener("DOMContentLoaded", getSky);
    cityName.textContent = defaultCityName;
}

document.getElementById('sky-select').addEventListener('change', function() {
    sky = this.value; // this line will set the sky value to the selected option
    getSky(); 
});

const button3 = document.getElementById("get_real_temp");
button3.addEventListener("click", () => {
    getLocation(cityInput.value);
});


const locationAPI = "http://127.0.0.1:5000/location";
const weatherAPI = "http://127.0.0.1:5000/weather";

const getLocation = (query) => {
    axios.get(locationAPI,
        {
            params: {
                q: query
            }
        })
        .then((response) => {
            const lat = response.data[0]["lat"];
            const lon = response.data[0]["lon"];
            console.log(lat)
            console.log(lon)
            getWeather(lat, lon);
        })
        .catch((error) => {
            console.log('cannot find city');
        });
};








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


const resetButton = document.getElementById("reset_city");
resetButton.addEventListener("click", () => {
    console.log('Reset city clicked!'); // add this line
    cityName.textContent = defaultCityName;
    cityInput.value = defaultCityName;
});
