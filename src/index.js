
//Wave 1
const state = {
    // HTML elements
    currentTempButton: null,
    increaseTempControl: null,
    decreaseTempControl: null,
    landscapeDiv: null,
    // Data
    tempValue: null,
    tempCount: 55, // change this to the const for temp pulled in from API?
    skySelection: null,
    skyDiv: null,
    cityNameInput: null,
    cityNameHeader: null,
    resetButton: null,
};

const loadControls = () => {
    // Retrieve references to all HTML elements we need to access
    state.increaseTempControl = document.getElementById("increaseTempControl");
    state.decreaseTempControl = document.getElementById("decreaseTempControl");
    state.tempValue = document.getElementById("tempValue");
    state.currentTempButton = document.getElementById("currentTempButton");
    state.skySelection = document.getElementById("skySelect");
    state.skyDiv = document.getElementById("sky");
    state.landscapeDiv = document.getElementById("landscape");
    state.cityNameInput = document.getElementById('cityNameInput');
    state.cityNameHeader = document.getElementById("headerCityName");
    state.resetButton = document.getElementById("cityNameReset");
};

const handleCurrentTempClick = (event) => {
    // function to call API for current temp based on geo coordinates (will pull in Kelvin)
    // display the API data in the tempValue element
    displayLandscape();
    console.log("clicked");
};

const handleIncreaseTempClick = (event) => {
    // When clicking on the increase temp button, the temp value should increase by 1
    state.tempCount += 1;
    state.tempValue.textContent = state.tempCount;
};

const handleDecreaseTempClick = (event) => {
    // When clicking on the decrease temp button, the temp value should decrease by 1
    state.tempCount -= 1;
    state.tempValue.textContent = state.tempCount;
};

const displayLandscape = (event) => {
    if (state.tempCount < 59) {
        state.landscapeDiv.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    } else if (state.tempCount <= 69) {
        state.landscapeDiv.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (state.tempCount <= 79) {
        state.landscapeDiv.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (state.tempCount >= 80) {
        state.landscapeDiv.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
}};

const temperatureColor = (event) => {
    pass
};

const displaySky = (event) => {
    if (state.skySelection.value === "sunny") {
        state.skyDiv.textContent = "☀️☀️☀️☀️☀️☀️";
    } else if (state.skySelection.value === "cloudy") {
        state.skyDiv.textContent = "☁️☁️⛅☁️☁️☁️";
    } else if (state.skySelection.value === "rainy") {
        state.skyDiv.textContent = "☁️☔️☁️☁️☔️☁️";
    } else if (state.skySelection.value === "snowy") {
        state.skyDiv.textContent = "☁️❄️☁️❄️☁️❄️";
    }
};

const changeCity = (event) => {
    const value = state.cityNameInput.value;
    state.cityNameHeader.textContent = value;
};

const resetCityName = (event) => {
    state.cityNameInput.value = "";
    state.cityNameHeader.textContent = "";
};

const registerEvents = (event) => {
    state.increaseTempControl.addEventListener("click", handleIncreaseTempClick);
    state.decreaseTempControl.addEventListener("click", handleDecreaseTempClick);
    state.currentTempButton.addEventListener("click", handleCurrentTempClick);
    state.skySelection.addEventListener("change", displaySky);
    state.cityNameInput.addEventListener("input", changeCity);
    state.resetButton.addEventListener("click", resetCityName);
};

const onLoad = () => {
    // do what we need to do when the page loads
    loadControls();
    registerEvents();
};

document.addEventListener("DOMContentLoaded", onLoad);


// WAVE 4
//How to make an API call using OpenWeather
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={WEATHER_KEY}
const findLatitudeAndLongtitude = (latitude,longitude) => {
    axios.get('https://us1.locationiq.com/v1/search.php',
    { 
    params: {
        key: LOCATION_KEY,	
        format: 'json',
        lat: latitude,
        lon: longitude
    }
})
    .then( (response) => {
        latitude = response.data[0].lat;
        longtitude = response.data[0].lon;
    })
    .catch( (error) => {
        console.log("hey this error works!")
    })};