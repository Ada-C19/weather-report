"use strict";

const state = {
    degrees: 62,
    cityName: "Seattle"
};

// Wave 2
const increaseTemp = (event) => {
    state.degrees += 1;
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};

const decreaseTemp = (event) => {
    state.degrees -= 1;
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};



const tempColorLandscape = () => {
    let temp = state.degrees;
    let color = 'yellow';
    let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    if (temp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60) {
        color = 'yellow';
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'green';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        color = 'teal';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const tempNum = document.getElementById('degrees');
    tempNum.style.color = color;

    const newLandscape = document.getElementById('landscape-emojis');
    newLandscape.textContent = landscape;

};

// Wave 3
const changecityName = (event) => {
    let cityNameHTML = document.getElementById("name").value;
    state.cityName = cityNameHTML
    const city = document.getElementById("city");
    city.textContent = state.cityName;
}

const registerEventHandlers = (event) => {
    tempColorLandscape();

    // const upButton = document.querySelector('#up');
    const upButton = document.getElementById('up');
    upButton.addEventListener("click", increaseTemp);


    // const downButton = document.querySelector('#down');
    const downButton = document.getElementById('down');
    downButton.addEventListener("click", decreaseTemp);

    const resetButton = document.getElementById('reset')
    resetButton.addEventListener("click", changecityName)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);