"use strict";

const state = {
    temp: 75,
};

const tempChange = () => {
    let temp = state.temp;
    let color = 'red';
    if (temp > 80) {
        color = 'red';
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
    temperature.className = color;
    temperature.textContent = String(state.temp);
};

const upTemp = (event) => {
    state.temp += 1;
    const tempCount = document.querySelector('#tempValue');
    tempCount.textContent = state.temp;
};

const downTemp = (event) => {
    state.temp -= 1;
    const tempCount = document.querySelector('#tempValue');
    tempCount.textContent = state.temp;
};

const registerEventHandlers = (event) => {
    // tempChange();

    const upTempButton = document.querySelector('#increaseTempControl');
    upTempButton.addEventListener('click', upTemp);

    const downTempButton = document.querySelector('#decreaseTempControl');
    downTempButton.addEventListener('click', downTemp);
}

document.addEventListener('DOMContentLoaded', registerEventHandlers);