// const axios = require("axios");

// state which displays the temperature number and background of temperature number
const state = {
    tempNum: 75
};

// function to display temperature
const displayTemp = () => {
    const tempContainer = document.getElementById("tempValue");
    tempContainer.textContent = `${state.tempNum}`;

    tempContainer.className = ``;

    if (state.tempNum > 79) {
        tempContainer.className = `${tempContainer.className} red`;
    } else if (state.tempNum > 69) {
        tempContainer.className = `${tempContainer.className} orange`;
    } else if (state.tempNum > 59) {
        tempContainer.className = `${tempContainer.className} yellow`;
    } else if (state.tempNum > 49) {
        tempContainer.className = `${tempContainer.className} green`;
    } else {
        tempContainer.className = `${tempContainer.className} teal`;
    }
}

// function to increase temperature
const increaseTemp = (event) => {
    state.tempNum += 1;
    displayTemp();
    displayLandscape();
}

// function to decrease temperature
const decreaseTemp = (event) => {
    state.tempNum -= 1;
    displayTemp();
    displayLandscape();
}

// function to display and change landscape depending on temp when DOMContentLoaded
const displayLandscape = () => {
    const landscapeContainer = document.getElementById("landscape");
    // landscapeContainer.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    
    if (state.tempNum > 79) {
        landscapeContainer.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (state.tempNum > 69) {
        landscapeContainer.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (state.tempNum > 59) {
        landscapeContainer.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else {
        landscapeContainer.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
}

// function to display city name
const displayCityName = () => {
    const cityInput = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");

    headerCityName.textContent = cityInput;
}

// function to clear city name
const clearCityName = () => {
    let cityInput = document.getElementById("cityNameInput");

    cityInput.value = "";
    displayCityName();
}

// function to call proxy server to get latitude and longitude
const findLatitudeAndLongitudeThenWeather = (query) => {
    axios.get('http://127.0.0.1:5000/location', 
    {
        params: {
            "q": query
        }
    })
    .then((response) => {
        let latitude = response.data[0].lat;
        let longitude = response.data[0].lon;
        console.log('sucess!', query, latitude, longitude);
        // return {"lat": latitude, "lon": longitude};
        findWeather(latitude, longitude);
    })
    .catch((error) => {
        console.log('error!', error)
    })
}

// function to call proxy server to get weather temp in Kelvin
const findWeather = (lat, lon) => {
    axios.get('http://127.0.0.1:5000/weather', 
    {
        params: {
            "lat": lat,
            "lon": lon,
        }
    })
    .then((response) => {
        let currentTemp = response.data.main.temp;
        console.log('sucess!', currentTemp)
    })
    .catch((error) => {
        console.log('error!', error)
    })
}

const registerEventHandlers = (event) => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    const decreaseTempButton = document.querySelector("#decreaseTempControl");
    const cityNameInputted = document.querySelector("#cityNameInput");
    const cityNameResetButton = document.querySelector("#cityNameReset");

    increaseTempButton.addEventListener("click", increaseTemp);
    decreaseTempButton.addEventListener("click", decreaseTemp);
    cityNameInputted.addEventListener("input", displayCityName);
    cityNameResetButton.addEventListener("click", clearCityName);

    findLatitudeAndLongitudeThenWeather('Seattle');
    displayTemp();
    displayLandscape();
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);