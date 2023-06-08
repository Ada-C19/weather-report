const baseURL = 'http://127.0.0.1:5000/'
const state = {}

const loadControls = () => {
    const elementsWithId = document.querySelectorAll('[id')
    elementsWithId.forEach(element => state[element.id] = element);
};

const registerEvents = () => {
    state.increaseTempControl.addEventListener('click', handleIncrease);
    state.decreaseTempControl.addEventListener('click', handleDecrease);
    state.cityNameInput.addEventListener('input', handleCityNameUpdate);
    state.currentTempButton.addEventListener('click', handleGetCurrentTemp);
};

const handleGetCurrentTemp = async () => {
    const locationURL = `${baseURL}location?q=${state.cityName}`;
    const locationResponse = await axios.get(locationURL);
    const { lat, lon } = locationResponse.data[0];

    const weatherURL = `${baseURL}weather?lat=${lat}&lon=${lon}`;
    const weatherResponse = await axios.get(weatherURL);
    const kelvinTemp = weatherResponse.data['main']['temp'];

    state.cityTemp = convertKelvinToFahrenheit(kelvinTemp);
    state.tempValue.innerText = state.cityTemp;
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

const handleTempChange = (adj) => {
    let currentTemp = parseInt(state.tempValue.innerText);
    let newTemp = currentTemp + adj;
    state.tempValue.innerText = newTemp;
    //Changed text color based on temp
    let color, landscape;
    if (newTemp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (newTemp >= 70 && newTemp <= 79) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (newTemp >= 60 && newTemp <= 69) {
        color = 'yellow'
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        color = newTemp >= 50 && newTemp <=59 ? 'green': 'teal';
    }
    state.tempValue.style.color = color;
    state.landscape.innerText = landscape;
};



const onLoaded = () => {
    loadControls();
    registerEvents();
};

document.addEventListener("DOMContentLoaded", onLoaded);


