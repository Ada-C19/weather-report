const state = {
	tempValueCount: 0,
	tempValue: null,
	increaseTempControl: null,
	decreaseTempControl: null,
	landscapeContainer: null,
	cityInput: null,
	cityHeader: null,
	currentTempButton: null,
    gardenContainer: null,
	skyContainer: null,
    skySelect: null,
	cityNameResetButton: null,
	cityNameInput: null,
	cityNameInputDefault: "Oakland",
};

const increaseTemp = (event) => {
	++state.tempValueCount;
	state.tempValue.textContent = state.tempValueCount;
	handleTempColors();
	handleLandscapePics();
};
const decreaseTemp = (event) => {
	--state.tempValueCount;
	state.tempValue.textContent = state.tempValueCount;
	handleTempColors();
	handleLandscapePics();
};

const handleTempColors = () => {
	if (state.tempValueCount >= 80) {
		state.tempValue.style.color = "red";
	} else if (state.tempValueCount >= 70 && state.tempValueCount <= 79) {
		state.tempValue.style.color = "orange";
	} else if (state.tempValueCount >= 60 && state.tempValueCount <= 69) {
		state.tempValue.style.color = "yellow";
	} else if (state.tempValueCount >= 50 && state.tempValueCount <= 59) {
		state.tempValue.style.color = "green";
	} else if (state.tempValueCount <= 49) {
		state.tempValue.style.color = "teal";
	}
};

const handleLandscapePics = () => {
	if (state.tempValueCount >= 80) {
		state.landscapeContainer.innerHTML = `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`;
	} else if (state.tempValueCount >= 70 && state.tempValueCount <= 79) {
		state.landscapeContainer.innerHTML = `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷`;
	} else if (state.tempValueCount >= 60 && state.tempValueCount <= 69) {
		state.landscapeContainer.innerHTML = `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`;
	} else if (state.tempValueCount <= 59) {
		state.landscapeContainer.innerHTML = `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`;
	}
};

const handleTextInput = () => {
	state.cityHeader.textContent = state.cityInput.value;
};

const resetCityName = (event) => {
	state.cityInput.value = state.cityNameInputDefault;
	getRealTemp();
	handleTextInput();
	handleTempColors();
	handleLandscapePics();
};

const getCityLatAndLon = () => {
	return axios
		.get(`http://localhost:5000/location?q=${state.cityInput.value}`)
		.then((response) => {
			let lat = response.data[0]["lat"];
			let lon = response.data[0]["lon"];
			return [lat, lon];
		})
		.catch(() => {
			console.log("error");
		});
};

const convertKtoF = (k) => {
	result = Math.floor((k - 273.15) * (9 / 5) + 32);
	return result;
};

const getRealTemp = () => {
	getCityLatAndLon().then(([lat, lon]) => {
		return axios
			.get(`http://localhost:5000/weather?lon=${lon}&lat=${lat}`)
			.then((response) => {
				temp = response.data.main["temp"];
				state.tempValueCount = convertKtoF(temp);
				state.tempValue.textContent = state.tempValueCount;
				handleLandscapePics();
				handleTempColors();
			})
			.catch(() => {
				console.log("error");
			});
	});
};

const handleSkyPics = (event) => {
    state.skyContainer.innerHTML = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
    state.gardenContainer.style.backgroundColor = "lightskyblue";

    if (event.target.value === "sunny") {
		state.skyContainer.innerHTML = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
        state.gardenContainer.style.backgroundColor = "lightskyblue";
	} else if (event.target.value === "cloudy") {
		state.skyContainer.innerHTML = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
        state.gardenContainer.style.backgroundColor = "lightcyan";
	} else if (event.target.value === "rainy") {
		state.skyContainer.innerHTML = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
        state.gardenContainer.style.backgroundColor = "lightgray";
	} else if (event.target.value === "snowy") {
		state.skyContainer.innerHTML = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
        state.gardenContainer.style.backgroundColor = "aliceblue";
	}
};

const registerEvents = () => {
	state.increaseTempControl.addEventListener("click", increaseTemp);
	state.decreaseTempControl.addEventListener("click", decreaseTemp);
	state.cityInput.addEventListener("keyup", handleTextInput);
	state.currentTempButton.addEventListener("click", getRealTemp);
    state.skySelect.addEventListener("change", handleSkyPics)
	state.cityNameResetButton.addEventListener("click", resetCityName);
};

const loadControls = () => {
	state.tempValue = document.getElementById("tempValue");
	state.increaseTempControl = document.getElementById("increaseTempControl");
	state.decreaseTempControl = document.getElementById("decreaseTempControl");
	state.landscapeContainer = document.getElementById("landscape");
	state.cityInput = document.getElementById("cityNameInput");
	state.cityHeader = document.getElementById("headerCityName");
	state.currentTempButton = document.getElementById("currentTempButton");
    state.gardenContainer = document.getElementById("gardenContent");
	state.skyContainer = document.getElementById("sky");
    state.skySelect = document.getElementById("skySelect");
	state.cityNameResetButton = document.getElementById("cityNameReset");
};

const onLoaded = () => {
	loadControls();
	registerEvents();
	handleTempColors();
	handleLandscapePics();
    handleSkyPics();
};

onLoaded();
