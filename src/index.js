'use strict'

const tempElement = document.getElementById('tempValue');
let tempValue = parseInt(tempElement.textContent);
const landscapeElement = document.getElementById('landscape');

const colorTemp = () => {
    if (tempValue >= 80) {
        tempElement.style.color = 'red';
    } else if (tempValue >= 70) {
        tempElement.style.color = 'coral';
    } else if (tempValue >= 60) {
        tempElement.style.color = 'orange';
    } else if (tempValue >= 50) {
        tempElement.style.color = 'green';
    } else {
        tempElement.style.color = 'blue';
    };
}

const addLandscape = () => {
    if (tempValue >= 80) {
        landscapeElement.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (tempValue >= 70) {
        landscapeElement.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (tempValue >= 60) {
        landscapeElement.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else {
        landscapeElement.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    };
}

colorTemp();
addLandscape();

const increaseTemp = () => {
    tempValue++;
    tempElement.textContent = tempValue;
    colorTemp();
    addLandscape();
}

const increaseTempHandler = () => {
    const increaseTempButton = document.getElementById('increaseTempControl');
    increaseTempButton.addEventListener('click', increaseTemp);
}

const decreaseTemp = () => {
    tempValue--;
    tempElement.textContent = tempValue;
    colorTemp();
    addLandscape();
}

const decreaseTempHandler = () => {
    const decreaseTempButton = document.getElementById('decreaseTempControl');
    decreaseTempButton.addEventListener('click', decreaseTemp);
}

document.addEventListener('DOMContentLoaded', increaseTempHandler);
document.addEventListener('DOMContentLoaded', decreaseTempHandler);


const cityNameElement = document.getElementById('headerCityName');
const cityNameInput = document.getElementById('cityNameInput');

const updateCityName = () => {
    cityNameElement.textContent = cityNameInput.value;
}

cityNameInput.addEventListener('input', updateCityName);

const resetCityName = () => {
    cityNameElement.textContent = 'Houston';
    cityNameInput.value = '';
}

const cityResetButton = document.getElementById('cityNameReset');

cityResetButton.addEventListener('click', resetCityName);

const skyElement = document.getElementById('sky');
const skyOptions = document.getElementById('skySelect');
const selectedSky = skyOptions.options[skyOptions.selectedIndex].textContent

const changeSky = () => {
    skyElement.textContent = skyOptions.value;
}

// add event listener for the select sky 
changeSky();
skyOptions.addEventListener('change', changeSky);



