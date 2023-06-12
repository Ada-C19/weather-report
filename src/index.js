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