const state = {
    temp: 72, 
    city: "Seattle"
}

const API = /weather-report-proxy-server/routes.py

const findCoordinates = () => {
    let latitude, longitude; 

    axios.get(API, {params: {
        q: document.getElementById('cityName'), 
    }})
    .then((response) => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
    })
    .catch( (error) => {
        console.log('error in findLatitudeAndLongitude!');
      });
    
      return {
        lat: latitude,
        lon: longitude
    }
}

const increaseTemp = () => {
    state.temp += 1;
    updateTemp();
};

const decreaseTemp = () => {
    state.temp -= 1;
    updateTemp();
}

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