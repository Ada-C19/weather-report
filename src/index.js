const state = {
    temperature: "70",
    emoji: null,
    sky: "😎🌈☁️🌧️😎🌈☁️🌧️😎🌈☁️🌧️😎🌈☁️🌧️😎🌈☁️",
    skyEmoji: null,
};

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


const findCityLocation = async (cityName) => {
    return axios.get('https://localhost:5000/location/weather', {
        params: {
            q: cityName,
        },
    })
    .then(response => {
        const temperature = response.data.temperature;
        updateTemperatureDisplay(temperature);
        console.log(temperature);
    })
    .catch(error => {
        console.log(error);
    });
};

    const checkTempButton = document.getElementById('check-current-temp');
    checkTempButton.addEventListener('click', () => {
    const cityName = cityElement.value;
    findCityLocation(cityName);
});

const resetCity = () => {
    cityElement.value = 'Pittsburgh';
    findCityLocation('Pittsburgh');
};


    const refreshUI = () => {
        temperatureElement.textContent = state.temperature;
};


// Event listeners for the buttons
increaseBtn.addEventListener('click', increaseTemperature);
decreaseBtn.addEventListener('click', decreaseTemperature);
resetCityButton.addEventListener('click', resetCityName);
cityElement.addEventListener('keydown', getLocation);

// Function to increase the temperature
function increaseTemperature() {
    state.temperature++;
    updateTemperatureDisplay(state.temperature);
    findCityLocation(cityElement.value);
}

// Function to decrease the temperature
function decreaseTemperature() {
    state.temperature--;
    updateTemperatureDisplay(state.temperature);
    findCityLocation(cityElement.value);
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

function updateSkyDisplay() {
    let sky = document.getElementById("sky").value

    if (sky == "sunny") {
        skyEmojiElement.textContent = '🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️☀🌼😎🌞😎☀️';

    } else if (sky === "cloudy") {
        skyEmojiElement.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️🌤 ☁️ ☁️☁️☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️☁️☁️☁️☁️ ☁️ 🌤 ☁️☁️☁️☁️🌤';

    } else if (sky === "rainy") {
        skyEmojiElement.textContent = '🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️☔️🌈🌦️🌧️🌧️';
        
    } else if (sky === "snowy") {
        skyEmojiElement.textContent = '❄️❄️☃️☃️⛄️⛄️🤶🏾🥶🥶🥶⛄️⛄️⛄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️🌨️☃️⛷️⛄️🤶🏾🥶❄️☃️❄️';
    }
    
}
