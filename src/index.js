const state = {
    temp: 72, 
    city: "Seattle", 
    lat: 47.6038321, 
    long: -122.3300624
};


const proxyLocation = "http://127.0.0.1:5000/location";
const proxyWeather = "http://127.0.0.1:5000/weather";

 const convertKtoF = (temp) => {
     return (temp - 273.15) * (9/5) + 32;
 };

const findCoordinates = () => {
    axios.get(proxyLocation, {params: {
        q: state.city, 
    }})
    .then((response) => {
        state.lat = response.data[0].lat;
        state.long = response.data[0].lon;
        getWeather();
    })
    .catch((error) => {
        console.log('error in findCoordinates!', error.response);
      });
};

const getWeather = () => {
    axios.get(proxyWeather, {params: {
        lat: state.lat,
        lon: state.long
    }})
    .then((response) => {
        const weather = response.data;
        state.temp = Math.round(convertKtoF(weather.main.temp));
        updateTempLandscape();
    })
    .catch((error) => {
        console.log("Error getting the weather:", error);
    });
};

const increaseTemp = () => {
    state.temp += 1;
    updateTempLandscape();
};

const decreaseTemp = () => {
    state.temp -= 1;
    updateTempLandscape();
};

const updateTempLandscape = () => {
    let temp = state.temp;
    let color = "above80";
    let landscapeEmojis = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";

    if (temp >= 80) {
        color = "above80";
        landscapeEmojis = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    } else if (70 <= temp && temp < 80) {
        color = "seventies";
        landscapeEmojis = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    } else if (60 <= temp && temp < 70) {
        color = "sixties";
        landscapeEmojis = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (50 <= temp && temp < 60) {
        color = "fifties";
        landscapeEmojis = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        color = "below49";
        landscapeEmojis = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const temperature = document.getElementById('temp_value');
    temperature.className = color;
    temperature.textContent = String(state.temp);

    const landscape = document.getElementById("landscape");
    landscape.textContent = String(landscapeEmojis);

};

const updateSky = () => {
    const skyInput = document.getElementById("sky_selector").value;
    let sky = "";
    if (skyInput === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skyInput === "Sunny") {
        sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    } else if (skyInput === "Rainy") {
        sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
    const skyOutput = document.getElementById("sky");
    skyOutput.textContent = String(sky);
}

const updateCity = () => {
    const cityInput = document.getElementById('cityNameInput').value;
    const headerCity = document.getElementById('cityName');
    state.city = cityInput;
    headerCity.textContent = state.city;
};

const resetCity = () => {
    const cityInput = document.getElementById("cityNameInput");
    cityInput.value = "Seattle";
    updateCity();
}

const registerEventHandlers = () => {
    updateTempLandscape();
    const increaseButton = document.getElementById("increase_temp");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.getElementById("decrease_temp");
    decreaseButton.addEventListener("click", decreaseTemp);

    const realTimeButton = document.getElementById("current_temp_button");
    realTimeButton.addEventListener("click", findCoordinates);

    updateCity();
    const cityInput = document.getElementById('cityNameInput');
    cityInput.addEventListener("input", updateCity);

    updateSky();
    const skySelector = document.getElementById("sky_selector");
    skySelector.addEventListener("change", updateSky);

    resetCity();
    const resetButton = document.getElementById("cityNameReset");
    resetButton.addEventListener("click", resetCity);
    
};


document.addEventListener("DOMContentLoaded", registerEventHandlers);