const state = {
	tempValue: null,
	increaseTempControl: null,
	decreaseTempControl: null,
	gardenLandscape: null,
	tempValueEl: null,
	cityLocation: { lat: 28.5421109, lon: -81.3790304 },
};

const loadControls = () => {
	state.tempValueEl = document.getElementById('tempValue');
	state.increaseTempControl = document.getElementById('increaseTempControl');
	state.decreaseTempControl = document.getElementById('decreaseTempControl');
	state.tempValue = parseInt(state.tempValueEl.textContent);
	state.gardenLandscape = document.getElementById('landscape');
	state.gardenLandscapeValue = state.gardenLandscape.textContent;
	state.cityLocation = document.getElementById('cityNameInput');
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

// WAVE 2
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
// WAVE 3
const updateCity = () => {
	const cityNameInput = document.getElementById('cityNameInput');
	const cityNameReset = document.getElementById('cityNameReset');
	const headerCityName = document.getElementById('headerCityName');
};

// WAVE 4
const convertKToF = (k) => (k - 273.15) * (9 / 5) + 32;

const getLocationInfo = () => {
	return axios
		.get('http://127.0.0.1:5000/location', {
			//http://localhost:5000/location
			params: {
				q: state.cityLocation.value,
			},
		})
		.then((response) => {
			state.cityLocation['lat'] = response.data[0].lat;
			state.cityLocation['lon'] = response.data[0].lon;
			return state.cityLocation;
		})
		.catch((error) => {
			console.error(error);
		});
};

const getWeatherInfo = (location) => {
	const { lat, lon } = state.cityLocation;

	console.log('Latitude:', lat);
	console.log('Longitude:', lon);

	return axios
		.get('http://127.0.0.1:5000/weather', {
			params: {
				lat: lat,
				lon: lon,
			},
		})
		.then((response) => {
			console.log('Retrieve location');
			const cityTemp = convertKToF(response.data.main.temp);
			state.tempValue = Math.round(cityTemp);
			changeColorAndLandscape();
			return state.tempValue;
		})
		.catch((error) => {
			console.log('Location fetch failed');
			console.error(error);
		});
};

const updateCurrentTemp = () => {
	const currentTemp = document.getElementById('currentTempButton');
	getLocationInfo()
		.then(getWeatherInfo)
		.then((temp) => {
			state.tempValueEl.textContent = `${state.tempValue}`;
		});
	changeColorAndLandscape();
};

const setUp = () => {
	loadControls();
	registerEvents();
	changeColorAndLandscape();
};

const registerEvents = () => {
	state.increaseTempControl.addEventListener('click', increaseTemp);
	state.decreaseTempControl.addEventListener('click', decreaseTemp);

	cityNameInput.addEventListener('input', () => {
		headerCityName.textContent = cityNameInput.value;
	});

	cityNameReset.addEventListener('click', () => {
		cityNameInput.value = headerCityName.textContent = '';
	});

	loadControls();

	const updateTemp = document.querySelector('#currentTempButton');
	updateTemp.addEventListener('click', updateCurrentTemp);
};

document.addEventListener('DOMContentLoaded', setUp);
