"use strict";


const changeTextColor = function(tempValue) {
    
    tempValueElement.classList.remove("red", "orange", "green", "teal", "yellow")
    if (tempValue >= 80) {
        tempValueElement.classList.add("red");
    } else if ((69 < tempValue) && (tempValue < 80)) {
        tempValueElement.classList.add("orange");
    } else if ((59 < tempValue) && (tempValue < 70)) {
        tempValueElement.classList.add("yellow");
    } else if ((49 < tempValue) && (tempValue < 60)) {
        tempValueElement.classList.add("green");
    } else {
        tempValueElement.classList.add("teal");
    }
}

document.getElementById('increaseTempButton').addEventListener('click', increaseTemperature);
document.getElementById('decreaseTempButton').addEventListener('click', decreaseTemperature);


function increaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp + 1;
    changeTextColor(currentTemp)
}

function decreaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp - 1;
    changeTextColor(currentTemp)
}


document.getElementById('tempValue').addEventListener('click', changeTextColor);

const tempValueElement = document.getElementById('tempValue');


// CHANGE SKY FUNCTION //


const skyElementSelector = document.getElementById('skySelect');
const skyElementWithEmojis = document.getElementById('sky');


const changeSky = function(event) {
    const value = event.target.value;
    console.log("hello", value)

    skyElementSelector.classList.remove("cloudy", "sunny", "rainy", "snowy")
    if (value === "Cloudy") {
        skyElementSelector.classList.add("cloudy");
        skyElementWithEmojis.innerText = "☁️☁️☁️☁️☁️"
    } 
    else if (value === "Sunny") {
        skyElementSelector.classList.add("sunny");
        skyElementWithEmojis.innerText = "☀️☀️☀️☀️☀️"
    } 
    else if (value === "Rainy") {
        skyElementSelector.classList.add("rainy");
        skyElementWithEmojis.innerText = "🌧️🌧️🌧️🌧️🌧️"
    } 
    else if (value === "Snowy") {
        skyElementSelector.classList.add("snowy");
        skyElementWithEmojis.innerText = "❄️❄️❄️❄️❄️"
    } 
}
document.getElementById('skySelect').addEventListener('change', changeSky);
// END OF SKY CHANGE FUNCTION //


// CHANGE THE HEADER CITY NAME //  

const inputName = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');
    

const updateCityName = function(event) {
    headerCityName.textContent = event.target.value 
};
document.getElementById('cityNameInput').addEventListener('input', updateCityName)
// END OF CHANGING CITY IN HEADER //

//RESET THE HEADER BACK TO SEATTLE //
const cityNameInput = document.getElementById('cityNameInput');
const cityNameResetBtn = document.getElementById('cityNameReset'); 

const resetCityName = function (event) {
    cityNameInput.textContent = event.target.value = "Seattle";
    // updateCityName();
};
document.getElementById('cityNameResetBtn').addEventListener('click', resetCityName);
// END OF HEADER RESET //

// // API CALLS :) ////
// // id="cityNameInput" --> 
// // id="cityNameReset" >
// document.getElementById('cityNameInput').addEventListener('change', changeSky);
// document.getElementById('cityNameReset').addEventListener('click', changeSky);
// const ...
// const ...

// axios
// .get('127.0.0.1:5000')
// // add parameters for city info
// .then((response) => {
//     console.log('Success!', response.data);
//     return response.data
//     // Code that executes with a successful response goes here
// })
// .catch((error) => {
//     // Code that executes with an unsuccessful response goes here
//     console.log('Error!');
// });
// // END OF API CALL //


// // making an api call
// // .get to 127.0.0.1:5000
