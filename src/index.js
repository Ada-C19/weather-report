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
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};

const decreaseTemp = (event) => {
    state.degrees -= 1;
    // const degreeCount = document.querySelector('#degrees');
    const degreeCount = document.getElementById('degrees');
    degreeCount.textContent = state.degrees;
    tempColorLandscape();
};



const tempColorLandscape = () => {
    let temp = state.degrees;
    let color = 'yellow';
    let landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    if (temp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (temp >= 70) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (temp >= 60) {
        color = 'yellow';
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'green';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        color = 'teal';
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }

    const tempNum = document.getElementById('degrees');
    tempNum.style.color = color;

    const newLandscape = document.getElementById('landscape-emojis');
    newLandscape.textContent = landscape;

};

const registerEventHandlers = (event) => {
    tempColorLandscape();

    // const upButton = document.querySelector('#up');
    const upButton = document.getElementById('up');
    upButton.addEventListener("click", increaseTemp);


    // const downButton = document.querySelector('#down');
    const downButton = document.getElementById('down');
    downButton.addEventListener("click", decreaseTemp);


};

document.addEventListener("DOMContentLoaded", registerEventHandlers);