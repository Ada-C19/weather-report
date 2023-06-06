"use strict";

const state = {
    temperature: 0
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
}


const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#up-arrow");
    tempUpButton.addEventListener("click", increaseTemp);

    const tempDownButton = document.querySelector("#down-arrow");
    tempDownButton.addEventListener("click", decreaseTemp);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers)