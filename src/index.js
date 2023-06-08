"use strict";

const state = {
city: 'Seattle',
lat: 47.6038321,
long: -122.3300624,
temp: 72,
};

const convertKtoF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

const findLatAndLong = () => {
  //let lat, long;
axios
.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
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
axios
    .get('https://us1.locationiq.com/v1/search.php', {
    params: {
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

const updateCityName = () => {
    const inputName = document.getElementById('cityNameInput').value;
    const headerCityName = document.getElementById('headerCityName');
    state.city = inputName;
    headerCityName.textContent = state.city;
};
    
const resetCityName = () => {
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.value = 'Seattle'; 
    updateCityName();
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