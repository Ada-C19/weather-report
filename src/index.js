const state = {
	cityLocation: { lat: 28.5421109, lon: -81.3790304 },
};

const loadControls = () => {
	state.tempValueEl = document.getElementById('tempValue');
	state.increaseTempControl = document.getElementById('increaseTempControl');
	state.decreaseTempControl = document.getElementById('decreaseTempControl');
	state.tempValue = parseInt(state.tempValueEl.textContent);
	state.gardenLandscape = document.getElementById('landscape');
	state.gardenLandscapeValue = state.gardenLandscape.textContent;
	state.cityLocationEl = document.getElementById('cityNameInput');
	state.skyDisplay = document.getElementById('sky');
	state.skyDisplayValue = state.skyDisplay.textContent;
};

const increaseTemp = () => {
	state.tempValue += 1;
	state.tempValueEl.textContent = `${state.tempValue}`;
	changeColorAndLandscape();
};

const decreaseTemp = () => {
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

const convertKToF = (k) => (k - 273.15) * (9 / 5) + 32;

const getLocationInfo = () => {
	return axios
		.get('http://localhost:5000/location', {
			params: {
				q: state.cityLocationEl.value,
			},
		})
		.then((response) => {
			state.cityLocation['lat'] = response.data[0].lat;
			state.cityLocation['lon'] = response.data[0].lon;
			console.log('Latitude:', state.cityLocation.lat);
			console.log('Longitude:', state.cityLocation.lon);
			return state.cityLocation;
		})
		.catch((error) => {
			console.error(error);
		});
};

const getWeatherInfo = () => {
	const { lat, lon } = state.cityLocation;
	return axios
		.get('http://localhost:5000/weather', {
			params: {
				lat: lat,
				lon: lon,
			},
		})
		.then((response) => {
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
	getLocationInfo()
		.then(getWeatherInfo)
		.then(() => {
			state.tempValueEl.textContent = `${state.tempValue}`;
		})
		.catch((error) => {
			console.error(error);
		});
};

const changeSky = () => {
	const skySelect = document.getElementById('skySelect');
	const selectedSky = skySelect.value;

	switch (selectedSky) {
		case 'sunny':
			state.skyDisplay.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
			break;
		case 'cloudy':
			state.skyDisplay.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
			break;
		case 'rainy':
			state.skyDisplay.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
			break;
		case 'snowy':
			state.skyDisplay.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
			break;
		default:
			state.skyDisplay.textContent = '';
	}
};

const registerEvents = () => {
	state.increaseTempControl.addEventListener('click', increaseTemp);
	state.decreaseTempControl.addEventListener('click', decreaseTemp);

	state.cityLocationEl.addEventListener('input', () => {
		document.getElementById('headerCityName').textContent =
			state.cityLocationEl.value;
	});

	document.getElementById('cityNameReset').addEventListener('click', () => {
		state.cityLocationEl.value = '';
		document.getElementById('headerCityName').textContent = 'Orlando';
	});

	document
		.getElementById('currentTempButton')
		.addEventListener('click', updateCurrentTemp);

	document.getElementById('skySelect').addEventListener('change', changeSky);
};

const setUp = () => {
	loadControls();
	registerEvents();
	changeColorAndLandscape();
};

document.addEventListener('DOMContentLoaded', setUp);