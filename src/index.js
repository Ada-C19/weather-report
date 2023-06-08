const state = {
    increaseTempControl: null,
    decreaseTempControl: null,
    tempValue: 72,
    tempColor: null,
    sky: null,
    landscape: null,
    cityNameInput: null,
    headerCityName: null,
    lat: null,
    lon: null,
    cityName: "Seattle",
}

const handleTempColor = (tempValue) => {
    if (tempValue >= 80) state.tempColor = "red"; 
    else if (tempValue >= 70 && tempValue < 80) state.tempColor = "orange";
    else if (tempValue >= 60 && tempValue < 70) state.tempColor = "yellow";
    else if (tempValue >= 50 && tempValue < 60) state.tempColor = "green";
    else if (tempValue < 50) state.tempColor = "teal";
}

const handleWeatherGarden = (tempValue) => {
    if (tempValue >= 80) state.landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    else if (tempValue >= 70 && tempValue < 80) state.landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    else if (tempValue >= 60 && tempValue < 70) state.landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    else if (tempValue < 60) state.landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
}

const handleTempUpdate = () => {
    handleTempColor(state.tempValue);
    handleWeatherGarden(state.tempValue)
    document.getElementById("tempValue").style.color = state.tempColor;
    document.getElementById("tempValue").innerHTML = state.tempValue;
    document.getElementById("landscape").innerHTML = state.landscape;
}

const handleTempBtnClick = (direction) => {
    if (direction === "up") {
        state.tempValue += 1; 
    }
    else if (direction === "down") {
        state.tempValue -= 1;
    }
    handleTempUpdate();
}

const handleLatLon = () => {
    axios.get('127.0.0.1:5000/location',
    {
        params: {
        q: state.cityName
        }
    })
    .then((response) => {
        state.lat = response.data[0].lat;
        state.lon = response.data[0].lon;
        handleWeather()
    })
}

const convertToFah = (temp) => {
    Math.floor((temp - 273.15) * 9/5 + 32)
}

const handleWeather = () => {
    axios.get('127.0.0.1:5000/weather',
    {
        params: {
        lat: state.lat,
        lon: state.lon
        }
    })
    .then( (response) => {
        state.tempValue = convertToFah(response);
        handleTempUpdate()
    });
    }

const handleCityName = (input) => {
    state.cityName = input;
    state.headerCityName.innerHTML = state.cityName;
}

const loadControls = () => {
    state.increaseTempControl = document.getElementById("increaseTempControl");
    state.decreaseTempControl = document.getElementById("decreaseTempControl");
    state.cityNameInput = document.getElementById("cityNameInput");
    state.headerCityName = document.getElementById("headerCityName");
    state.cityNameInput.value = state.cityName;
    state.headerCityName.innerHTML = state.cityName;
    document.getElementById("sky").innerHTML = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    handleTempUpdate();
}

const registerEvents = () => {
    state.currentTempButton.addEventListener("click", () => {
        handleLatLon(cityNameInput);
    })

    state.increaseTempControl.addEventListener("click", () => {
        handleTempBtnClick("up");
    })
    state.decreaseTempControl.addEventListener("click", () => {
        handleTempBtnClick("down");
    })
    state.cityNameInput.addEventListener("input", (event) => {
        handleCityName(event.target.value)
    })
}
const onLoad = () => {
    loadControls();
    registerEvents();
}
onLoad();