const state = {
    tempValue: 70,
    tempLabel: null,
    emoji: null,
    cityLabel: null,
    cityValue: null,
    currentTempButton: null,
    currentTemp: null,
    skySelector: null,
    skyVibeEmoji:  null,
};

const selectSky = (event) => {
    const sky = event.target.value;

    if (sky == "Sunny") {
        state.skyVibeEmoji.textContent = "☁️ ☁️ ☁️ ☀️ ☀️ ☀️ ☁️ ☁️ ☁️";
    } else if (sky == "Cloudy") {
        state.skyVibeEmoji.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (sky == "Rainy") {
        state.skyVibeEmoji.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else {
        state.skyVibeEmoji.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";   
    }
};

const updateUI = () =>  {
    state.tempLabel.textContent = state.tempValue;
}; 


const updateCity = (event) => {
    state.cityValue = event.target.value
    state.cityLabel.textContent = state.cityValue;
    return state.cityValue;
};

const resetCity = () => {
    state.cityLabel.textContent = "Las Vegas";
    state.cityValue = state.cityValue.defaultValue;
};

const getLocationData = () => {
    let location = state.cityValue;
    return axios
    .get('http://localhost:5000/location', {
        params: {
            q: location,
        },
    })
    .then((response) => {
            const {lat, lon} = response.data[0];
        getWeatherData({lat, lon});
    })
    .catch((error)=> {
        console.log('location fetch failed')
    });
};
    

const getWeatherData = (location) => {
    let locationData = location
        axios
        .get('http://localhost:5000/weather', {
            params: {
                lat: locationData.lat,
                lon: locationData.lon,
            },
        })
        .then(response => {
            const temp  = response.data.main.temp;
            state.tempValue = kelvinToFahrenheit(temp);
            updateUI()
        }) 
        .catch((error)=> {
            console.log('weather fetch failed')
        });
};

const kelvinToFahrenheit = (k) => {
    const temp = Math.floor((k - 273.15) * 9/5 + 32); 
    return temp
}; 

const handleRealTimeButtonClick = () => {
    console.log('real time click');
    getLocationData();
};

const increaseTemp = () => {
    ++state.tempValue;
    updateUI();


    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
};


const decreaseTemp = () => {
    --state.tempValue;
    updateUI();


    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
}; 


const registerEventHandlers = () => {
    const topButton = document.querySelector("#increaseTempControl");
topButton.addEventListener("click", increaseTemp);
    const bottomButton = document.querySelector("#decreaseTempControl");
bottomButton.addEventListener("click", decreaseTemp);
    const cityButton = document.querySelector("#cityNameInput");
cityButton.addEventListener("input", updateCity);
    const realTempButton = document.querySelector("#currentTempButton");
realTempButton.addEventListener("click", handleRealTimeButtonClick); 
    const skyButton = document.querySelector("#skySelect");
skyButton.addEventListener("change", selectSky);
const resetButton = document.querySelector("#cityNameReset");
resetButton.addEventListener("click", resetCity);
};


const loadControls = () => {
    state.tempLabel = document.getElementById("tempLabel");
    state.emoji = document.getElementById("landscape");
    state.cityLabel = document.getElementById("headerCityName");
    state.cityValue = document.getElementById("cityNameInput").value;
    state.currentTempButton = document.getElementById("currentTempButton");
    state.skySelector = document.getElementById("skySelect");
    state.skyVibeEmoji = document.getElementById("sky");
    state.cityResetButton = document.getElementById("cityNameReset");
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

loadControls();

