"use strict";

const state = {
city: 'Seattle',
lat: 47.6038321,
long: -122.3300624,
temp: 65,
};

const convertKtoF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const LOCATION_KEY = process.env.LOCATION_KEY;
const WEATHER_KEY = process.env.WEATHER_KEY;


const findLatAndLong = () => {
  //let lat, long;
axios
.get('https://us1.locationiq.com/v1/search.php', {
    params: {
    key: LOCATION_KEY,
    q: state.city,
    },
    })
    .then((response) => {
        console.log(response.data);
        state.lat = response.data.lat;
        state.long = response.data.long;
        getWeather();
    })
    .catch((error) => {
        console.log('Error finding the latitude and longitude:', error.response);
    });
};

const getWeather = () => {
    const WEATHER_KEY = process.env.WEATHER_KEY;
axios
    .get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
        key: WEATHER_KEY,
        lat: state.lat,
        lon: state.long,
},
    })
    .then((response) => {
    const weather = response.data;
    state.temp = Math.round(convertKtoF(weather.main.temp));
    formatTempAndLandscape();
    })
    .catch((error) => {
    console.log('Error getting the weather:', error);
    });
};

// Does the same as below but wasn't working, so I tried this. Keep this till later in case we need it. 
// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.getElementById('getWeatherButton');
//     button.addEventListener('click', function () {
//         findLatAndLong();
//     });
// });

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

function formatTempAndLandscape() {
    const temperatureElement = document.getElementById('tempValue');
    temperatureElement.textContent = state.temp + '°F';
};

const increaseTemp = () => {
    state.temp += 1;
};
const decreaseTemp = () => {
    state.temp -= 1;;
};

const registerEventHandlers = () => {

    updateCityName();
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.addEventListener('input', updateCityName);

    const cityNameResetBtn = document.getElementById('cityNameReset');
    cityNameResetBtn.addEventListener('click', resetCityName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('currentTempButton');
    button.addEventListener('click', function () {
        findLatAndLong();
    });
});