/***********************************************************
            Temperature variables and controls
***********************************************************/

const tempDisplay = document.getElementById("temp-display");
let temperature = parseInt(tempDisplay.textContent);

const updateTemperature = () => {
    tempDisplay.textContent  = temperature;
    if (temperature >= 27) {
        tempDisplay.style.color = "red";
    } else if (temperature >= 21) {
        tempDisplay.style.color = "orange"
    } else if (temperature >= 16) {
        tempDisplay.style.color = "yellow"
    } else if (temperature >= 10) {
        tempDisplay.style.color = "green"
    } else {
        tempDisplay.style.color = "teal"
    }
};

/***********************************************************
            Landscape variables and controls
***********************************************************/

const gardenEmoji = document.getElementById("garden-emoji");
let landscape = gardenEmoji.textContent;

const updateLandscape = () => {
    if (temperature >= 27) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        updateSkyEmoji("sunny");
        weatherGardenBackground("sunny");
    } else if (temperature >= 15) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
        updateSkyEmoji("cloudy");
        weatherGardenBackground("cloudy");    
    } else if (temperature >= 6) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
        updateSkyEmoji("rainy");
        weatherGardenBackground("rainy");    
    } else {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        updateSkyEmoji("snowy");
        weatherGardenBackground("snowy");    
    } 
    document.getElementById("garden-emoji").textContent = landscape;
};

/***********************************************************
            City variables and controls

    Note: we explored using HTML attributes like "onkeyup"
    and "onclick" instead of addEventListener for these
***********************************************************/

const updateCity = (value) => {
    document.getElementById("header-city").textContent = value;
};
const resetCity = () => {
    document.getElementById("city-input").value = "Seattle";
    updateCity("Seattle");
};

/***********************************************************
            Sky variables and controls

    Note: we used the HTML attribute "onchange" instead of
    addEventListener for this one
***********************************************************/

const skyOptions = {
    sunny: "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    cloudy: "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
    rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
    snowy: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
};

const updateSkyEmoji = (selectedOption) => {
    const skyEmoji = document.getElementById("sky-emoji");
    skyEmoji.textContent = skyOptions[selectedOption];
    weatherGardenBackground(selectedOption)
};

/***********************************************************
            All EventHandler Registrations
***********************************************************/

const registerEventHandlers = () => {
    // Increase temperature
    const raiseTemp = document.getElementById("raise-temp");
    raiseTemp.addEventListener("click", () => {
        temperature++;
        updateTemperature();
        updateLandscape();
    });
    // Decrease temperature
    const lowerTemp = document.getElementById("lower-temp");
    lowerTemp.addEventListener("click", () => {
        temperature--;
        updateTemperature();
        updateLandscape();
    });
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


/***********************************************************
            Location and Weather API calls
***********************************************************/

const getLatAndLon = () => {
    const location = document.getElementById("city-input").value;
    axios
    .get("http://127.0.0.1:5000/location", { params: {q: location} })
    .then((result) => {
    const lat = result.data[0].lat;
    const lon = result.data[0].lon;
    getWeather(lat, lon);
    });
};

const getWeather = (lat_query, lon_query) => {
    axios
    .get("http://127.0.0.1:5000/weather", { params: {lat: lat_query, lon: lon_query} })
    .then((result) => {
        const kelvin = result.data.main.temp;
        if (convertButton.textContent === "°C") {
            temperature = Math.round(kelvin - 273.15);
        } else {
            temperature = Math.round((kelvin - 273.15) * (9/5) + 32);
        }
        
        updateTemperature();
    })
};

const tempButton = document.getElementById("temp-button");
tempButton.addEventListener("click", () => {
    getLatAndLon();
});

/***********************************************************
            Celsius to Fahrenheit Conversions
***********************************************************/

const convertButton = document.getElementById("converter");
convertButton.addEventListener("click", () => {
    if (convertButton.textContent === "°C") {
        convertButton.textContent = "°F";
        temperature = Math.round((temperature * 9/5) + 32);
    } else {
        convertButton.textContent = "°C";
        temperature = Math.round((temperature - 32) * 5/9);
    }
    updateTemperature();
});

/***********************************************************
            Background changes with sky
***********************************************************/

const gardenColors = {
        sunny: "ivory",
        cloudy: "lavender",
        rainy: "lightsteelblue",
        snowy: "lightcyan",
};
const weatherGardenBackground = (selectedOption) => {
        const weatherGarden = document.getElementById("garden-sky");
        weatherGarden.style.background = gardenColors[selectedOption];
    };