
const state = {
    increaseTempButton: null,
    decreaseTempButton: null,
    tempDeg: 0,
    landscape: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
    cityNameOutput : null,
    cityNameInput: null,
    cityName : "Seattle",
    currentWeatherButton : null,

};

const setDefaultValues = () => {
    state.cityNameInput.value = `${state.cityName}`;
    state.cityNameOutput.textContent = `${state.cityName}`;
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
};



const increaseTemp = () => {
    state.tempDeg += 1;
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = `${state.tempDeg}`
    changeColor(tempValue);
    changeLandscape(tempValue);
};

const decreaseTemp = () => {
    state.tempDeg -= 1;
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = `${state.tempDeg}`;
    changeColor(tempValue);
    changeLandscape(tempValue);
};

const changeColor = () => {
    const tempValue = document.getElementById("tempValue");
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
    const tempValue = document.getElementById("tempValue");
    let currentTemp = tempValue.textContent;
    const landscapeElement = document.getElementById("landscape");
    // let currentLandscape = landscape.textContent;
    if (currentTemp >= 80) {
        state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        landscapeElement.textContent = `${state.landscape}`;
    } else if (currentTemp >= 70) {
        state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
        landscapeElement.textContent = `${state.landscape}`;
    } else if (currentTemp >= 60) {
        state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
        landscapeElement.textContent = `${state.landscape}`;
    } else {
        state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
        landscapeElement.textContent = `${state.landscape}`;
    }
};


const displayCityName = (event) => {
    const cityInput = event.target.value; //text value
    state.cityNameOutput.textContent = cityInput;
};

const displayCurrentWeather = () => {
    const weather = findLatAndLon();
    // console.log(currentTemp)
    // const convertedTemp = (currentTemp - 273.15);
    // // const conv = (currentTemp - 273.15) * 9/5 + 32;
    // tempValue.textContent = `${convertedTemp}`;
    
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
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = `${state.tempDeg}`

        
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