const txtBox = document.getElementById('city-name');
const buttonCity = document.getElementById('buttonCity');
const txtOutput = document.getElementById('output1');
let currentLandscape = document.getElementById('seasonal-landscape');
// Function that takes the value of Input box
// // Function that takes the value of Input box
const displayCityText = () => {
    txtOutput.innerHTML = txtBox.value;
    // Reset text from input box
    txtBox.value = "";
}

// Default state
const temperatureState = {
    degrees: 67
}

const changeColorTemp = () => {
    const num = temperatureState.degrees

    if (num <= 49) {
        document.getElementById('degrees').style.color = 'darkturquoise';
    } else if (num > 49 && num <= 59) {
        document.getElementById('degrees').style.color = 'green';
    } else if (num > 59 && num <= 69) {
        document.getElementById('degrees').style.color = 'gold';
    } else if (num > 69 && num <= 79) {
        document.getElementById('degrees').style.color = 'orange';
    } else {
        document.getElementById('degrees').style.color = 'red'
    }
}

const landscape = {
    summer: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    spring: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    autumn: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    winter: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

function displayLandscape(degrees) {
    if (degrees <= 59) {
        currentLandscape.textContent = landscape.winter;
        document.getElementById("whole-landscape").style.backgroundColor = "#66FFFF";
    } else if (degrees <= 69) {
        currentLandscape.textContent = landscape.autumn;
        document.getElementById("whole-landscape").style.backgroundColor = "#A1ABB5";
    } else if (degrees <= 79) {
        currentLandscape.textContent = landscape.spring;
        document.getElementById("whole-landscape").style.backgroundColor = "#60ABF6";
    } else {
        currentLandscape.textContent = landscape.summer;
        document.getElementById("whole-landscape").style.backgroundColor = "#0E76DE";
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
    upButton.addEventListener('click', changeColorTemp);

    const downButton = document.querySelector('#down');
    downButton.addEventListener('click', decreaseTemp);
    downButton.addEventListener('click', changeColorTemp);
}


// Triggers Event Handlers:
document.addEventListener('DOMContentLoaded', registerEventHandlers)



