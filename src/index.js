"use strict";
// Global variables
let temperature = 70; // Initial temperature
let emoji = "";
let sky = ""
let skyEmoji = "";

// DOM elements
const temperatureElement = document.getElementById('temperature');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const landscapeImg = document.getElementById('landscape-img');
const emojiElement = document.getElementById('emoji');
const cityElement = document.getElementById('city');
const resetCityButton = document.getElementById('reset-city');
const skyElement = document.getElementById('sky');
const skyEmojiElement = document.getElementById('skyEmoji');
const demoElement = document.getElementById('demo');


// 1. Get access to lat and lon in response body
// 2. Send lat and lon in get request to proxy server weather endpoint 
//  3. Use weather response to update your UI (update displat to show temp found in weather resp)
async function getLocation(event) {
    if (event.key === "Enter") {
        try {
        const locationResponse = await axios.get(`http://127.0.0.1:5000/location?=${cityElement.value}`);
        const { latitude, longitude } = locationResponse.data;

        const weatherResponse = await axios.get(`http://127.0.0.1:5000/weather?lat=${latitude}&lon=${longitude}`);
        const { temperature, sky, skyEmoji } = weatherResponse.data;

        // Update UI with weather data
        updateTemperatureDisplay(temperature);
        updateSkyDisplay(sky, skyEmoji);
        } catch (error) {
        console.log('Error:', error);
        }
    }
}


// Event listeners for the buttons
increaseBtn.addEventListener('click', increaseTemperature);
decreaseBtn.addEventListener('click', decreaseTemperature);
resetCityButton.addEventListener('click', resetCityName);
cityElement.addEventListener('keypress', getLocation);


// Function to increase the temperature
function increaseTemperature() {
    temperature++;
    updateTemperatureDisplay();
}

// Function to decrease the temperature
function decreaseTemperature() {
    temperature--;
    updateTemperatureDisplay();
}

// Function to reset city name & clear input field
function resetCityName() {
    cityElement.value = '';
    cityInput();
}

// Function to update the temperature display, change the text color, and update the landscape
function updateTemperatureDisplay(temperature) {
    temperatureElement.textContent = `${temperature}°F`;

    if (temperature >= 80) {
        temperatureElement.style.color = 'red';
        emojiElement.textContent = '☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️☀️🏝️🥵🌞☀️🏝️🥵🌞';
        landscapeImg.src = 'styles/sunny1.jpeg';
        landscapeImg.alt = 'Sunny';
    } else if (temperature >= 70 && temperature <= 79) {
        temperatureElement.style.color = 'grey';
        emojiElement.textContent = '🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️🌞😶‍🌫️🌼🌷😎🍂🌤️';
        landscapeImg.src = 'styles/cloudy.jpeg';
        landscapeImg.alt = 'Cloudy';
    } else if (temperature >= 60 && temperature <= 69) {
        temperatureElement.style.color = 'indigo';
        emojiElement.textContent = '☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈☁️🫥🌦️🌧️🌤️🌧️☔️🌈';
        landscapeImg.src = 'styles/rainy.jpeg';
        landscapeImg.alt = 'Rainy';
    } else if (temperature >= 50 && temperature <= 59) {
        temperatureElement.style.color = 'orange';
        emojiElement.textContent = '🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️🍁🥮⛅️🍂😎🍃🌤️';
        landscapeImg.src = 'styles/autumn.jpeg';
        landscapeImg.alt = 'Autumn';
    } else {
        temperatureElement.style.color = 'teal';
        emojiElement.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️';
        landscapeImg.src = 'styles/snowy.jpeg';
        landscapeImg.alt = 'Snowy';
    }
}

//function to return city input
function cityInput() {
    var cityName = document.getElementById("city").value;
    document.getElementById("cityChoice").innerHTML = cityName;
}
//function to update sky selection when there is a change
function skySelection() {
    var choice = document.getElementById("sky").value;
    updateSkyDisplay();
}

// function updateSkyDisplay() {
//     let sky = document.getElementById("sky").value

//     if (sky == "sunny") {
//         skyEmojiElement.textContent = '🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️';

//     } else if (sky === "cloudy") {
//         skyEmojiElement.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️🌤 ☁️ ☁️☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️☁️☁️☁️ ☁️ 🌤 ☁️☁️☁️☁️🌤';

//     } else if (sky === "rainy") {
//         skyEmojiElement.textContent = '🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️';
        
//     } else if (sky === "snowy") {
//         skyEmojiElement.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️❄️';
//     }
    
// }

function updateSkyDisplay(sky) {
    let skyEmoji = '';

    if (sky === 'sunny') {
        skyEmoji = '🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️';
    } else if (sky === 'cloudy') {
        skyEmoji = '☁️☁️ ☁️ ☁️☁️ ☁️🌤 ☁️ ☁️☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️☁️☁️☁️ ☁️ 🌤 ☁️☁️☁️☁️🌤';
    } else if (sky === 'rainy') {
        skyEmoji = '🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️';
    } else if (sky === 'snowy') {
        skyEmoji = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️❄️';
    }

    updateSkyDisplay(sky, skyEmoji);
}
