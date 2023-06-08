const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempValue: null,
    temperature: 69,
    landscape: null,
    cityNameInput: null,
    headerCityName: null,
    currentTempButton: null,
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
    state.tempValue = document.getElementById("tempValue");
    state.landscape = document.getElementById("landscape");
    state.cityNameInput = document.getElementById("cityNameInput");
    state.headerCityName = document.getElementById("headerCityName");
    state.currentTempButton = document.getElementById("currentTempButton");
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
    let displayIndex = displayIdentifier >= 5 ? displayIdentifier - 5 : 0;
    state.landscape.textContent = landscapeTexts[displayIndex];
}

const handleCityNameInput = () => {
    let cityInput = state.cityNameInput.value;
    state.headerCityName.textContent = cityInput;
};

const handleRealtimeTemperatureClicked = () => {
    let cityInput = state.cityNameInput.value;
    let latitude, longitude;
    axios
        // request is being received and returning status code 500
        .get('http://127.0.0.1:5000/location', {params: {q:cityInput}})
        .then((response) => {
            latitude = response.data[0].lat;
            longitude = response.data[0].lon;
            console.log('success in findLatitudeAndLongitude!', latitude, longitude);
        })
        .catch( (error) => {
            console.log('error in finding location data');
        });
    console.log(cityInput);
}

const registerEventHandlers = () => {
    loadControls();
    setTempDisplay();
    state.increaseTempButton.addEventListener("click", handleIncreaseTempClicked);
    state.decreaseTempButton.addEventListener("click", handleDecreaseTempClicked);
    state.cityNameInput.addEventListener("input", handleCityNameInput);
    state.currentTempButton.addEventListener("click", handleRealtimeTemperatureClicked);
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