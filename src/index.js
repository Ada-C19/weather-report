"use strict";

// import axios, { isCancel, AxiosError } from 'axios';

const state = {
    citySearchButton: null,
    tempValue: 72,
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
    state.downbutton.addEventListener("click", handleDownBtnClicked);
    state.upbutton.addEventListener("click", handleUpBtnClicked);
};

const refreshUI = () => {
    document.getElementById("temp-value").innerHTML = 72;
};

const loadControls = () => {
    state.citySearchButton = document.getElementById("search-button");
    // state.tempValue = document.getElementById("temp-value"); 
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


let citytemp = 72

// Increase button

const upbutton = document.getElementById("up-button");

upbutton.addEventListener(
    "click", (event) => {
        // console.log("Yay it works!")
        citytemp += 1
        console.log(citytemp)

        document.getElementById("temp-number").innerHTML = citytemp;
    }
);

// Decrease button
const downbutton = document.getElementById("down-button");

downbutton.addEventListener(
    "click", (event) => {
        // console.log("Yay this also works!")
        citytemp -= 1
        console.log(citytemp)
        document.getElementById("temp-number").innerHTML = citytemp;

    }
);




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


// let citytemp = 72

// Increase button

// const upbutton = document.getElementById("up-button");

// upbutton.addEventListener(
//     "click", (event) => {
//         // console.log("Yay it works!")
//         citytemp += 1
//         console.log(citytemp)

//         document.getElementById("temp-number").innerHTML = citytemp;
//     }
// );

// // Decrease button
// const downbutton = document.getElementById("down-button");

// downbutton.addEventListener(
//     "click", (event) => {
//         // console.log("Yay this also works!")
//         citytemp -= 1
//         console.log(citytemp)
//         document.getElementById("temp-number").innerHTML = citytemp;

//     }
// );
