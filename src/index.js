"use strict";

const state = {
    degrees: 62,
    cityName: "Seattle",
};

// Wave 2
const increaseTemp = (event) => {
    state.degrees += 1;
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};

const decreaseTemp = (event) => {
    state.degrees -= 1;
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};

const tempColorLandscape = () => {
    let temp = state.degrees;
    let color = 'yellow';
    let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    if (temp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60) {
        color = 'yellow';
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'green';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        color = 'teal';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const tempNum = document.getElementById('degrees');
    tempNum.style.color = color;

    const newLandscape = document.getElementById('landscape-emojis');
    newLandscape.textContent = landscape;

};

// Wave 3
const changecityName = (event) => {
    state.cityName = document.getElementById("name").value;
    const city = document.getElementById("city");
    city.textContent = state.cityName;
}

// Wave 4
const getWeather = async () => {
    let cityLat = 0
    let cityLon = 0
    await axios.get('http://127.0.0.1:5000/location', { params: {q: state.cityName, format: 'json'}})
        .then((result)=> {
            cityLat = result.data[0]['lat'];
            cityLon = result.data[0]['lon'];
        })
    const getTemp = async () => {
        await axios.get('http://127.0.0.1:5000/weather', { params: {lat: cityLat, lon: cityLon, format: 'json'}})
            .then((result) => {
                const temp = ((result.data["main"]["temp"])-273) * 1.8 + 32;
                state.degrees = Math.round(temp);
                const degreeCount = document.getElementById('degrees');
                degreeCount.textContent = state.degrees;
                tempColorLandscape();
            })
    }
    getTemp();
}

// Wave 5
const changeLandscape = (event) => {
    let weatherState = document.getElementById("skySelect").value;
    const skyEmojis = document.getElementById("sky-emojis");
    const backgroundColor = document.getElementById('weather-box');
    const pageBackground = document.body
    if (weatherState === "Sunny") {
        skyEmojis.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
        backgroundColor.style.backgroundColor = 'DeepSkyBlue';
        pageBackground.style.backgroundImage = 'url("../assets/sunny-sky.jpeg")'

    }
    else if (weatherState === "Cloudy") {
        skyEmojis.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        backgroundColor.style.backgroundColor = 'LightGray';
        pageBackground.style.backgroundImage = 'url("../assets/cloudy-sky.jpeg")'
    }
    else if (weatherState === "Rainy") {
        skyEmojis.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        backgroundColor.style.backgroundColor = 'DarkGray';
        pageBackground.style.backgroundImage = 'url("../assets/rainy-sky.jpeg")'
    }
    else if (weatherState === "Snowy") {
        skyEmojis.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        backgroundColor.style.backgroundColor = 'AliceBlue';
        pageBackground.style.backgroundImage = 'url("../assets/snow-sky.jpeg")'
    }
}

//Wave 6
const resetCity = () => {
    state.cityName = "Seattle"
    const city = document.getElementById("city");
    city.textContent = state.cityName;
    document.getElementById("name").value = "";
    getWeather();
}


const registerEventHandlers = (event) => {
    // Wave 2
    const upButton = document.getElementById('up');
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.getElementById('down');
    downButton.addEventListener("click", decreaseTemp);

    // Wave 3
    const changeCity = document.getElementById('name');
    changeCity.addEventListener("input", changecityName);

    // Wave 4
    const realTimeButton = document.getElementById('realTimeButton');
    realTimeButton.addEventListener("click", getWeather);

    // Wave 5
    const weatherSelect = document.getElementById('skySelect');
    weatherSelect.addEventListener("change", changeLandscape);

    // Wave 6
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener("click", resetCity)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);