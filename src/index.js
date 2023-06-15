// import axios from 'axios';
// "use strict";


const changeTextColor = function(tempValue) {
    
    tempValueElement.classList.remove("red", "orange", "green", "teal", "yellow")
    if (tempValue >= 80) {
        tempValueElement.classList.add("red");
    } else if ((69 < tempValue) && (tempValue < 80)) {
        tempValueElement.classList.add("orange");
    } else if ((59 < tempValue) && (tempValue < 70)) {
        tempValueElement.classList.add("yellow");
    } else if ((49 < tempValue) && (tempValue < 60)) {
        tempValueElement.classList.add("green");
    } else {
        tempValueElement.classList.add("teal");
    }
}

function increaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp + 1;
    changeTextColor(currentTemp)
}

function decreaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp - 1;
    changeTextColor(currentTemp)
}
// CHANGE SKY FUNCTION //

const changeSky = function(event) {
    const value = event.target.value;

    skyElementSelector.classList.remove("cloudy", "sunny", "rainy", "snowy")
    if (value === "Cloudy") {
        skyElementSelector.classList.add("cloudy");
        skyElementWithEmojis.innerText = "☁️☁️☁️☁️☁️"
    } 
    else if (value === "Sunny") {
        skyElementSelector.classList.add("sunny");
        skyElementWithEmojis.innerText = "☀️☀️☀️☀️☀️"
    } 
    else if (value === "Rainy") {
        skyElementSelector.classList.add("rainy");
        skyElementWithEmojis.innerText = "🌧️🌧️🌧️🌧️🌧️"
    } 
    else if (value === "Snowy") {
        skyElementSelector.classList.add("snowy");
        skyElementWithEmojis.innerText = "❄️❄️❄️❄️❄️"
    } 
}
// END OF SKY CHANGE FUNCTION //


// CHANGE THE CITY NAME IN HEADER // 

const updateCityName = function(event) {
    headerCityName.textContent = event.target.value 
};
// END OF CHANGING CITY NAME IN HEADER //


// RESET THE HEADER BACK TO SEATTLE //

const resetCityName = function (event) {
    headerCityName.textContent = "Seattle";
};
// END OF HEADER RESET //


// // API CALLS : //
// const axios = require('axios');

// const LOCATION_KEY = process.env['LOCATION_KEY'];
// const WEATHERIQ_KEY = process.env['WEATHER_KEY'];

const findLatitudeAndLongitude = (cityNameInput) => {
// let latitude, longitude;
    
    return axios.get('http://127.0.0.1:5000/location',{
        params: {
            key: 'location_key',
            q: cityNameInput,
            format: 'json'
        }
})
.then( (response) => {
    console.log(response);
    if (response.data.error) {
        console.error(response.data.error)
        return 
    }
    
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatitudeAndLongitude!', latitude, longitude);
    findTemperature(latitude, longitude);
})
    
.catch( (error) => {
    console.log('error in findLatitudeAndLongitude!');
    console.error(error);
});

return {
    cityLat: 'latitude',
    cityLon: 'longitude'
}
}

const findTemperature = (latitude, longitude) => {
    axios.get('http://127.0.0.1:5000/weather',
{
    params: {
    key: 'weather_key',
    format: 'json',
    lat: latitude,
    lon: longitude
    }
})
.then( (response) => {
    console.log('success in findTemperature!', response.data);
    const tempElement = document.getElementById('tempValue');
    tempElement.textContent = response.data.main.temp;
    return response.data;
})
.catch( (error) => {
    console.log('error in findTemperature!');
});
}


findLatitudeAndLongitude(document.getElementById('cityNameInput'));
// const cityCoordinates = findLatitudeAndLongitude('cityNameInput.textContent');

// const locations = findTemperature(cityCoordinates.cityLat, cityCoordinates.cityLon);

// console.log(locations);

// // // making an api call
// // // .get to 127.0.0.1:5000
// // // check endpoints 

// const inputName = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');
const cityNameInput = document.getElementById('cityNameInput');
const cityNameResetBtn = document.getElementById('cityNameReset'); 
const skyElementSelector = document.getElementById('skySelect');
const skyElementWithEmojis = document.getElementById('sky');
const tempValueElement = document.getElementById('tempValue');



// EVENT LISTENERS //
const registerEventHandlers = () => {
    cityNameInput.addEventListener('change', changeSky);
    cityNameResetBtn.addEventListener('click', changeSky);
    cityNameResetBtn.addEventListener('click', resetCityName);
    cityNameInput.addEventListener('input', updateCityName);
    skyElementSelector.addEventListener('change', changeSky);
    tempValueElement.addEventListener('click', changeTextColor);
    document.getElementById('increaseTempButton').addEventListener('click', increaseTemperature);
    document.getElementById('decreaseTempButton').addEventListener('click', decreaseTemperature);
}
document.addEventListener("DOMContentLoaded", registerEventHandlers);
// END OF EVENT LISTENERS //