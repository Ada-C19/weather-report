// state which displays the temperature number and background of temperature number
const state = {
    tempNum: 75
};

// function to display temperature
const displayTemp = () => {
    const tempContainer = document.getElementById("tempValue");
    tempContainer.textContent = `${state.tempNum}`;

    tempContainer.className = ``;

    if (state.tempNum > 79) {
        tempContainer.className = `${tempContainer.className} red`;
    } else if (state.tempNum > 69) {
        tempContainer.className = `${tempContainer.className} orange`;
    } else if (state.tempNum > 59) {
        tempContainer.className = `${tempContainer.className} yellow`;
    } else if (state.tempNum > 49) {
        tempContainer.className = `${tempContainer.className} green`;
    } else {
        tempContainer.className = `${tempContainer.className} teal`;
    }
}

// function to increase temperature
const increaseTemp = (event) => {
    state.tempNum += 1;
    displayTemp();
}

// function to decrease temperature
const decreaseTemp = (event) => {
    state.tempNum -= 1;
    displayTemp();
}

// function to change landscape depending on temp when DOMContentLoaded

const registerEventHandlers = (event) => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    const decreaseTempButton = document.querySelector("#decreaseTempControl");

    increaseTempButton.addEventListener("click", increaseTemp);
    decreaseTempButton.addEventListener("click", decreaseTemp);
    // call function to change landscape depending on temp

    displayTemp();
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);