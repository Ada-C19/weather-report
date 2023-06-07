const txtBox = document.getElementById('city-name');
const buttonCity = document.getElementById('buttonCity');
const txtOutput = document.getElementById('output1');
// Function that takes the value of Input box
const displayCityText = () => {
    txtOutput.innerHTML = txtBox.value;
    // Reset text from input box
    txtBox.value = "";
}

// Function for all Event Handlers
const registerEventHandlers = () => {
    // Display city text from input box
    buttonCity.addEventListener('click', displayCityText)
}

// Triggers Event Handlers:
document.addEventListener('DOMContentLoaded', registerEventHandlers)

