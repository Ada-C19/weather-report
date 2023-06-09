// get temperature display and arrows
const tempDisplay = document.getElementById("temp-display");

const tempString = tempDisplay.textContent;
let temperature = parseInt(tempString);

//update temperature display
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
// event listener to increase temp
const raiseTemp = document.getElementById("raise-temp");
raiseTemp.addEventListener("click", () => {
    temperature++;
    updateTemperature();
    updateLandscape()
});

// event listener to decrease temp
const lowerTemp = document.getElementById("lower-temp");
lowerTemp.addEventListener("click", () => {
    temperature--;
    updateTemperature();
    updateLandscape()
});

//initial temp display
updateTemperature();

const skys = {
    "27+":	"🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞",
	"15": "🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️",
	"6": "🌦️⛅️⛅️⛅️☔️☔️⛈️⛈️⛈️⛈️☔️☔️⛅️⛅️⛅️🌦️",
    "5 or below": "🌨️🌨️🌨️🌨️🌨️❄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️🌨️"
}

const landscapes = {
    "27+":	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
	"15": "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
	"6": "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    "5 or below": "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

const updateLandscape = () => {
    let landscape  = "";
    let sky_i = "";
    if (temperature >= 27) {
        landscape = landscapes["27+"];
        sky_i = skys["27+"];
    } else if (temperature >= 15) {
        landscape = landscapes["15"];
        sky_i = skys["15"];
    } else if (temperature >= 6) {
        landscape = landscapes["6"];
        sky_i = skys["6"];
    } else {
        landscape = landscapes["5 or below"];
        sky_i = skys["5 or below"];
    } 
    
    document.getElementById("garden-emoji").textContent = landscape;
    document.getElementById("sky-emoji").textContent = sky_i;
}
updateLandscape()

// Followed curiosity. This function uses the HTML attribute onkeyup
// to allow the text box to update city name in header.
const updateCity = (value) => {
    document.getElementById("header-city").textContent = value;
}
// Here's a solution that uses addEventListener
// const updatedCityName = () => {
//     cityInput.addEventListener("input", (e) => {
//         cityName.textContent = e.target.value;
//     })
// };
// updatedCityName();

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

const getLocationAndWeather = async () => {
    const location = document.getElementById("city-input").value;

    try {
    const locationResult = await axios.get("http://127.0.0.1:5000/location", { params: { q: location } });

    const weatherResult = await axios.get("http://127.0.0.1:5000/weather", {
        params: {
        lat: locationResult.data[0].lat,
        lon: locationResult.data[0].lon,
        },
    });

    const celsius = Math.round(weatherResult.data.main.temp - 273.15);

    document.getElementById("temp-display").textContent = celsius;
    } catch (error) {
    console.error("Error:", error);
    
    }
};

const tempButton = document.getElementById("temp-button");
tempButton.addEventListener("click", () => {
    getLocationAndWeather();
});
//Jasmine's version
// const getLocation = () => {
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
//         const celsius = Math.round(kelvin - 273.15);
//         document.getElementById("temp-display").textContent = celsius;
//     })
// };

// const tempButton = document.getElementById("temp-button");
// tempButton.addEventListener("click", () => {
//     getLocation();
//     }
// );







// if (document.readyState !== "loading") {
//   getTasks();
// } else {
//   document.addEventListener("DOMContentLoaded", getTasks);
// }