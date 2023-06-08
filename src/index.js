'use strict';
const tempValue = document.getElementById('tempValue');
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const skySelect = document.getElementById('skySelect');
const gardenContent = document.getElementById('gardenContent');

let temperature = 60;

// increase and decrease temperature functions

increaseTempControl.addEventListener('click', () => {
	temperature++;
	updateTemperature();
});

decreaseTempControl.addEventListener('click', () => {
	temperature--;
	updateTemperature();
});

function updateTemperature() {
	tempValue.textContent = temperature;
	applyTemperatureColor();
	updateLandscape();
}
