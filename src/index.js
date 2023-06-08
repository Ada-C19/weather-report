const txtBox = document.getElementById('city-name');
const buttonCity = document.getElementById('buttonCity');
const txtOutput = document.getElementById('output1');
let currentLandscape = document.getElementById('seasonal-landscape');
// Function that takes the value of Input box
const displayCityText = () => {
    txtOutput.innerHTML = txtBox.value;
    // Reset text from input box
    txtBox.value = "";
}

// Default state
const temperatureState = {
    degrees: 67
}

// Seasonal Landscape
const landscape = {
    summer: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    spring: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    autumn: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    winter: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

function displayLandscape(degrees) {
    if (degrees <= 59) {
        currentLandscape.textContent = landscape.winter;
    } else if (degrees <= 69) {
        currentLandscape.textContent = landscape.autumn;
    } else if (degrees <= 79) {
        currentLandscape.textContent = landscape.spring;
    } else {
        currentLandscape.textContent = landscape.summer;
    }
}

const increaseTemp = (event) => {
    temperatureState.degrees += 1;
    const degrees = document.querySelector('#degrees');
    degrees.textContent = temperatureState.degrees;
    displayLandscape(temperatureState.degrees);
};

const decreaseTemp = (event) => {
    temperatureState.degrees -= 1;
    const degrees = document.querySelector('#degrees');
    degrees.textContent = temperatureState.degrees;
    displayLandscape(temperatureState.degrees);
};

// Function for all Event Handlers
const registerEventHandlers = (event) => {
    // Display city text from input box
    buttonCity.addEventListener('click', displayCityText)

    const upButton = document.querySelector('#up');
    upButton.addEventListener('click', increaseTemp);

    const downButton = document.querySelector('#down');
    downButton.addEventListener('click', decreaseTemp);
}


// Triggers Event Handlers:
document.addEventListener('DOMContentLoaded', registerEventHandlers)



