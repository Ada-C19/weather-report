"use strict";

const state = {
    city: 'Seattle',
    temp: 75,
};

const tempChange = () => {
    let temp = state.temp;
    let landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    let color = 'red';
    if (temp > 80) {
        color = 'red';
        landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp > 70) {
        color = 'orange';
        landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp > 60) {
        color = 'green';
        landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else if (temp > 50) {
        color = 'green';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } else {
        color = 'teal';
        landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    } 

    const changeLandscape = document.getElementById('groundFloor');
    changeLandscape.textContent  = landscape;

    const temperature = document.getElementById('tempValue');
    // temperature.className = color;
    temperature.style.color = color;
    temperature.textContent = String(state.temp);
};

const upTemp = (event) => {
    state.temp += 1;
    const tempCount = document.querySelector('#tempValue');
    // tempCount.textContent = state.temp; 
    // Here we can call our function from above instead
    tempChange();
};

const downTemp = (event) => {
    state.temp -= 1;
    const tempCount = document.querySelector('#tempValue');
    // tempCount.textContent = state.temp;
    tempChange();
};

const updateSky = () => {
    const inputSky = document.getElementById('skySelection').value;
    const skyContainer = document.getElementById('topFloor');
    let topFloor = '';
    let skyColor = '';
    if (inputSky === 'Cloudy') {
        topFloor = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
        skyColor = 'cloudy';
    } else if (inputSky === 'Sunny') {
        topFloor = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
        skyColor = 'sunny';
    } else if (inputSky === 'Rainy') {
        topFloor = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
        skyColor = 'rainy';
    } else if (inputSky === 'Snowy') {
        topFloor = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        skyColor = 'snowy';
    }

    skyContainer.textContent = topFloor;
    const gardenLandscape = document.getElementById('gardenLandscape');
    gardenLandscape.classList = `gardenLandscapeContent ${skyColor}`;
  };


const changeCityName = () => {
    const inputName = document.getElementById('nameInput').value;
    const headerName = document.getElementById('cityHeader');
    state.city = inputName;
    headerName.textContent = state.city;
};

const resetCityBtn = () => {
    const cityName = document.getElementById('nameInput');
    cityName.value = 'Seattle';
    changeCityName();
}



const registerEventHandlers = (event) => {
    tempChange();

    const upTempButton = document.querySelector('#increaseTempControl');
    upTempButton.addEventListener('click', upTemp);

    const downTempButton = document.querySelector('#decreaseTempControl');
    downTempButton.addEventListener('click', downTemp);

    updateSky();
    const skySelection = document.getElementById('skySelection');
    skySelection.addEventListener('change', updateSky);

    changeCityName();
    const nameInput = document.getElementById('nameInput');
    nameInput.addEventListener('input', changeCityName);

    const resetBtn = document.getElementById('nameReset');
    resetBtn.addEventListener('click', resetCityBtn);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);