const state = {
    tempValue: null,
    increaseButton: null,
    decreaseButton: null,
    landscapeEmojis: null,
    cityNameInput: null,
    headerCityName: null,
    currentTempButton: null,
    skySelect: null,
    skyEmojis: null,
    gardenContent: null,
    cityNameReset: null,
    temp: 0
};

const loadControls = () => {
    state.tempValue = document.getElementById("tempValue");
    state.increaseButton = document.getElementById("increaseTempControl");
    state.decreaseButton = document.getElementById("decreaseTempControl");
    state.landscapeEmojis = document.getElementById("landscape");
    state.cityNameInput = document.getElementById("cityNameInput");
    state.headerCityName = document.getElementById("headerCityName")
    state.currentTempButton = document.getElementById("currentTempButton");
    state.skySelect = document.getElementById("skySelect")
    state.skyEmojis = document.getElementById("sky");
    state.gardenContent = document.getElementById("gardenContent")
    state.cityNameReset = document.getElementById("cityNameReset")
}

// #helper functions
const requestLatLon = async (cityName) => {
    url = `http://127.0.0.1:5000/location?q=${cityName}`;
    const response = await axios.get(url);
    const lat = response.data[0]['lat'];
    const lon = response.data[0]['lon'];

    return { latitude: lat, longitude: lon };
}

const requestTemp = async (latitude, longitude) => {
    url = `http://127.0.0.1:5000/weather?lat=${latitude}&lon=${longitude}`;
    const response = await axios.get(url);
    const ktemp = response.data['main']['temp'];
    const ftemp = Math.round((ktemp - 273.15) * 9 / 5 + 32);

    return ftemp;
}

const getCurrentCityTemp = async () => {
    const cityName = state.headerCityName.textContent;
    const cityData = await requestLatLon(cityName);
    const latitude = cityData['latitude'];
    const longitude = cityData['longitude'];
    const currentTemp = await requestTemp(latitude, longitude);
    return currentTemp;
}

const displayColor = (temp) => {
    if (temp >= 80) {
        state.tempValue.setAttribute("class", "red");
    } else if (temp <= 79 && temp >= 70) {
        state.tempValue.setAttribute("class", "orange");
    } else if (temp <= 69 && temp >= 60) {
        state.tempValue.setAttribute("class", "yellow");
    } else if (temp <= 59 && temp >= 50) {
        state.tempValue.setAttribute("class", "green");
    } else {
        state.tempValue.setAttribute("class", "teal");
    }
}

const displayLandscape = (temp) => {
    if (temp >= 80) {
        state.landscapeEmojis.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (temp <= 79 && temp >= 70) {
        state.landscapeEmojis.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else if (temp <= 69 && temp >= 60) {
        state.landscapeEmojis.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
    } else {
        state.landscapeEmojis.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
}

const displaySky = (weather) => {
    if (weather === 'sunny') {
        state.skyEmojis.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
        state.gardenContent.setAttribute("class", "garden__content sunny");
    } else if (weather === 'cloudy') {
        state.skyEmojis.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
        state.gardenContent.setAttribute("class", "garden__content cloudy");
    } else if (weather === 'rainy') {
        state.skyEmojis.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
        state.gardenContent.setAttribute("class", "garden__content rainy");
    } else {
        state.skyEmojis.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        state.gardenContent.setAttribute("class", "garden__content snowy");
    }
}

const displayCityName = (city) => {
    state.headerCityName.textContent = city;
}

const displayTemp = (temp) => {
    state.tempValue.textContent = temp;
}

const refreshUI = () => {
    displayTemp(state.temp);
    displayColor(state.temp);
    displayLandscape(state.temp);
}


// # event handlers
const handleClickIncreaseTemp = () => {
    state.temp += 1;
    refreshUI();
}

const handleClickDecreaseTemp = () => {
    state.temp -= 1;
    refreshUI();
}

const handleGetRealTimeTemp = async () => {
    state.temp = await getCurrentCityTemp();
    refreshUI();
}

const handleCityInputChange = () => {
    const city = state.cityNameInput.value;
    displayCityName(city);
}

const handleChangeSky = () => {
    const weather = state.skySelect.value;
    displaySky(weather);
}

const handleResetButton = () => {
    state.headerCityName.textContent = 'Seattle';
    state.cityNameInput.value = 'Seattle';
    handleGetRealTimeTemp();
}

const registerEvents = () => {
    state.increaseButton.addEventListener("click", handleClickIncreaseTemp);
    state.decreaseButton.addEventListener("click", handleClickDecreaseTemp);
    state.cityNameInput.addEventListener("input", handleCityInputChange);
    state.currentTempButton.addEventListener("click", handleGetRealTimeTemp);
    state.skySelect.addEventListener("change", handleChangeSky);
    state.cityNameReset.addEventListener("click", handleResetButton);
}

const onLoaded = () => {
    loadControls();
    handleGetRealTimeTemp();
    registerEvents();
};

onLoaded();
