// `"use strict";`

const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempNumberContainer: null,
    tempNumberClass: '',
    tempNumber: '',
    skyEmojiContainer: null,
    skyEmoji: '',
    landEmojiContainer: '',
    landEmoji: '',
    cityNameContainer: null,
    cityName: '',
    cityInput: '',
    realTempButton: null,    
    SkyDropdown: null,
    lat: null,
    lon: null,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById('increaseTempButton');
    state.decreaseTempButton = document.getElementById('decreaseTempButton');
    state.tempNumber = parseInt(document.getElementById('tempNumberContainer').innerText);
    state.tempNumberContainer = document.getElementById('tempNumberContainer');
    state.tempNumberClass = document.getElementById('tempNumberContainer').className;
    state.skyEmojiContainer = document.getElementById('skyEmojiContainer');
    state.skyEmoji = document.getElementById('skyEmojiContainer').innerText;
    state.landEmojiContainer = document.getElementById('landEmojiContainer');
    state.landEmoji = document.getElementById('landEmojiContainer').innerText;
    state.cityNameContainer = document.getElementById('cityNameContainer');
    state.cityName = document.getElementById('cityNameContainer').innerText;
    state.cityInput = document.getElementById('cityInput');
    state.realTempButton = document.getElementById('realTempButton');
    state.skyDropdown = document.getElementById('skyDropdown');
    state.weatherCity = document.getElementById('weatherCity');
};

const getTempColor = (tempNumber) => {
    let className = 'redTemp';
    if (tempNumber >= 80) {
        className = 'redTemp';
    } else if (tempNumber >= 70) {
        className = 'orangeTemp';
    } else if (tempNumber >= 60) {
        className = 'yellowTemp';
    } else if (tempNumber >= 50) {
        className = 'greenTemp';
    } else if (tempNumber <= 49) {
        className = 'tealTemp';
    }
    return className
}

const getLandscape = (temperature) => {
    if (temperature >= 80) {
        return "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 70) {
        return "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 60) {
        return "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        return "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const getSky = (skyType) => {
    switch(skyType) {
        case 'sunny':
            return "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
        case 'cloudy':
            return "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        case 'rainy':
            return "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        case 'snowy':
            return "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        default:
            return '';
    }
};

const getRealTemp = (locationName) => {
    const promise = axios
    .get('http://localhost:5000/location',{
            params: {
                q: state.cityNameContainer.innerText
            },
        })
    const dataPromise = promise.then((response) => {
            console.log("hey", response)
            state.lat = response.data[0]['lat']
            state.lon = response.data[0]['lon']
            getWeather(state.lat,state.lon)
        });
    return dataPromise
}

const getWeather = (lat,lon) => {
    const promise = axios
        .get('http://localhost:5000/weather',{
            params: {
                lat: lat,
                lon: lon,
                units: 'imperial',
            },
        })
    const dataPromise = promise.then((response) => {
            console.log(response)
            state.tempNumber = response.data['main']['temp']
        })
    return dataPromise;
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = ++state.temp-number;
        state.tempNumberContainer.className = getTempColor(state.temp-number-container.innerText);
        state.landEmojiContainer.innerText = getLandscape(state.temp-number);
    });
    state.decreaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = --state.temp-number;
        state.tempNumberContainer.className = getTempColor(state.temp-number);
        state.landEmojiContainer.innerText = getLandscape(state.temp-number);
    });
    state.cityInput.addEventListener('input', () => {
        state.cityNameContainer.innerText = state.cityInput.value;
        state.weatherCity.innerText = state.cityInput.value;
    });
    state.realTempButton.addEventListener('click', () => {
        getRealTemp(state.cityNameContainer.innerText).then (temperature => {
            console.log(temperature)
        })
        state.tempNumberContainer.innerText = state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.temp-number);
        state.landEmojiContainer.innerText = getLandscape(state.temp-number);
    });
    state.skyDropdown.addEventListener('change', () => {
        state.skyEmojiContainer.innerText = getSky(state.skyDropdown.value);
    });
};

const onLoaded = () => {
    loadControls();
    registerEventHandlers();
};

onLoaded();