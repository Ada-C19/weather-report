// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
    city: 'Seattle',
    lat: 47.6038321,
    long: -122.3300624,
    temp: 70,
};

const landscapes = { 
    hot: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",  
    warm: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷", 
    cool: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃", 
    cold: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value; 
    const headerCityName = document.getElementById("headerCityName"); 
    state.city = inputName;
    headerCityName.textContent = state.city;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput"); 
    cityNameInput.value = 'Seattle';
    updateCityName(); 
};

const formatTempAndGarden = () => {
    let temp = state.temp;
    let color = 'green';
    let landscape = landscapes.warm;

    if (temp >= 100) {
        color = 'red';
        landscape = landscapes.hot;
    } else if (temp >= 95) {
        color = 'orangered';
        landscape = landscapes.hot;
    } else if (temp >= 86) {
        color = 'orange';
        landscape = landscapes.hot;
    } else if (temp >= 77) {
        color = 'green';
        landscape = landscapes.warm;
    } else if (temp >= 68) {
        color = 'darkgreen';
        landscape = landscapes.warm;
    } else if (temp >= 59) {
        color = 'teal';
        landscape = landscapes.cool;
    } else if (temp >= 50) {
        color = 'cornflowerblue';
        landscape = landscapes.cool;
    } else if (temp >= 41) {
        color = 'steelblue';
        landscape = landscapes.cold;
    } else if (temp >= 32) {
        color = 'royalblue';
        landscape = landscapes.cold;
    } else if (temp >= 23) {
        color = 'darkblue';
        landscape = landscapes.cold;
    } else if (temp >= 14) {
        color = 'darkslateblue';
        landscape = landscapes.cold;
    } else if (temp >= 5) {
        color = '#424040';
        landscape = landscapes.cold;
    } else {
        color = 'black';
        landscape = landscapes.cold;
    }

    const temperature = document.getElementById('tempValue');
    const newLandscape = document.getElementById('landscape');
    temperature.style.color = color;
    temperature.textContent = String(state.temp);
    newLandscape.textContent = landscape;
};

const increaseTemp = () => {
    state.temp++;
    formatTempAndGarden();
};

const decreaseTemp = () => {
    state.temp--;
    formatTempAndGarden();
};

const registerEventHandlers = () => {
    formatTempAndGarden();

    // const currentTempBtn = document.querySelector('currentTempBtn');
    // currentTempButton.addEventListener('click', findCoordinates);

    const increaseTempBtn = document.getElementById('increaseTempBtn');
    increaseTempBtn.addEventListener('click', increaseTemp);

    const decreaseTempBtn = document.getElementById('decreaseTempBtn');
    decreaseTempBtn.addEventListener('click', decreaseTemp);

    updateCityName();

    const cityNameInput = document.getElementById('cityNameInput'); 
    cityNameInput.addEventListener('input', updateCityName);

    const cityNameResetBtn = document.getElementById('cityNameReset');
    cityNameResetBtn.addEventListener('click', resetCityName); 
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
