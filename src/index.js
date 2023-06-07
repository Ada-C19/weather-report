const txtBox = document.getElementById('city-name');
const buttonCity = document.getElementById('buttonCity');
const txtOutput = document.getElementById('output1');
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

const increaseTemp = (event) => {
    temperatureState.degrees += 1;
    const degrees = document.querySelector('#degrees');
    degrees.textContent = temperatureState.degrees;
};

const decreaseTemp = (event) => {
    temperatureState.degrees -= 1;
    const degrees = document.querySelector('#degrees');
    degrees.textContent = temperatureState.degrees;
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


