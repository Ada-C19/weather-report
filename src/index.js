"use strict";

const state = {
    degrees: 62,
    cityName: "Seattle",
    cityLat: 0,
    cityLon: 0
};

// Wave 2
const increaseTemp = (event) => {
    state.degrees += 1;
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};

const decreaseTemp = (event) => {
    state.degrees -= 1;
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};



const tempColorLandscape = () => {
    let temp = state.degrees;
    let color = 'yellow';
    let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    if (temp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60) {
        color = 'yellow';
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'green';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        color = 'teal';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const tempNum = document.getElementById('degrees');
    tempNum.style.color = color;

    const newLandscape = document.getElementById('landscape-emojis');
    newLandscape.textContent = landscape;

};

// Wave 3
const changecityName = (event) => {
    let cityNameHTML = document.getElementById("name").value;
    state.cityName = cityNameHTML;
    const city = document.getElementById("city");
    city.textContent = state.cityName;
}

// Wave 4
const getLocation = () => {
    axios.get('http://127.0.0.1:5000/location', { params: {q: state.cityName, format: 'json'}})
        .then((result)=> {
            state.cityLat = result.data[0]['lat'];
            state.cityLon = result.data[0]['lon'];
        })
}

const getWeather = () => {
    getLocation(state.cityName)
    axios.get('http://127.0.0.1:5000/weather', { params: {lat: state.cityLat, lon: state.cityLon, format: 'json', units: 'imperial'}})
        .then((result) => {
            state.degrees = result.data["main"]["temp"];
            const degreeCount = document.getElementById('degrees');
            degreeCount.textContent = state.degrees;
            console.log("OK");
        })
}

// Wave 5
const changeLandscape = (event) => {
    let weatherState = document.getElementById("skySelect").value;
    const skyEmojis = document.getElementById("sky-emojis");
    const backgroundColor = document.getElementById('weather-box');
    if (weatherState === "Sunny") {
        skyEmojis.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
        backgroundColor.style.backgroundColor = 'red';
    }
    else if (weatherState === "Cloudy") {
        skyEmojis.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        backgroundColor.style.backgroundColor = 'green';
    }
    else if (weatherState === "Rainy") {
        skyEmojis.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        backgroundColor.style.backgroundColor = 'blue';
    }
    else if (weatherState === "Sunny") {
        skyEmojis.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        backgroundColor.style.backgroundColor = 'purple';
    }
}



const registerEventHandlers = (event) => {
    tempColorLandscape();

    const upButton = document.getElementById('up');
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.getElementById('down');
    downButton.addEventListener("click", decreaseTemp);

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener("click", changecityName);

    const realTimeButton = document.getElementById('realTimeButton');
    realTimeButton.addEventListener("click", getWeather);

    const weatherSelect = document.getElementById('skySelect');
    weatherSelect.addEventListener("change", changeLandscape);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);