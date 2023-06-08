// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
    city: 'Seattle',
    lat: 47.6038321,
    long: -122.3300624,
    temp: 70,
};

const formatTempAndGarden = () => {
    let temp = state.temp;
    let color = 'green';

    if (temp >= 100) {
        color = 'red';
    } else if (temp >= 95) {
        color = 'orangered';
    } else if (temp >= 86) {
        color = 'orange';
    } else if (temp >= 77) {
        color = 'green';
    } else if (temp >= 68) {
        color = 'darkgreen';
    } else if (temp >= 59) {
        color = 'teal';
    } else if (temp >= 50) {
        color = 'cornflowerblue';
    } else if (temp >= 41){
        color = 'steelblue';
    } else if (temp >= 32) {
        color = 'royalblue';
    } else if (temp >= 23) {
        color = 'darkblue';
    } else if (temp >= 14) {
        color = 'darkslateblue';
    } else if (temp >= 5) {
        color = '#424040';
    } else {
        color = 'black';
    }

    const temperature = document.getElementById('tempValue');
    temperature.style.color = color;
    temperature.textContent = String(state.temp);
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
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
