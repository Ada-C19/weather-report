
const state = {
    tempDeg: 0,
    defaultLandscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
    defaultColor: "teal",
    cityName : "Seattle",
    increaseTempButton: null,
    decreaseTempButton: null,
    tempValue: null, 
    landscape: null,
    cityNameOutput : null,
    cityNameInput: null,
    currentWeatherButton : null,

};

const setDefaultValues = () => {
    state.cityNameInput.value = `${state.cityName}`;
    state.cityNameOutput.textContent = `${state.cityName}`;
    state.landscape.textContent = `${state.defaultLandscape}`;
    tempValue.style.color = state.defaultColor;
};

const registerEventHandlers = () => {
    state.increaseTempButton.addEventListener("click", increaseTemp, changeColor, changeLandscape);
    state.decreaseTempButton.addEventListener("click", decreaseTemp, changeColor, changeLandscape);
    state.currentWeatherButton.addEventListener("click", displayCurrentWeather);
    state.cityNameInput.addEventListener("input", displayCityName); 
};

const loadControls = () => {
    state.increaseTempButton = document.getElementById("increaseTempControl");
    state.decreaseTempButton = document.getElementById("decreaseTempControl");
    state.cityNameInput = document.getElementById("cityNameInput");
    state.cityNameOutput = document.getElementById("headerCityName");
    state.currentWeatherButton = document.getElementById("currentTempButton");
    state.tempValue = document.getElementById("tempValue"); 
    state.landscape = document.getElementById("landscape");
};

const increaseTemp = () => {
    state.tempDeg += 1;
    tempValue.textContent = `${state.tempDeg}`
    changeColor();
    changeLandscape();
};

const decreaseTemp = () => {
    state.tempDeg -= 1;
    tempValue.textContent = `${state.tempDeg}`;
    changeColor();
    changeLandscape();
};

const changeColor = () => {
    let currentTemp = tempValue.textContent;
    if (currentTemp >= 80) {
        tempValue.style.color = "red";
    } else if (currentTemp >= 70) {
        tempValue.style.color = "orange";
    } else if (currentTemp >= 60) {
        tempValue.style.color = "yellow";
    } else if (currentTemp >= 50) {
        tempValue.style.color = "green";
    } else {
        tempValue.style.color = "teal";
    }
};

const changeLandscape = () => {
    let currentTemp = tempValue.textContent;
    if (currentTemp >= 80) {
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        landscape.textContent = `${state.landscape}`;
    } else if (currentTemp >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
        landscape.textContent = `${state.landscape}`;
    } else if (currentTemp >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
        landscape.textContent = `${state.landscape}`;
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
        landscape.textContent = `${state.landscape}`;
    }
};

const displayCityName = (event) => {
    const cityInput = event.target.value; 
    state.cityNameOutput.textContent = cityInput;
};

const displayCurrentWeather = () => {
    findLatAndLon();
}

const findLatAndLon= (query) => {
    let latitude, longitude;
    axios.get('http://localhost:5000/location',
    {
        params: {
            q: `${state.cityNameOutput.textContent}`,
            format: 'json'
        }
})
.then( (response) => {
    latitude = response.data[0].lat;
    longitude = response.data[0].lon;
    console.log('success in findLatAndLon', latitude, longitude)
        
    findWeather(latitude, longitude); 
})
.catch( (error) => {
    console.log('error in findLatAndLon!');
})
};

const findWeather = (latitude, longitude) => {
    axios.get('http://localhost:5000/weather',
    {
        params: {
            format: 'json',
            lat: latitude,
            lon: longitude
        }
    })
    .then( (response) => {
    
    console.log('success in findWeather!', response.data.main.temp);
    state.tempDeg = Math.round((response.data.main.temp - 273.15) * 9/5 + 32);
    tempValue.textContent = `${state.tempDeg}`
    changeColor();
    changeLandscape();
    })
    .catch( (error) => {
        console.log('error in findWeather!');
    });
}

const onLoaded = () => {
    loadControls();
    setDefaultValues();
    registerEventHandlers();
};

onLoaded();