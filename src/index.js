const baseURL = 'http://127.0.0.1:5000/'
const state = {
    cityName: 'Los Angeles', //default city
    temp: 70, //default temp
    color: '',
    landscapeText: '',
    skyText: ''
}

const loadControls = () => {
    const elementsWithId = document.querySelectorAll('[id')
    elementsWithId.forEach(element => state[element.id] = element);
};

const registerEvents = () => {
    state.increaseTempControl.addEventListener('click', handleIncrease);
    state.decreaseTempControl.addEventListener('click', handleDecrease);
    state.cityNameInput.addEventListener('input', handleCityNameUpdate);
    state.currentTempButton.addEventListener('click', handleGetCurrentTemp);
    state.skySelect.addEventListener('change',handleSkyUpdate);
    state.cityNameReset.addEventListener('click', handleCityNameReset);
};

const handleSkyUpdate = (option) => {
    state.skyText = option.target.value;
    state.sky.innerText = state.skyText;
}

const handleGetCurrentTemp = async () => {
    const locationURL = `${baseURL}location?q=${state.cityName}`;
    const locationResponse = await axios.get(locationURL);
    const { lat, lon } = locationResponse.data[0];

    const weatherURL = `${baseURL}weather?lat=${lat}&lon=${lon}`;
    const weatherResponse = await axios.get(weatherURL);
    const kelvinTemp = weatherResponse.data['main']['temp'];

    state.temp = convertKelvinToFahrenheit(kelvinTemp);
    handleTempChange();
};

const convertKelvinToFahrenheit = (kelvinTemp) => {
    return Math.floor((kelvinTemp - 273.15) * 9/5 +32);
};

const handleCityNameUpdate = () => {
    state.cityName = state.cityNameInput.value;
    state.headerCityName.innerText = state.cityName;
};

const handleIncrease = () => handleTempChange(1);
const handleDecrease = () => handleTempChange(-1);

const handleTempChange = (adj=0) => {
    state.temp = state.temp + adj;

    if (state.temp >= 80) {
        state.color = 'red';
        state.landscapeText = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temp >= 70 && state.temp <= 79) {
        state.color = 'orange';
        state.landscapeText = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temp >= 60 && state.temp <= 69) {
        state.color = 'yellow'
        state.landscapeText = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        state.landscapeText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        state.color = state.temp >= 50 && state.temp <=59 ? 'green': 'teal';
    }

    refreshUI();
};

const handleCityNameReset = () => {
    state.cityName = 'Los Angeles';
    state.cityNameInput.value = "";
    refreshUI();
}

const refreshUI = () => {
    state.headerCityName.innerText = state.cityName;
    state.tempValue.innerText = state.temp;
    state.landscape.innerText = state.landscapeText;
    state.tempValue.style.color = state.color;
}

const onLoaded = () => {
    loadControls();
    registerEvents();
    refreshUI();
};

document.addEventListener("DOMContentLoaded", onLoaded);


