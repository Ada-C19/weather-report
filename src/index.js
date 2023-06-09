"use strict";

const state = {
    tempCount: 0,
}

let temperature = document.getElementById("temp-counter__span");

// Function to set sky
const skyImg = { 
    "0" : "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
    "1": "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
    "2" : "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
    "3" : "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
};

const changeSky = () => {
    const inputSky = document.getElementById('skySelect').value;
    const skyContainer = document.getElementById('garden-content__section');
    let sky = '';
    let skyColor = '';
    if (inputSky === 'Cloudy') {
      sky = skyImg[0];
      skyColor = 'cloudy';
    } else if (inputSky === 'Sunny') {
        sky = skyImg[1];
      skyColor = 'sunny';
    } else if (inputSky === 'Rainy') {
        sky = skyImg[2];
      skyColor = 'rainy';
    } else if (inputSky === 'Snowy') {
        sky = skyImg[3];
      skyColor = 'snowy';
    }
    skyContainer.textContent = sky;
    // const gardenContent = document.getElementById('gardenContent');
    // gardenContent.classList = `garden__content ${skyColor}`;
  };

// Function to set City and call getTemperature to change temp with city input

    function saveCity() {
        var userInput = document.getElementById("cityInput").value;
        var displayElement = document.getElementById("displayCity");
        displayElement.textContent = userInput;
        // Call getTemperature function with user input and update temperature object
        getTemperature(userInput).then((temp) => {
            temperature.textContent = temp;
            setColor(temp);
        });
    }

// Function to use LocationIQ and OpenWeather API


async function getTemperature(userInput) {
    try {
      // Get latitude and longitude of user input location
      const locationResponse = await axios.get(`http://127.0.0.1:5000/location?q=${userInput}`);
      const { lat, lon } = locationResponse.data[0];
      
      // Get weather data for latitude and longitude
      const weatherResponse = await axios.get(`http://127.0.0.1:5000/weather?lat=${lat}&lon=${lon}`);
      const { temp } = weatherResponse.data.main;
      
      // Convert temperature from Kelvin to Fahrenheit
      const temperature = (temp - 273.15) * 1.8 + 32;
      
      return temperature.toFixed(1); // Return temperature rounded to one decimal place
    } catch (error) {
      console.error(error);
      return "Error getting temperature data";
    }
  }


// Function to set Temp Color and Background

function setColor(value) {
    if (value >= 80) {
        temperature.style.color = "red";
        document.body.style.backgroundImage = "url('/images/hot.gif')";
        // temperature.style.backgroundColor = "teal";
    } else if (value >= 70 && value <= 79) {
        temperature.style.color = "orange";
        document.body.style.backgroundImage = "url('/images/summer.gif')";
        // temperature.style.backgroundColor = "green";
    } else if (value >= 60 && value <= 69) {
        temperature.style.color = "yellow";
        document.body.style.backgroundImage = "url('/images/warm.gif')";
        // temperature.style.backgroundColor = "yellow";
    } else if (value >= 50 && value <= 59) {
        temperature.style.color = "green";
        document.body.style.backgroundImage = "url('/images/spring.gif')";
        // temperature.style.backgroundColor = "orange";
    } else {
        temperature.style.color = "teal"; 
        document.body.style.backgroundImage = "url('/images/snow.gif')";
    }
}


// Increment and Decrement Temp

const increaseTemp = () => {
    state.tempCount += 1;
    const tempContainer = document.getElementById("temp-counter__span");
    tempContainer.textContent = `${state.tempCount}`;
    setColor(state.tempCount);
};

const decreaseTemp = () => {
    state.tempCount -= 1;
    const tempContainer = document.getElementById("temp-counter__span");
    tempContainer.textContent = `${state.tempCount}`;
    setColor(state.tempCount);
};

// Register Event Handlers
const registerEventHandlers = () => {
document.getElementById("temp_add_button").addEventListener("click", increaseTemp);
document.getElementById("temp_minus_button").addEventListener("click", decreaseTemp);
};
const skySelector = document.getElementById("skySelect");
skySelector.addEventListener("change",changeSky);
document.addEventListener("DOMContentLoaded", registerEventHandlers);