const state = {
    currentTemp: 72,
    defaultCity: 'Seattle'
};

const increaseTemp = () => {
    state.currentTemp++;
    setTempAndLandscape();
};

const decreaseTemp = () => {
    state.currentTemp--;
    setTempAndLandscape();
};

const setTempAndLandscape = () => {
    const temp = state.currentTemp;

    let color;
    let landscape;
    switch (true) {
        case temp >= 80:
            color = 'red';
            landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
            break;
        case temp >= 70:
            color = 'orange';
            landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
            break;
        case temp >= 60:
            color = 'yellow';
            landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
            break; 
        case temp >= 50:
            color = 'green';
            landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
            break;
        default:
            color = 'teal';
    }

    const tempCurrent = document.getElementById('display-temperature');
    tempCurrent.textContent = temp;
    tempCurrent.style.color = color;

    const landscapeSection = document.getElementById('landscape');
    landscapeSection.textContent = landscape;
};

const changeSky = () => {
    const skyValue = document.getElementById('sky-drop-down').value;
    
    let skyEmojis;
    if (skyValue === 'Sunny') {
        skyEmojis = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (skyValue === 'Cloudy') {
        skyEmojis = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (skyValue === 'Rainy') {
        skyEmojis = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
    } else if (skyValue === 'Snowy') {
        skyEmojis = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
    }

    const skySection = document.getElementById('sky');
    skySection.textContent = skyEmojis;
};

const changeCityInput = () => {
    const currentCityName = document.getElementById('current-city');
    const input = document.getElementById('city-input').value;
    currentCityName.textContent = `For the lovely city of ✨${input}✨`;
};

const cityInputField = document.getElementById('city-input');
cityInputField.value = state.defaultCity;

const getCityLocation = () => {
    let latitude, longitude;
    return axios
        .get('http://127.0.0.1:5000/location', {
            params: {
                q: cityInputField.value
            }
        })
        .then((response) => {
            latitude = response.data[0].lat;
            longitude = response.data[0].lon;
            getWeather({ lat: latitude, lon: longitude });
        })
        .catch((error) => {
            console.log(`This city does not exist`);
            return state.currentTemp;
        });
};

const getWeather = (query) => {
    return axios
        .get('http://127.0.0.1:5000/weather', {
            params: {
                lat: query.lat,
                lon: query.lon
            }
        })
        .then((response) => {
            state.currentTemp = Math.floor((response.data.main.temp - 273.15) * 1.8 +32);
            setTempAndLandscape();
        })
        .catch((error) => {
            console.log('Error: weather API not working properly');
        });
};

const resetCity = () => {
    const cityName = document.getElementById('city-input');
    cityName.value = "Seattle";
    changeCityInput();
};

const registerEventHandlers = () => {
    const increaseButton = document.getElementById("increase-temp");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.getElementById("decrease-temp");
    decreaseButton.addEventListener("click", decreaseTemp);

    const changeCity = document.getElementById('city-input');
    changeCity.addEventListener("input", changeCityInput);
    changeCity.addEventListener("propertychange", changeCityInput);

    const changeTemp = document.getElementById('temp-button');
    changeTemp.addEventListener("click", getCityLocation);

    const selectSky = document.getElementById('sky-drop-down');
    selectSky.addEventListener("change", changeSky);

    const resetButton = document.getElementById('city-reset');
    resetButton.addEventListener("click", resetCity);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);