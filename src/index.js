"use strict";

const state = {
    temp: 75,
};

const tempChange = () => {
    let temp = state.temp;
    // let landscape = 
    let color = 'red';
    if (temp > 80) {
        color = 'red';
        // landscape
    } else if (temp > 70) {
        color = 'orange';
    } else if (temp > 60) {
        color = 'green';
    } else if (temp > 50) {
        color = 'green';
    } else {
        color = 'teal';
    } 

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








const registerEventHandlers = (event) => {
    tempChange();

    const upTempButton = document.querySelector('#increaseTempControl');
    upTempButton.addEventListener('click', upTemp);

    const downTempButton = document.querySelector('#decreaseTempControl');
    downTempButton.addEventListener('click', downTemp);

    updateSky();
    const skySelection = document.getElementById('skySelection');
    skySelection.addEventListener('change', updateSky);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);