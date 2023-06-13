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
    console.log(state.tempValue);

    document.getElementById("temp-value").innerHTML = state.tempValue;
}

const handleDownBtnClicked = () => {
    state.tempValue -= 1;
    console.log(state.tempValue);

    document.getElementById("temp-value").innerHTML = state.tempValue;
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

// axios
//     .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json')
//     .then((response) => {

//     })
//     .catch((error) => {

//     });


// additional weather data:
// let city = 'london'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

// random image

// let data = 'https://api-ninjas.com';
// let category = 'weather'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/randomimage?category=weather' + category,
//     headers: { 'X-Api-Key': 'API_KEY', 'Accept': 'image/jpg'},
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });

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