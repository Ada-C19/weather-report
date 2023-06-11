"use strict";

const state = {
    temperature: 80,
    city: 'New York'
};

const increaseTemperature = () => {
    state.temperature += 1;
    updateColorLandscape();
}

const decreaseTemperature = () => {
    state.temperature -= 1;
    updateColorLandscape();
}

function updateColorLandscape() {
    tempValue.textContent = state.temperature;

    if (state.temperature >= 80) {
        tempValue.className = "red";
        landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temperature >= 70 && state.temperature <= 79) {
        tempValue.className = "orange";
        landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperature >= 60 && state.temperature <= 69) {
        tempValue.className = "yellow";
        landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.temperature >= 50 && state.temperature <= 59) {
        tempValue.className = "green";
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (state.temperature <= 49) {
        tempValue.className = "teal";
        landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    headerCityName.textContent = cityNameInput.value;
}

increaseTempControl.addEventListener("click", increaseTemperature);
decreaseTempControl.addEventListener("click", decreaseTemperature);

cityNameInput.addEventListener("input", updateColorLandscape);

currentTempButton.addEventListener("click", function() {
    findLatitudeLongitude()
});

cityNameReset.addEventListener("click", function() {
    cityNameInput.value = "";
    state.temperature = 80;
    updateColorLandscape();
});


// Axios Calls
const findLatitudeLongitude = () => {
    let latitude;
    let longitude;

    axios.get('http://localhost:5000/location', {
    params: {
        q: state.city,
    format: 'json',
}})
    .then((response) => {
        latitude = response.data[0].lat;
        longitude = response.data[0].lon;
        console.log('success in findLatitudeLongitude!', latitude, longitude);
        getTemperature(latitude, longitude);
    })
    .catch((error) => {
        console.log('error!');
    });
};

const getTemperature = (latitude, longitude) => {
    axios.get('http://localhost:5000/weather',
    {
    params: {
    format: 'json',
    lat: latitude,
    lon: longitude }
})
    .then( (response) => {
    console.log('success in findLocation!', response.data);
    const kelvin = response.data.main.temp;
    const far = Math.round((9/5) * (kelvin - 273) + 32);
    updateTemperature(far);
    })
    .catch((error) => {
    console.log('error in getTemperature!');
    });
}

const updateTemperature = function(far) {
    state.temperature = far;
    const updatedTemp = document.getElementById('tempValue');
    updatedTemp.textContent = `${state.temperature}`;
    updateLandscape();
}

const updateCity = () => {
    const cityName = document.querySelector('#cityNameInput');
    cityName.addEventListener('change', getWeather);

    const getWeather = (inputVal) => {
        city = inputVal;
        state.city = inputVal;
        findLatitudeLongitude(state.city);
    }
};
