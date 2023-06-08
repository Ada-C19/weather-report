const state = {
	tempValue: null,
	increaseTempControl: null,
	decreaseTempControl: null,
};

const loadControls = () => {
	state.tempValue = document.getElementById('tempValue');
	state.increaseTempControl = document.getElementById('increaseTempControl');
	state.decreaseTempControl = document.getElementById('decreaseTempControl');
};

const ChangeColorAndLandscape = () => {
	let temp = state.tempValue;
	if (temp >= 80) {
		state.tempValueEl.classList = 'red';
		state.gardenLandscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
	} else if (temp < 80 && temp >= 70) {
		state.tempValueEl.classList = 'orange';
		state.gardenLandscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
	} else if (temp < 70 && temp >= 60) {
		state.tempValueEl.classList = 'yellow';
		state.gardenLandscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
	} else if (temp < 60 && temp >= 50) {
		state.tempValueEl.classList = 'green';
		state.gardenLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
	} else {
		state.tempValueEl.classList = 'teal';
		state.gardenLandscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
	}
};

const registerEvents = () => {
	loadControls();
	state.increaseTempControl.addEventListener('click', changeColor);
	state.decreaseTempControl.addEventListener('click', changeColor);
};

document.addEventListener('DOMContentLoaded', registerEvents);
