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

const upTemp = () => {
    state.temp += 1;
    tempChange();
};

const downTemp = () => {
    state.temp -= 1;
    tempChange();
};

const registerEventHandlers = () => {
    tempChange();

    const upTemp = document.getElementById('increaseTempControl');
    increaseTempControl.addEventListener('click', upTemp);

    const downTemp = document.getElementById('decreaseTempControl');
    decreaseTempControl.addEventListener('click', downTemp);
}

document.addEventListener('DOMContentLoaded', registerEventHandlers);