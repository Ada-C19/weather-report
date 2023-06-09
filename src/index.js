// const { default: axios } = ("axios");


const state = {
    tempValue: 75,
    city: "Seattle",
    lat: 47.6038321,
    long: -122.3300624,
};

const changeTempAndLandscape = () => {
    tempValue.textContent = state.tempValue;

    if (state.tempValue >= 80) {
        document.getElementById("tempValue").className = "red";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌵🐍🌶️🦂🌵🌶️🌵🐍🏜🌶️🦂";
    }
    else if (state.tempValue >= 70 && state.tempValue <= 79) {
        document.getElementById("tempValue").className = "orange";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷";
    }
    else if (state.tempValue >= 60 && state.tempValue <= 69) {
        document.getElementById("tempValue").className = "yellow";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌱🌿🌾🍃🛤🌾🌿🌱🌿🌾🍃";
    }
    else if (state.tempValue >= 50 && state.tempValue <= 59) {
        document.getElementById("tempValue").className = "green";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌲🍁🍄🌲🍄🍂🌲🍁🌲🍂🍄🌲🍂🌲";
    }
    else if (state.tempValue >= 40 && state.tempValue <= 49) {
        document.getElementById("tempValue").className = "teal";
        const landscapeDisplay = document.getElementById("landscape");
        landscapeDisplay.textContent = "🌲❄️🌲⛄️🌲⛄️❄️🌲❄️🌲🌲⛄️🌲";
    }
}

const increaseTempButton = document.getElementById("increaseTempButton");
increaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue += 1 
    changeTempAndLandscape()
})

const decreaseTempButton = document.getElementById("decreaseTempButton");
decreaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue -= 1;
    changeTempAndLandscape();
})

const updateCityName = (e) => {
    const cityDisplay = document.getElementById("cityDisplay");
    state.city = e.target.value;
    cityDisplay.textContent = `For the city of ${state.city}`;
};

const cityNameInputBar = document.querySelector("input");
cityNameInputBar.addEventListener("input", updateCityName);

const resetButton = document.getElementById("cityChange");
resetButton.addEventListener("click", () => {
    cityNameInputBar.value = "Seattle";
    const cityDisplay = document.getElementById("cityDisplay");
    state.city = 'Seattle';
    cityDisplay.textContent = `For the city of ${state.city}`;

});

const converttoF = (temp) => {
    return (temp - 273.15) * (9 / 5) + 32;
};


// API calls
const getLatAndLong = () => {
    axios
    .get("http://127.0.0.1:5000/location", {
        params: {
            q: state.city,
        }
    })
    .then((response) => {
        console.log(response.data);
        state.lat = response.data[0].lat;
        state.long = response.data[0].lon;
        getCurrentWeather();
    })
    .catch((error) => {
        console.log("Cannot find location:", error.response);
    });
};

const getCurrentWeather = () => {
    axios
    .get("http://127.0.0.1:5000/weather", {
        params: {
            lat: state.lat,
            lon: state.long,
        },
    })
    .then((response) => {
        const weather = response.data;
        state.tempValue = Math.round(converttoF(weather.main.temp));
        changeTempAndLandscape();
    })
    .catch((error) => {
        console.log("Unable to retrieve weather data:", error);
    })
};

const currentTempButton = document.getElementById("currentTemp");
currentTempButton.addEventListener("click", () => {
    getLatAndLong()
    let tempValue = document.getElementById("tempValue");
    tempValue = state.tempValue;
})


const skySelector = document.getElementById("skySection");
skySelector.addEventListener("change", () => {
    const skyImage = document.getElementById("sky");
    const skyChoice = skySelector.value;
    if (skyChoice === "Sunny") {
        skyImage.textContent = "☁️  ☀️ ☁️  ☀️ ☁️ ☀️ ☁️  ☀️ ☁️";
    } else if (skyChoice === "Cloudy") {
        skyImage.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (skyChoice === "Rainy") {
        skyImage.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (skyChoice === "Snowy") {
        skyImage.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
})