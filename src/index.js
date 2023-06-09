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
    const currentTemp = document.querySelector('#display-temperature');
    currentTemp.textContent = `${state.currentTemp}`;
    changeTempColor();
    changeLandscape();
}

const changeTempColor = () => {
    const tempCurrent = document.getElementById('display-temperature');
    let color;
    switch (true) {
        case state.currentTemp >= 80:
            color = 'red';
            break;
        case state.currentTemp >= 70:
            color = 'orange';
            break;
        case state.currentTemp >= 60:
            color = 'yellow';
            break; 
        case state.currentTemp >= 50:
            color = 'green';
            break;
        default:
            color = 'teal';
    }
    tempCurrent.className = color;
};

const changeLandscape = () => {
    const landscape = document.getElementById('landscape');
    let emoji;
    switch (true) {
        case state.currentTemp >= 80:
            emoji = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
            break;
        case state.currentTemp >= 70:
            emoji = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
            break;
        case state.currentTemp >= 60:
            emoji = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
            break;
        default:
            emoji = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
    }
    landscape.textContent = emoji;
};

const changeCityInput = (city) => {
    const currentCityName = document.getElementById('current-city');
    currentCityName.innerHTML = `For the lovely city of ✨${city.target.value}✨`;
};

const cityInputField = document.getElementById('city-input');
cityInputField.value = 'Seattle';

const getCityLocation = (city) => {
    let latitude, longitude;
    return axios
        .get('http://127.0.0.1:5000/location', {
            params: {
                q: city
            }
        })
        .then((response) => {
            latitude = response.data[0].lat;
            longitude = response.data[0].lon;
            console.log('success in getCityLocation', latitude, longitude);
            return getWeather({ lat: latitude, lon: longitude });
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
                lon: query.lon,
            },
        })
        .then((response) => {
            return Math.floor((response.data.main.temp - 273.15) * 1.8 +32);
        })
        .catch((error) => {
            console.log('Error: weather API not working properly');
        });
};

const registerEventHandlers = () => {
    const increaseButton = document.getElementById("increase-temp");
    const decreaseButton = document.getElementById("decrease-temp");
    increaseButton.addEventListener("click", increaseTemp);
    decreaseButton.addEventListener("click", decreaseTemp);

    const changeCity = document.getElementById('city-input');
    changeCity.addEventListener('input', changeCityInput);
};




document.addEventListener("DOMContentLoaded", registerEventHandlers);