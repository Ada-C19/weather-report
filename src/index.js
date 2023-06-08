// elements
let temperatureLabel = null;
let temperatureIncreaseButton = null;
let temperatureDecreaseButton = null;
let getRealtimeTemperatureButton = null;
let skyImage = null;
let landscapeImage = null;
let cityNameInput = null;
let cityNameResetButton = null;

// values
let temperatureValue = 72;
let defaultCityName = 'Denver';

// helper functions
const setTempLabelColor = (temperature) => {
    if (temperature >= 80) {
        return temperatureLabel.setAttribute("class", "red");
    } else if (temperature >= 70) {
        return temperatureLabel.setAttribute("class", "orange");
    } else if (temperature >= 60) {
        return temperatureLabel.setAttribute("class", "yellow");
    } else if (temperature >= 50) {
        return temperatureLabel.setAttribute("class", "green");
    } else {
        return temperatureLabel.setAttribute("class", "teal");
    }
};

const landscapeImages = {
    80: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    70: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    60: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    50: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
};

const setLandscapeImage = temperature => {
    if (temperature >= 80) {
        return landscapeImages[80];
    } else if (temperature >= 70) {
        return landscapeImages[70];
    } else if (temperature >= 60) {
        return landscapeImages[60];
    } else {
        return landscapeImages[50];
    }
};

const updateTemperature = () => {
    temperatureLabel.textContent = temperatureValue;
    landscapeImage.textContent = setLandscapeImage(temperatureValue);
    setTempLabelColor(temperatureValue);
};

const getCoordinates = async (placeName) => {
    const response = await axios.get('http://127.0.0.1:5000/location', {
        params: {
            q: placeName,
        },
    });

    const { lat: latitude, lon: longitude } = response.data[0];
    return { latitude, longitude };
}

const getWeather = async (coordinates) => {
    const response = await axios.get('http://127.0.0.1:5000/weather', {
        params: {
            lat: coordinates["latitude"],
            lon: coordinates["longitude"],
        },
    });

    return response.data["main"]["temp"];
};

const loadControls = () => {
    temperatureLabel = document.getElementById("tempValue");
    temperatureDecreaseButton = document.getElementById("decreaseTempControl");
    temperatureIncreaseButton = document.getElementById("increaseTempControl");
    getRealtimeTemperatureButton = document.getElementById("currentTempButton");
    skyImage = document.getElementById("sky");
    landscapeImage = document.getElementById("landscape");
    cityNameLabel = document.getElementById("headerCityName");
    cityNameInput = document.getElementById("cityNameInput");
    cityNameResetButton = document.getElementById("cityNameReset");
};

const handleTemperatureDecreaseButtonClick = () => {
    temperatureValue -= 1;
    updateTemperature();
};

const handleTemperatureIncreaseButtonClick = () => {
    temperatureValue += 1;
    updateTemperature();
};

const handleCityNameInputChange = () => {
    cityNameLabel.textContent = cityNameInput.value;
};

const handleCityNameResetButton = () => {
    cityNameLabel.textContent = defaultCityName;
    cityNameInput.value = defaultCityName;
};

const handleGetRealtimeTemperatureButtonClick = async () => {
    const coordinates = await getCoordinates(cityNameInput.value);
    const temperature = await getWeather(coordinates);
    temperatureValue = Math.floor((temperature - 273.15) * 9/5 + 32);
    updateTemperature();
};

const registerEvents = () => {
    temperatureDecreaseButton.addEventListener("click", handleTemperatureDecreaseButtonClick);
    temperatureIncreaseButton.addEventListener("click", handleTemperatureIncreaseButtonClick);
    getRealtimeTemperatureButton.addEventListener("click", handleGetRealtimeTemperatureButtonClick);
    cityNameResetButton.addEventListener("click", handleCityNameResetButton);
    cityNameInput.addEventListener("input", handleCityNameInputChange);
};

const showTemp = () => {
    temperatureLabel.textContent = temperatureValue;
}; 

const showCity = () => {
    cityNameLabel.textContent = defaultCityName;
    cityNameInput.value = defaultCityName;
}; 

const onLoad = () => {
    loadControls();
    registerEvents();
    showTemp();
    showCity();
};

onLoad();