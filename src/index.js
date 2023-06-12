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
    state.tempValue.textContent = ++state.temperature;
    setTempDisplay();
};

const handleDecreaseTempClicked = () => {
    state.tempValue.textContent = --state.temperature;
    setTempDisplay();
}; 

const setTempDisplay = () => {
    let displayIdentifier = Math.floor(state.temperature / 10); 
    let displayIndex = displayIdentifier < 4 ? 0: displayIdentifier > 8 ? 4: displayIdentifier - 4;

    const displayLibrary = [
        ['teal', '❄️☃️❄️☃️❄️☃️❄️☃️❄️'], // 49 and below
        ['green', '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲'], // 50 to 59
        ['yellow', '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃'], // 60 to 69
        ['orange', '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷'], // 70 to 79
        ['red', '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'] // 80 and above
    ];

    state.tempValue.classList = '';
    state.tempValue.classList.add(displayLibrary[displayIndex][0]);
    state.landscape.textContent = displayLibrary[displayIndex][1];
}

const handleCityNameInput = () => {
    state.headerCityName.textContent = state.cityNameInput.value;
};

const getLocationData = () => {
    let cityInput = state.cityNameInput.value;
    return axios
        .get('http://127.0.0.1:5000/location', {params: {q:cityInput}})
        .then((response) => {
            let lat = response.data[0].lat;
            let lon = response.data[0].lon;
            return {latitude: lat, longitude: lon};
        })
        .catch( (error) => {
            console.log('error in finding location data');
        });
}

const getWeatherDataFromLocation = (location) => {
    const changeKelvinToFahren = (temperature) => { 
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
                let cityTemperature = changeKelvinToFahren(response.data.main.temp);
                return cityTemperature
            })
}

const handleRealtimeTemperatureClicked = () => {
    getLocationData()
        .then( (location) => getWeatherDataFromLocation(location))
        .then( (cityTemperature) => {
            state.tempValue.textContent = cityTemperature;
            state.temperature = cityTemperature;
            setTempDisplay();
        });
}

const handleSkySelectOption = () => {
    const weatherPatterns = {
        pride: ['🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈', 'lightpink'],  
        sunny: ['☁️ ☁️ ☁️ ☀️ ☁️ ☁️', 'rgb(221, 255, 255)'],
        cloudy: ['☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️', 'lightgrey'],
        rainy: ['🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧', 'lightblue'],
        snowy: ['🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨', 'lightsteelblue']
    };
    state.sky.textContent = weatherPatterns[state.skySelect.value][0];
    state.gardenContent.style.backgroundColor = weatherPatterns[state.skySelect.value][1];

    //rainbow gradient graveyard RIP
    // state.gardenContent.classList = '';
    // state.gardenContent.classList.toggle(state.gardenContent.classList, weatherPatterns[state.skySelect.value][1]);
    // if (state.skySelect.value === pride) {
    //     state.gardenContent.backgroundImage = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)';
    }

const handleResetButtonClicked = () => {
    state.cityNameInput.value = 'Los Angeles';
    state.headerCityName.textContent = 'Los Angeles';
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