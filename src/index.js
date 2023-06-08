'use strict';
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const skySelect = document.getElementById('skySelect');
const gardenContent = document.getElementById('gardenContent');

let temperature = 60;

// increase and decrease temperature functions

function updateTemperature() {
	tempValue.textContent = temperature;
}

increaseTempControl.addEventListener('click', () => {
	temperature++;
	updateTemperature();
});

decreaseTempControl.addEventListener('click', () => {
	temperature--;
	updateTemperature();
});

// change letter colors

// if (temperature >= 80 === red')
// else if (temperature >= 70 === 'orange')
// else if (temperature >= 60 === 'yellow')
// else if (temperature >= 50 === 'green') {
// else
// ('teal')
