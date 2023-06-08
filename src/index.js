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
    if (state.temperature >= 80) {
        tempCount.setAttribute("class", "red");
    } else if (state.temperature >= 70 && state.temperature <= 79) {
        tempCount.setAttribute("class", "orange");
    } else if (state.temperature >= 60 && state.temperature <= 69) {
        tempCount.setAttribute("class", "yellow");
    } else if (state.temperature >= 50 && state.temperature <= 59) {
        tempCount.setAttribute("class", "green");
    } else if (state.temperature <= 49) {
        tempCount.setAttribute("class", "teal");
    }
}


const registerEventHandlers = (event) => {
    const tempUpButton = document.querySelector("#up-arrow");
    tempUpButton.addEventListener("click", increaseTemp);
    tempUpButton.addEventListener("click", changeColorByTemp);

    const tempDownButton = document.querySelector("#down-arrow");
    tempDownButton.addEventListener("click", decreaseTemp);
};
document.addEventListener("DOMContentLoaded", registerEventHandlers)