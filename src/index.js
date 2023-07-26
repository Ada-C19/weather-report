"use strict";

// import axios, { isCancel, AxiosError } from 'axios';

const state = {
    citySearchButton: null,
    resetButton: null,
    tempValue: 0,
    lat: null,
    lon: null,
    upbutton: null,
    downbutton: null
};

const changeCityHeader = () => {
    const cityName = document.getElementById("city-spotlight");
    const searchInput = document.getElementById("search-input").value;
    cityName.innerHTML = `${searchInput}`;
};

const getLocation = () => {
    let lat;
    let lon;
    return axios.get("http://127.0.0.1:5000/location", {
        params: {
            q: document.getElementById("search-input").value
        }
    })
        .then((response) => {
            state.lat = response.data[0].lat;
            state.lon = response.data[0].lon;
            getRtWeather();
        })
        .catch((error) => {
            console.log("There's an error " + error);
        });
};

const getRtWeather = () => {
    axios.get("http://127.0.0.1:5000/weather",
    {
        params: {
            lat: state.lat,
            lon: state.lon,
            units: "imperial"
        }
    })
    .then((response) => {
        state.tempValue = convertK2F(response.data.main.temp);
        document.getElementById("temp-value").innerHTML = state.tempValue;
        handleTempChanged();
    })

    .catch((error) => {
        console.log("There's an error " + error);
    })
};

const convertK2F = (temp) => {
    return Math.trunc((temp - 273.15) * 9 / 5 + 32);
}

const handleSearchButtonClicked = () => {
    changeCityHeader();
    getLocation();
};

const handleResetBtnClicked = () => {
    location.reload();
}

const handleUpBtnClicked = () => {
    state.tempValue += 1;

    document.getElementById("temp-value").innerHTML = state.tempValue;
    handleTempChanged();
}

const handleDownBtnClicked = () => {
    state.tempValue -= 1;
    console.log(state.tempValue);

    document.getElementById("temp-value").innerHTML = state.tempValue;
    handleTempChanged();
}

const handleTempChanged = () => {
    if (state.tempValue >= 80) {
        document.getElementById("temp-value").style.color = '#ff0000';
    } else if (state.tempValue >= 70 && state.tempValue <= 79) {
        document.getElementById("temp-value").style.color = '#FFA500';
    } else if (state.tempValue >= 60 && state.tempValue <= 69) {
        document.getElementById("temp-value").style.color = '#FFFF00';
    } else if (state.tempValue >= 50 && state.tempValue <= 59) {
        document.getElementById("temp-value").style.color = '#00FF00';
    } else if (state.tempValue <= 49) {
        document.getElementById("temp-value").style.color = '#008080';
    }
    console.log(document.getElementById("temp-value").style.color);
}

const registerEvents = () => {
    state.citySearchButton.addEventListener("click", handleSearchButtonClicked);
    state.resetButton.addEventListener("click", handleResetBtnClicked);
    state.downbutton.addEventListener("click", handleDownBtnClicked);
    state.upbutton.addEventListener("click", handleUpBtnClicked);
};

const refreshUI = () => {
    document.getElementById("temp-value").innerHTML = state.tempValue;
};

const loadControls = () => {
    state.citySearchButton = document.getElementById("search-button"); 
    state.resetButton = document.getElementById("reset-button");
    state.upbutton = document.getElementById("up-button");
    state.downbutton = document.getElementById("down-button");
};

const onLoad = () => {
    loadControls();
    registerEvents();
    refreshUI();
    console.log(state.tempValue);
};

onLoad();


// Sky Condition Weather Icon Garden
const skyicon = document.getElementById("weather-conditions");

skyicon.addEventListener(    
    "change", (event) => {
        // console.log(skyicon.value)

        // SUN
        let sun = document.getElementById("sunny-garden-image-container");

        if (skyicon.value === "sunny") {
            sun.style.display = "block";
        }
        else {
            sun.style.display = "none"
        }

        // RAIN
        let rain = document.getElementById("rainy-garden-image-container");

        if (skyicon.value === "rainy") {
            rain.style.display = "block";
        }
        else {
            rain.style.display = "none"
        }

        // CLOUD
        let cloud = document.getElementById("cloudy-garden-image-container");

        if (skyicon.value === "cloudy") {
            cloud.style.display = "block";
        }
        else {
            cloud.style.display = "none"
        }

        // SNOW
        let snow = document.getElementById("snowy-garden-image-container");

        if (skyicon.value === "snowy") {
            snow.style.display = "block";
        }
        else {
            snow.style.display = "none"
        }

    }
)