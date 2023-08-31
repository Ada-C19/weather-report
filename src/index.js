// Wave 2
const state = {
	temp: 72,
	city: "Cleveland",
	coordinates: {
		lat: 41.4993,
		long: -81.6944,
	},
};

// Wave 2
let temperature = state.temp; 
const tempValue = document.getElementById("tempValue");
const increaseTempControl = document.getElementById("increaseTempControl");
const decreaseTempControl = document.getElementById("decreaseTempControl");
const landscape = document.getElementById("landscape");

function updateTemperature() {
	tempValue.textContent = temperature;

	if (temperature >= 80) {
		tempValue.style.color = "red";
	} else if (temperature >= 70 && temperature <= 79) {
		tempValue.style.color = "orange";
	} else if (temperature >= 60 && temperature <= 69) {
		tempValue.style.color = "yellow";
	} else if (temperature >= 50 && temperature <= 59) {
		tempValue.style.color = "green";
	} else {
		tempValue.style.color = "blue";
	}
}

function updateLandscape() {
	if (temperature >= 80) {
		landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
	} else if (temperature >= 70 && temperature <= 79) {
		landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
	} else if (temperature >= 60 && temperature <= 69) {
		landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
	} else {
		landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
	}
}

function increaseTemperature() {
	temperature++;
	updateTemperature();
	updateLandscape();
}

function decreaseTemperature() {
	temperature--;
	updateTemperature();
	updateLandscape();
}

// Wave 3
const headerCityName = document.getElementById("headerCityName");
const cityNameInput = document.getElementById("cityNameInput");

function updateCityName(event) {
	if (event.key === "Enter") {
		state.city = cityNameInput.value;
		headerCityName.textContent = state.city;
		findCoordinates();
	}
}

cityNameInput.addEventListener("keydown", updateCityName); 

// Wave 4
const findCoordinates = () => {
	if (state.city.length < 3) {
		return; 
	}

	axios
		.get("http://127.0.0.1:5000/location", {
			params: {
				q: state.city,
			},
		})
		.then((response) => {
			state.coordinates.lat = response.data[0].lat;
			state.coordinates.long = response.data[0].lon;
			updateCoordinates();
			getWeather(); 
		})
		.catch((error) => {
			console.log(error);
		});
};

function updateCoordinates() {
	const coordinatesElement = document.getElementById("coordinates");
	coordinatesElement.textContent = `Latitude: ${state.coordinates.lat}, Longitude: ${state.coordinates.long}`;
}

const getWeather = () => {
	axios
		.get("http://127.0.0.1:5000/weather", {
			params: {
				lat: state.coordinates.lat,
				lon: state.coordinates.long,
			},
		})
		.then((response) => {
			const weatherData = response.data;
            console.log(weatherData); 
			const weatherElement = document.getElementById("weather");
			weatherElement.textContent = `Temperature: ${weatherData.main.temp}°C, Weather: ${weatherData.weather[0].description}`;
		})
		.catch((error) => {
			console.log(error);
		});
};

const skySelect = document.getElementById("skySelect");
const sky = document.getElementById("sky");

function updateSky() {
	const selectedSky = skySelect.value;

	sky.textContent = "";

	switch (selectedSky) {
		case "sunny":
			sky.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
			break;
		case "cloudy":
			sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
			break;
		case "rainy":
			sky.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
			break;
		case "snowy":
			sky.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
			break;
		default:
			break;
	}
}

skySelect.value = "sunny";
updateSky();

const cityNameReset = document.getElementById("cityNameReset");
const defaultCityName = "Cleveland";

function resetCityName() {
	state.city = defaultCityName;
	cityNameInput.value = state.city;
	headerCityName.textContent = state.city;
	findCoordinates();
}

cityNameInput.value = state.city;
headerCityName.textContent = state.city;

// Event Listeners
increaseTempControl.addEventListener("click", increaseTemperature);
decreaseTempControl.addEventListener("click", decreaseTemperature);
cityNameReset.addEventListener("click", resetCityName);
skySelect.addEventListener("change", updateSky);

// Initializations
updateTemperature();
updateLandscape();
updateCoordinates();







