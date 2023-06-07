const state = {
    temp: 72, 
    city: "Seattle", 
    lat: 47.6038321, 
    long: -122.3300624
};

const axios = require('axios'); 
const proxyLocation = "http://127.0.0.1:5000/location";
const proxyWeather = "http://127.0.0.1:5000/weather";

const convertKtoF = (temp) => {
    return (temp - 273.15) * (9/5) + 32;
};

const findCoordinates = () => {
    let latitude, longitude; 

    axios.get(proxyLocation, {params: {
        q: state.city, 
    }})
    .then((response) => {
        state.lat = response.data[0].lat;
        state.long = response.data[0].lon;
        getWeather();
    })
    .catch( (error) => {
        console.log('error in findCoordinates!');
      });
};

const getWeather = () => {
    axios.get(proxyWeather, {params: {
        lat: state.lat,
        long: state.long
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
    updateTemp();
};

const decreaseTemp = () => {
    state.temp -= 1;
    updateTemp();
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

}

const updateCity = () => {
    const cityInput = document.getElementById('cityNameInput').value;
    const headerCity = document.getElementById('cityName');
    state.city = cityInput;
    headerCity.textContent = state.city;
}

const registerEventHandlers = () => {
    updateTempLandscape();
    const increaseButton = document.getElementById("increase_temp");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.getElementById("decrease_temp");
    decreaseButton.addEventListener("click", decreaseTemp);

    updateCity();
    const cityInput = document.getElementById('cityNameInput');
    cityInput.addEventListener("input", updateCity);
}


document.addEventListener("DOMContentLoaded", registerEventHandlers);