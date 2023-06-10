"use strict";

// Select the HTML elements the event will occur on
const increaseTempControl = document.getElementById("increaseTempControl");
const decreaseTempControl = document.getElementById("decreaseTempControl");
const tempValue = document.getElementById("tempValue");


// Make functions to run when it occurs
let temperature = 80;
updateTemperature();

const increaseTemperature = () => {
    temperature++;
    updateTemperature();
}

const decreaseTemperature = () => {
    temperature--;
    updateTemperature();
}

function updateTemperature() {
    tempValue.textContent = temperature;

    if (temperature >= 80) {
        tempValue.className = "red";
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 70 && temperature <= 79) {
        tempValue.className = "orange";
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 60 && temperature <= 69) {
        tempValue.className = "yellow";
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temperature >= 50 && temperature <= 59) {
        tempValue.className = "green";
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (temperature <= 49) {
        tempValue.className = "teal";
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

// someElement.addEventListener("some event name", reactToEvent);
increaseTempControl.addEventListener("click", increaseTemperature);
decreaseTempControl.addEventListener("click", decreaseTemperature);


