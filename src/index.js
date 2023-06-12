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
    weatherWidget: null,
};


const updateWeatherWidget = (location) => {
    const lat = location.lat;
    const lon = location.lon;
    const url = `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=36.169&detailLon=-115.116&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`;
    state.weatherWidget.src = url;
};


const selectSky = (event) => {
    const sky = event.target.value;
    let body = document.getElementById("body")

    if (sky == "Sunny") {
        state.skyVibeEmoji.textContent = "☁️ ☁️ ☁️ ☀️ ☀️ ☀️ ☁️ ☁️ ☁️";
        body.style.backgroundImage = "url(assets/fon-nebo-oblaka-pejzazh-trava-12954.jpeg)";
    } else if (sky == "Cloudy") {
        state.skyVibeEmoji.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        body.style.backgroundImage = "url(assets/new-york-4725115-scaled.jpg";
    } else if (sky == "Rainy") {
        state.skyVibeEmoji.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
        body.style.backgroundImage = "url(assets/daisy-flowers-most-beautiful-rain-ec30kjmayewks2pj.jpg)";
    } else {
        state.skyVibeEmoji.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        body.style.backgroundImage = "url(assets/Snow_at_Wollman_Rink.0.jpeg)";   
    }
};

const updateUI = () =>  {
    state.tempLabel.textContent = state.tempValue;

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
        updateWeatherWidget({lat, lon});
        getWeatherData({lat, lon});
    })
    .catch((error)=> {
        console.log(error)
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
            updateUI();
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
};


const decreaseTemp = () => {
    --state.tempValue;
    updateUI();
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
    state.weatherWidget = document.getElementById("weatherWidget");
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

loadControls();

