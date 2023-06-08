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
	colorChange();
}

increaseTempControl.addEventListener('click', () => {
	temperature++;
	updateTemperature();
});

decreaseTempControl.addEventListener('click', () => {
	temperature--;
	updateTemperature();
});

// change color of letters

const colorChange = () => {
	const tempValue = document.getElementById('tempValue');

	tempValue.classList.remove('red', 'orange', 'yellow', 'green', 'teal');
	/* To remove a CSS class from the class list of an element, you use the remove() method
	that way one color is applied at the time (no conflicts)*/

	if (temperature >= 80) {
		tempValue.classList.add('red');
	} else if (temperature >= 70) {
		tempValue.classList.add('orange');
	} else if (temperature >= 60) {
		tempValue.classList.add('yellow');
	} else if (temperature >= 50) {
		tempValue.classList.add('green');
	} else {
		tempValue.classList.add('teal');
	}
};
