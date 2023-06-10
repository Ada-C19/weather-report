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

// const setTempAndLandscape = () => {
//     const currentTemp = document.querySelector('#display-temperature');
//     currentTemp.textContent = `${state.currentTemp}`;
//     changeTempColor();
//     changeLandscape();
// }

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

// const changeTempColor = () => {
//     const tempCurrent = document.getElementById('display-temperature');
//     let color;
//     switch (true) {
//         case state.currentTemp >= 80:
//             color = 'red';
//             break;
//         case state.currentTemp >= 70:
//             color = 'orange';
//             break;
//         case state.currentTemp >= 60:
//             color = 'yellow';
//             break; 
//         case state.currentTemp >= 50:
//             color = 'green';
//             break;
//         default:
//             color = 'teal';
//     }
//     tempCurrent.className = color;
// };

// const changeLandscape = () => {
//     const landscape = document.getElementById('landscape');
//     let emoji;
//     switch (true) {
//         case state.currentTemp >= 80:
//             emoji = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
//             break;
//         case state.currentTemp >= 70:
//             emoji = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
//             break;
//         case state.currentTemp >= 60:
//             emoji = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
//             break;
//         default:
//             emoji = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
//     }
//     landscape.textContent = emoji;
// };

const changeCityInput = (city) => {
    const currentCityName = document.getElementById('current-city');
    currentCityName.innerHTML = `For the lovely city of ✨${city.target.value}✨`;
    currentCityInput = city.target.value;
};

const cityInputField = document.getElementById('city-input');
cityInputField.value = 'Seattle';

const getCityLocation = (city) => {
    let latitude, longitude;
    return axios
        .get('http://127.0.0.1:5000/location', {
            params: {
                q: city,
            },
        })
        .then((response) => {
            latitude = response.data[0].lat;
            longitude = response.data[0].lon;
            console.log('Success: getCityLocation works', latitude, longitude);
            // return getWeather({ lat: latitude, lon: longitude });
            return getWeather(lat, lon);
        })
        .catch((error) => {
            console.log(`This city does not exist`);
            return state.currentTemp;
        });
};

// const getWeather = (query) => {
const getWeather = (lat, lon) => { 
    return axios
        .get('http://127.0.0.1:5000/weather', {
            params: {
                // lat: query.lat,
                // lon: query.lon,
                lat: lat,
                lon: lon,
                format: 'json',
            },
        })
        .then((response) => {
            return Math.floor((response.data.main.temp - 273.15) * 1.8 +32);
        })
        .catch((error) => {
            console.log('Error: weather API not working properly');
        });
};

const resetCity = () => {
    // changeCityInput({ target: {value: defaultCity} });
    document.getElementById('city-input').textContent = state.defaultCity;
    changeCityInput(state.defaultCity);
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
    changeTemp.addEventListener("click", changeLocationTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);