const state = {
    defaultCity: 'San Francisco',
    city: 'San Francisco, CA',
    temperature: 68,
    lat: 37.7790262,
    lon: -122.419906,
  };

const skyState = {
    sunny: '🌞🌞🌞🌞🌞🌞🌞🌞🌞',
    cloudy: '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️',
    rainy: '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧',
    snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
}

const locationUrl = 'http://127.0.0.1:5000/location';
const params = {
    q: state.city,
    format: "json",
};
const weatherUrl= 'http://127.0.0.1:5000/weather';

const increaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature++;
    tempContainer.textContent = state.temperature;
};

const decreaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature--;
    tempContainer.textContent = state.temperature;
};

const renameCityHeader = () => {
    const headerCity = document.querySelector('#headerCityName');
    const newCity = document.querySelector('#cityNameInput');
    state.city = newCity.value;
    headerCity.innerText = state.city;
};

const resetCity = () => {
    const headerCity = document.querySelector('#headerCityName');
    headerCity.innerText = state.defaultCity;
    const newCity = document.querySelector('#cityNameInput');
    newCity.value = state.defaultCity;
};

const registerEventHandlers = () => {
    const increaseTempBtn = document.querySelector('#increaseTempControl');
    increaseTempBtn.addEventListener("click", increaseTemp);

    const decreaseTempBtn = document.querySelector('#decreaseTempControl');
    decreaseTempBtn.addEventListener("click", decreaseTemp);

    const cityNameInput = document.querySelector('#cityNameInput');
    cityNameInput.addEventListener("input", renameCityHeader);

    const reset = document.querySelector('#cityNameReset');
    reset.addEventListener("click", resetCity);

    const getRealTimeTempBtn = document.querySelector('#currentTempButton');
    getRealTimeTempBtn.addEventListener("click", getLatAndLon);

    const skySelectInput = document.querySelector('#skySelect');
    skySelectInput.addEventListener("change", changeSky);
};

const getLatAndLon = () => {
    axios.get(locationUrl, {
        params: {
            q: state.city,
            format: "json",
        }
    })
    .then((res) => {
        state.lat = res.data[0].lat;
        state.lon = res.data[0].lon;
    })
    .then(getCurrentWeather())
    .catch((err) => {
        console.log("Failed to load latitude and longitude")
    })
};

const tempConvertKtoF = (temp) => {
    return (temp - 273.15) * (9 / 5) + 32; 
};

const setTempToRealTimeTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    tempContainer.innerText = state.temperature;
};

const getCurrentWeather = () => {
    axios.get(weatherUrl, {
        params: {
            lat: state.lat,
            lon: state.lon,
        }
    })
    .then((res) => {
        state.temperature = res.data.main.temp;
        state.temperature = Math.round(tempConvertKtoF(state.temperature));
    })
    .then(setTempToRealTimeTemp)
    .catch((err) => {
        console.log("Unable to get real time temperature.")
    })
};

const changeSky = () => {
    const skyContainer = document.querySelector('#sky');
    const skySelectInput = document.querySelector('#skySelect')
    if (skySelectInput.value === 'sunny') {
        skyContainer.innerText = skyState.sunny;
    } else if (skySelectInput.value === 'cloudy') {
        skyContainer.innerText = skyState.cloudy;
    } else if (skySelectInput.value === 'rainy') {
        skyContainer.innerText = skyState.rainy;
    } else if (skySelectInput.value === 'snowy') {
        skyContainer.innerText = skyState.snowy;
    }
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);