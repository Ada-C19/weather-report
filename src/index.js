"use strict";

// import axios, { isCancel, AxiosError } from 'axios';

const state = {
    citySearchButton: null,
};

const handleSearchButtonClicked = () => {
    const cityHeader = document.getElementById('city-spotlight');
    const searchInput = document.getElementById('search-input').value;
    cityHeader.textContent = `Real-time weather in lovely ${searchInput}`;
};

const registerEvents = () => {
    state.citySearchButton.addEventListener("click", handleSearchButtonClicked);
};

const loadControls = () => {
    state.citySearchButton = document.getElementById("city-search-btn");
};

const onLoad = () => {
    loadControls();
    registerEvents();
};

// onLoad();

// axios
//     .get('https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json')
//     .then((response) => {

//     })
//     .catch((error) => {

//     });




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
