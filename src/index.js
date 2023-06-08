const state = {
	tempValue: null,
	increaseTempControl: null,
	decreaseTempControl: null,
	gardenLandscape: null,
	tempValueEl: null,
};

const loadControls = () => {
	state.tempValueEl = document.getElementById('tempValue');
	state.increaseTempControl = document.getElementById('increaseTempControl');
	state.decreaseTempControl = document.getElementById('decreaseTempControl');
	state.tempValue = parseInt(state.tempValueEl.textContent);
	state.gardenLandscape = document.getElementById('landscape');
	state.gardenLandscapeValue = state.gardenLandscape.textContent;

	console.log(state);
};

const increaseTemp = () => {
	const increaseTempControl = state.increaseTempControl;
	const currentTemp = document.getElementById('currentTempButton');
	state.tempValue += 1;
	state.tempValueEl.textContent = `${state.tempValue}`;
	changeColorAndLandscape();
};

const decreaseTemp = () => {
	const decreaseTempControl = state.decreaseTempControl;
	const currentTemp = document.getElementById('currentTempButton');
	state.tempValue -= 1;
	state.tempValueEl.textContent = `${state.tempValue}`;
	changeColorAndLandscape();
};

const changeColorAndLandscape = () => {
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

const setUp = () => {
	loadControls();
	registerEvents();
	changeColorAndLandscape();
};

const registerEvents = () => {
	state.increaseTempControl.addEventListener('click', increaseTemp);
	state.decreaseTempControl.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', setUp);
