"use strict";
// const axios = require('axios');
// require('dotenv').config();
// import dotenv from 'dotenv';
// dotenv.config();

const state = {
city: 'Seattle',
lat: 47.6038321,
long: -122.3300624,
temp: 65,
};

const convertKtoF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const findLatAndLong = () => {
// Could not figure out how to access my .env file without breaking my city name code. If you inspect my code in the browser, the api call is correct. It will error because there's no authorization. 
axios
.get('http://127.0.0.1:5000/location', {
    params: {
        q: state.city,
    },
    })
    .then((response) => {
        console.log("find lat and long",response.data);
        state.lat = response.data[0].lat;
        state.long = response.data[0].lon;
        getWeather();
    })
    .catch((error) => {
        console.log('Error finding the latitude and longitude:', error.response);
    });
};

const getWeather = () => {
axios
    .get('http://127.0.0.1:5000/weather', {
    params: {
        lat: state.lat,
        lon: state.long,
},
    })
    .then((response) => {
        console.log("the state", state)
        console.log("this is the weather", response.data);
        const weather = response.data;
        state.temp = Math.round(convertKtoF(weather.main.temp));
        formatTempAndLandscape();
    })
    .catch((error) => {
    console.log('Error getting the weather:', error);
    });
};

const updateCityName = () => {
    const inputName = document.getElementById('cityNameInput').value;
    const cityName = document.getElementById('cityName');
    state.city = inputName;
    cityName.textContent = state.city;
};
    
const resetCityName = () => {
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.value = 'Seattle'; 
    updateCityName();
};

const formatTempAndLandscape = () => {
    let temp = state.temp;
    // const temperatureElement = document.getElementById('tempValue');
    // temperatureElement.textContent = state.temp + '°F';
    const temperature = document.getElementById('tempValue');
    temperature.textContent = `${state.temp}°F`;
};

const increaseTemp = () => {
    state.temp += 1;
};
const decreaseTemp = () => {
    state.temp -= 1;;
};

const registerEventHandlers = () => {
    formatTempAndLandscape;
    const currentTempButton = document.getElementById('currentTempButton');
    currentTempButton.addEventListener('click', findLatAndLong);

    updateCityName();
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.addEventListener('input', updateCityName);

    const cityNameResetBtn = document.getElementById('cityNameReset');
    cityNameResetBtn.addEventListener('click', resetCityName);

    
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.getElementById('currentTempButton');
//     button.addEventListener('click', function () {
//         findLatAndLong();
//     });
// });