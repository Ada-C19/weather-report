"use strict";

const state = {
    degrees: 62
};

// const addDegreen = (event) => {
//     const newDegree = document.createElement("span");
// }

// const button1 = document.getElementById("up");
// button1.addEventListener("click", () => {
//     document.body.className = "degrees";

// })

// const up = document.getElementById("up");
// up.addEventListener("click", () => {
//     const tempNum = document.getElementsByClassName('degrees');
//     tempNum.textContent = state.degrees += 1;

// })



const increaseTemp = (event) => {
    state.degrees += 1;
    const degreeCount = document.querySelector('#degrees');
    degreeCount.textContent = state.degrees;
};

const decreaseTemp = (event) => {
    state.degrees -= 1;
    const degreeCount = document.querySelector('#degrees');
    degreeCount.textContent = state.degrees;
};

const registerEventHandlers = (event) => {
    const upButton = document.querySelector('#up');
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector('#down');
    downButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);