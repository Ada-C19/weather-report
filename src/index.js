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
<<<<<<< HEAD
=======
    // weatherCityName: '',
    // weatherCityContainer: null,
>>>>>>> 35b0f6deefd198375a369512ceccf4c533e5647f
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
<<<<<<< HEAD
=======
    // state.weatherCityContainer = document.getElementById('weatherContainer');
    // state.weatherCityName = document.getElementById('weatherCityContainer').innerText;
>>>>>>> 35b0f6deefd198375a369512ceccf4c533e5647f
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

<<<<<<< HEAD
const getRealTemp = (locationName) => {
    const promise = axios
    .get('http://localhost:5000/location',{
            params: {
                q: state.cityNameContainer.innerText
            },
        })
    const dataPromise = promise.then((response) => {
            state.lat = response.data[0]['lat']
            state.lon = response.data[0]['lon']
            getWeather(state.lat,state.lon)
        });
    return dataPromise
=======
const getRealTemp = async (locationName) => {
    const locationResp = await axios.get('http://localhost:5000/location',{ params: {q: locationName } })

    // console.log(Resp.data)



    const coords = [locationResp.data[0]['lat'], locationResp.data[0]['lon']]

    const weatherResponse = await getWeather(coords[0],coords[1])

    return weatherResponse.data


    // return dataPromise
>>>>>>> 35b0f6deefd198375a369512ceccf4c533e5647f
}

const getWeather = async (lat,lon) => {
    const promise = axios
        .get('http://localhost:5000/weather',{
            params: {
                lat: lat,
                lon: lon,
                units: 'imperial',
            },
        })
    const dataPromise = promise.then((response) => {
            // console.log(response)
            state.tempNumber = response.data['main']['temp']
        })
    return dataPromise;
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = ++state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.tempNumberContainer.innerText);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);
    });
    state.decreaseTempButton.addEventListener('click', () => {
        state.tempNumberContainer.innerText = --state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.tempNumber);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);
    });

    state.cityInput.addEventListener('input', () => {
        // console.log(state)
        state.cityNameContainer.innerText = state.cityInput.value;
        state.weatherCity.innerText = state.cityInput.value;
        // console.log('after',state)
    });
<<<<<<< HEAD
    state.realTempButton.addEventListener('click', () => {
        getRealTemp(state.cityNameContainer.innerText)
=======

    state.realTempButton.addEventListener('click', async () => {
       const resp = await getRealTemp(state.cityNameContainer.innerText)
       console.log('pleaseeee', resp)
       state.tempNumber = resp.main.temp
        // console.log(temperature)
        // console.log("Its proof")
>>>>>>> 35b0f6deefd198375a369512ceccf4c533e5647f
        state.tempNumberContainer.innerText = state.tempNumber;
        state.tempNumberContainer.className = getTempColor(state.tempNumber);
        state.landEmojiContainer.innerText = getLandscape(state.tempNumber);
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