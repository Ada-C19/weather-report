const state = {
    tempValue: null,
    increaseButton: null,
    decreaseButton: null,
    landscapeEmojis: null,
    cityNameInput: null,
    headerCityName: null,
    currentTempButton: null,
    temp: 32
};

const increaseTemp = () => {
    state.temp += 1;
    state.tempValue.textContent = state.temp;
    changeColor(state.temp);
    changeLandscape(state.temp);
}

const decreaseTemp = () => {
    state.temp -= 1;
    state.tempValue.textContent = state.temp;
    changeColor(state.temp);
    changeLandscape(state.temp);
}

const changeCityName = () => {
    state.headerCityName.textContent = state.cityNameInput.value;
}

const getCurrentCityTemp = async() => {
    const cityName = state.headerCityName.textContent;
    const cityData = await getLatLon(cityName);
    const latitude = cityData['latitude'];
    const longitude = cityData['longitude'];
    const ktemp = await getWeather(latitude,longitude);
    const ftemp = Math.round((ktemp - 273.15) * 9/5 + 32)
    state.temp = ftemp;
    state.tempValue.textContent = ftemp;
}

const changeColor = () => {
    const temp = state.tempValue.textContent;

    if (temp >= 80) {
        state.tempValue.style.color = 'red';
    } else if (temp <= 79 && temp >= 70) {
        state.tempValue.style.color = "orange";
    } else if (temp <= 69 && temp >= 60) {
        state.tempValue.style.color = "yellow";
    } else if (temp <= 59 && temp >= 50) {
        state.tempValue.style.color = "green";
    } else {
        state.tempValue.style.color = "teal";
    }
}
const changeLandscape = () => {
    let temp = state.tempValue.textContent;

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

const changeSky = () => {
    const weatherName = state.skySelect.value;

    if (weatherName === 'sunny') {
        state.skyEmojis.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
        state.gardenContent.style.backgroundColor = '#9AC5F4';
    } else if (weatherName === 'cloudy' ) {
        state.skyEmojis.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
        state.gardenContent.style.backgroundColor = '#C4DFDF';
    } else if (weatherName === 'rainy') {
        state.skyEmojis.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
        state.gardenContent.style.backgroundColor = '#526D82';
    } else {
        state.skyEmojis.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
        state.gardenContent.style.backgroundColor = '#E8F6EF';
    }
}

const resetCityName = () => {
    state.headerCityName.textContent = ''
    state.cityNameInput.value = ''
}

const getLatLon = async (cityName) => {

    url = `http://127.0.0.1:5000/location?q=${cityName}`;

    const response = await axios.get(url);
    const lat = response.data[0]['lat'];
    const lon = response.data[0]['lon'];

    return { latitude: lat, longitude: lon };
}

const getWeather = async (latitude, longitude) => {
    url = `http://127.0.0.1:5000/weather?lat=${latitude}&lon=${longitude}`;
    const response = await axios.get(url);
    const weather = response.data['main']['temp'];
    return weather;
}

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

const registerEvents = () => {
    state.increaseButton.addEventListener("click", increaseTemp);
    state.decreaseButton.addEventListener("click", decreaseTemp);
    state.cityNameInput.addEventListener("input", changeCityName);
    state.currentTempButton.addEventListener("click", getCurrentCityTemp);
    state.skySelect.addEventListener("change", changeSky);
    state.cityNameReset.addEventListener("click", resetCityName);
}


const onLoaded = () => {
    loadControls();
    registerEvents();
};

onLoaded();
getLatLon("Seattle")
getWeather("47.6038321","-122.330062")
getCurrentCityTemp()
