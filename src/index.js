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
    rainy: '🌧🌈🌧🌧💧🌧🌦🌧💧🌧🌧',
    snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
};

const landState = {
    '80+': '🌵🌵🌵🌵🌵🌵🌵🌵🌵',
    '70+': '🌴🌴🌴🌴🌴🌴🌴🌴🌴',
    '60+': '🌳🌳🌳🌳🌳🌳🌳🌳🌳',
    '59-': '🏔️☃️🏔️🏔️🥶🏔️🏔️🏔️☃️'
};

const tempState = {
    '80+': 'red',
    '70+': 'orange',
    '60+': 'gold',
    '50+': 'green',
    '49-': 'teal'
};

const locationUrl = 'http://127.0.0.1:5000/location';
const weatherUrl = 'http://127.0.0.1:5000/weather';

const increaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature++;
    tempContainer.textContent = state.temperature;
    changeTempColor();
    changeLandscape();
};

const decreaseTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    state.temperature--;
    tempContainer.textContent = state.temperature;
    changeTempColor();
    changeLandscape();
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

const tempConvertKtoF = (temp) => (temp - 273.15) * (9 / 5) + 32;

const setTempToRealTimeTemp = () => {
    const tempContainer = document.querySelector('#tempValue');
    tempContainer.innerText = state.temperature;
    changeTempColor();
    changeLandscape();
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
    const skyInputValue = skySelectInput.value;
    if (skyInputValue in skyState) {
        skyContainer.innerText = skyState[skyInputValue];
    }
};

const changeLandscape = () => {
    const landscapeContainer = document.querySelector('#landscape');

    landscapeContainer.innerText = landState[
        state.temperature >= 80 ? "80+" : 
        state.temperature >= 70 ? "70+" : 
        state.temperature >= 60 ? "60+" : 
        "59-"
    ];
};

const changeTempColor = () => {
    const tempContainer = document.querySelector('#tempValue');
    
    tempContainer.style.color = tempState[
        state.temperature >= 80 ? "80+" : 
        state.temperature >= 70 ? "70+" : 
        state.temperature >= 60 ? "60+" : 
        state.temperature >= 50 ? "50+" : 
        "49-"
    ];
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

document.addEventListener("DOMContentLoaded", registerEventHandlers);