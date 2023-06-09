// const { default: axios } = require("axios");

const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempValue: null,
    temperature: 69,
    landscape: null,
    cityNameInput: null,
    headerCityName: null,
    currentTempButton: null,
    skySelect: null,
    sky: null,
    gardenContent: null,
    resetButton: null,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
    state.tempValue = document.getElementById("tempValue");
    state.landscape = document.getElementById("landscape");
    state.cityNameInput = document.getElementById("cityNameInput");
    state.headerCityName = document.getElementById("headerCityName");
    state.currentTempButton = document.getElementById("currentTempButton");
    state.skySelect = document.getElementById("skySelect");
    state.sky = document.getElementById("sky");
    state.gardenContent = document.getElementById("gardenContent");
    state.resetButton = document.getElementById("cityNameReset");
};

const handleIncreaseTempClicked = () => {
    ++state.temperature;
    state.tempValue.textContent = state.temperature;
    setTempDisplay();
};

const handleDecreaseTempClicked = () => {
    --state.temperature;
    state.tempValue.textContent = state.temperature;
    setTempDisplay();
}; 

const setTempDisplay = () => {
    let displayIdentifier = Math.floor(state.temperature / 10) 
    state.tempValue.classList.toggle('teal', displayIdentifier <= 4);
    state.tempValue.classList.toggle('green', displayIdentifier === 5);
    state.tempValue.classList.toggle('yellow', displayIdentifier === 6);
    state.tempValue.classList.toggle('orange', displayIdentifier === 7);
    state.tempValue.classList.toggle('red', displayIdentifier >= 8);
    
    const landscapeTexts = [
        '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
        '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
        '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
        '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    ];

    let displayIndex = displayIdentifier < 6 ? 0 : displayIdentifier <= 8 ? displayIdentifier - 5 : 3;
    
    state.landscape.textContent = landscapeTexts[displayIndex];
}

const handleCityNameInput = () => {
    let cityInput = state.cityNameInput.value;
    state.headerCityName.textContent = cityInput;
};

const getLocationData = () => {
    let cityInput = state.cityNameInput.value;
    let latitude, longitude;
    return axios
        .get('http://127.0.0.1:5000/location', {params: {q:cityInput}})
        .then((response) => {
            latitude = response.data[0].lat;
            longitude = response.data[0].lon;
            return {latitude: latitude, longitude: longitude};
        })
        .catch( (error) => {
            console.log('error in finding location data');
        });
}

const getWeatherDataFromLocation = (location) => {
    // console.log(`${state.cityNameInput.value} is located at`, location.latitude, location.longitude);
    const changeKelvinToFaren = (temperature) => { 
        return Math.floor((temperature - 273.15) * 9/5 + 32)
    }
    
    return axios
            .get('http://127.0.0.1:5000/weather', {
                params: {
                    lat: location.latitude,
                    lon: location.longitude
                }
            })
            .then( (response) => {
                let cityTemperature = changeKelvinToFaren(response.data.main.temp);
                state.tempValue.textContent = state.temperature = cityTemperature;
            })
}

const handleRealtimeTemperatureClicked = () => {
    getLocationData()
        .then( (location) => getWeatherDataFromLocation(location))
        .then( () => setTempDisplay());
}

const handleSkySelectOption = () => {
    console.log("hey the sky is falling");
    const weatherPatterns = {
        pride: ['🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈', 'sunny'],  
        sunny: ['☁️ ☁️ ☁️ ☀️ ☁️ ☁️', 'sunny'],
        cloudy: ['☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️', 'cloudy'],
        rainy: ['🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧', 'rainy'],
        snowy: ['🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨', 'snowy']
    };
    state.sky.textContent = weatherPatterns[state.skySelect.value][0];
    // state.gardenContent.classList.toggle(state.gardenContent.classList, weatherPatterns[state.skySelect.value][1]);
    // state.gardenContent.style = weatherPatterns[state.skySelect.value][1];
}

const handleResetButtonClicked = () => {
    state.cityNameInput.value = state.headerCityName.textContent = 'Los Angeles';
    handleRealtimeTemperatureClicked();
}

const registerEventHandlers = () => {
    loadControls();
    setTempDisplay();
    state.increaseTempButton.addEventListener("click", handleIncreaseTempClicked);
    state.decreaseTempButton.addEventListener("click", handleDecreaseTempClicked);
    state.cityNameInput.addEventListener("input", handleCityNameInput);
    state.currentTempButton.addEventListener("click", handleRealtimeTemperatureClicked);
    state.skySelect.addEventListener("change", handleSkySelectOption);
    state.resetButton.addEventListener("click", handleResetButtonClicked);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// add button to state object -done
// add event listener for button -done
// add handleButtonClicked for weather button
    // button fetches location information from button
    // .then take the locationIQ response and send it to weather API
    // .then make updates to the temperature state 

    // localhost5000/location
    // localhost5000/weather

// our weather-report calls the proxy server with a GET request to location
// the proxy server forwards that GET request to locationIQ and returns it 
// then weather report takes the location response and sends a GET request to
// the proxy server, which forwards the GET request to WEATHER and returns it
// all the way back to our weather report website 


//HTML "change" for select option in wave 5
//working in skySelect
//state.skySelect.addEventListener("change", handleSkySelectOption)

// this is a comment
