"use strict";

const state = {
    temperature: 0 
    // start temparture with info from API call
};

const increaseTemp = (event) => {
    state.temperature += 1;
    const tempCount = document.querySelector("#temp-count");
    tempCount.textContent = `${state.temperature}`;  
};

const decreaseTemp = (event) => {
    state.temperature -= 1;
    const tempCount = document.querySelector("#temp-count");
    tempCount.textContent = `${state.temperature}`;  
};

const changeColorByTemp = (event) => {
    // make js to change color using state temperature variable
    const tempCount = document.querySelector('#temp-count');
    const emojiLandscape = document.querySelector('#landscape')
    if (state.temperature >= 80) {
        tempCount.setAttribute("class", "red");
        emojiLandscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.temperature >= 70 && state.temperature <= 79) {
        tempCount.setAttribute("class", "orange");
        emojiLandscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperature >= 60 && state.temperature <= 69) {
        tempCount.setAttribute("class", "yellow");
        emojiLandscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    } else if (state.temperature >= 50 && state.temperature <= 59) {
        tempCount.setAttribute("class", "green");
        emojiLandscape.textContent= "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else if (state.temperature <= 49) {
        tempCount.setAttribute("class", "teal");
        emojiLandscape.textContent= "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}

const inputElement = document.getElementById("city-name")


// Calling API's
const searchLocation = () => {
    
    axios
    .get('http://127.0.0.1:5000/location', {
        params:{
        q: cityName,  
        }  
    })
    .then((response) => {
    console.log('success!' + JSON.stringify(response.data[0]));
    state.lat = response.data[0].lat;
    state.lon = response.data[0].lon;
    searchTemperature();
        })
    
    .catch((error) => {
        console.log('searchLocation error: ' +
        error.response);
    });
};

const searchTemperature = () => {
    axios
    .get('http://localhost:5000/weather', {
        params: {
        lat: state.lat,
        lon: state.lon,
        },
      })
    .then((response) => {
        console.log('success!' + JSON.stringify(response.data.current.temp));
        state.temp = convertKtoC(response.data.current.temp);
        changeLandscapeTemp();
      })
    .catch((error) => {
        console.log('searchTemperature error: ' + error.response);
      });
  };

const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#up-arrow");
    tempUpButton.addEventListener("click", increaseTemp);
    tempUpButton.addEventListener("click", changeColorByTemp);

    const tempDownButton = document.querySelector("#down-arrow");
    tempDownButton.addEventListener("click", decreaseTemp);

    
    inputElement.addEventListener("input", function () {
        const cityName = inputElement.value;
        const cityDisplay = document.querySelector("h3");
        cityDisplay.textContent = "For the lovely city of " + "⭐"+cityName+"⭐";

    const changeLocation = document.querySelector('#realtime-button-weather');
    changeLocation.addEventListener('click', searchLocation);
    })
};
document.addEventListener("DOMContentLoaded", registerEventHandlers)



