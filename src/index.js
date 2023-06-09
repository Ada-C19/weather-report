/***********************************************************
            Temperature variables and controls
***********************************************************/

const tempDisplay = document.getElementById("temp-display");
let temperature = parseInt(tempDisplay.textContent);
// previous version:
// const tempDisplay = document.getElementById("temp-display");
// const tempString = tempDisplay.textContent;
// let temperature = parseInt(tempString);

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
// this code isn't necessary anymore:  
//initial temp display
// updateTemperature();


/***********************************************************
            Landscape variables and controls
***********************************************************/

const gardenEmoji = document.getElementById("garden-emoji");
let landscape = gardenEmoji.textContent;

const updateLandscape = () => {
    if (temperature >= 27) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temperature >= 15) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temperature >= 6) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } 
    document.getElementById("garden-emoji").textContent = landscape;
};

// previous version:
// const landscapes = {
//     "27+":	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
// 	"15": "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
// 	"6": "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
//     "5 or below": "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
// }

// const updateLandscape = () => {
//     let landscape  = "";
//     if (temperature >= 27) {
//         landscape = landscapes["27+"];
//     } else if (temperature >= 15) {
//         landscape = landscapes["15"];
//     } else if (temperature >= 6) {
//         landscape = landscapes["6"];
//     } else {
//         landscape = landscapes["5 or below"];
//     } 
    
//     document.getElementById("garden-emoji").textContent = landscape;
// }
// updateLandscape();


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
// Here's how we'd do it the other way:
// const updatedCityName = () => {
//     cityInput.addEventListener("input", (e) => {
//         cityName.textContent = e.target.value;
//     })
// };
// updatedCityName();

// const resetButton = document.getElementById("reset-button")
// resetButton.addEventListener("click", () => {
//     const cityInput = document.getElementById("city-input");
//     const defaultCityName = "Seattle"; 
    
//     cityInput.value = defaultCityName;
//     updateCity(defaultCityName); 
// });


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
};
// Here's how we'd do it the other way:
// const skySelect = document.getElementById("sky-select");
// const skyEmoji = document.getElementById("sky-emoji");

// skySelect.addEventListener("change", () => {
//     const selectedOption = skySelect.value;
//     skyEmoji.textContent = skyOptions[selectedOption];
// });


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

// Bella's version 1.0:
// const getLocation = () => {
//     const location = document.getElementById("city-input").value;
//     axios
//     .get("http://127.0.0.1:5000/location", { params: { q: location } })
//     .then((result) => {
//         axios
//         .get("http://127.0.0.1:5000/weather", {
//             params: {
//             lat: result.data[0].lat,
//             lon: result.data[0].lon,
//             },
//         })
//         .then((result) => {
//             document.getElementById("temp-display").textContent = Math.round(result.data.main.temp - 273.15);
//         })
//         .catch((error) => {
//             console.error("Error retrieving weather:", error);
//             // Handle error and provide user feedback
//         });
//     })
//     .catch((error) => {
//         console.error("Error retrieving location:", error);
//         // Handle error and provide user feedback
//     });
// };

// const tempButton = document.getElementById("temp-button");
// tempButton.addEventListener("click", () => {
//     getLocation();
// });

// Bella's version 2.0:
// const getLocationAndWeather = async () => {
//     const location = document.getElementById("city-input").value;

//     try {
//     const locationResult = await axios.get("http://127.0.0.1:5000/location", { params: { q: location } });

//     const weatherResult = await axios.get("http://127.0.0.1:5000/weather", {
//         params: {
//         lat: locationResult.data[0].lat,
//         lon: locationResult.data[0].lon,
//         },
//     });

//     const celsius = Math.round(weatherResult.data.main.temp - 273.15);

//     document.getElementById("temp-display").textContent = celsius;
//     } catch (error) {
//     console.error("Error:", error);
    
//     }
// };

// const tempButton = document.getElementById("temp-button");
// tempButton.addEventListener("click", () => {
//     getLocationAndWeather();
// });

//Jasmine's version:
// const getLatAndLon = () => {
//     const location = document.getElementById("city-input").value;
//     axios
//     .get("http://127.0.0.1:5000/location", { params: {q: location} })
//     .then((result) => {
//     const lat = result.data[0].lat;
//     const lon = result.data[0].lon;
//     getWeather(lat, lon);
//     });
// };

// const getWeather = (lat_query, lon_query) => {
//     axios
//     .get("http://127.0.0.1:5000/weather", { params: {lat: lat_query, lon: lon_query} })
//     .then((result) => {
//         const kelvin = result.data.main.temp;
//         temperature = kelvinToCelsius(kelvin);
//         updateTemperature();
//     })
// };

// const tempButton = document.getElementById("temp-button");
// tempButton.addEventListener("click", () => {
//     getLatAndLon();
// });

/***********************************************************
            Temperature Conversions (WIP)
***********************************************************/

const kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
};

const kelvinToFahrenheit = (kelvin) => {
    let fahrenheit = (kelvin - 273.15) * (9/5) + 32;
    return Math.round(fahrenheit);
};