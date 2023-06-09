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




// function changeSky() {
//     var x = document.getElementById("skySelect").value;
//     document.getElementById("skySelect").innerHTML = "You selected: " + x;
// }



// END OF SKY CHANGE FUNCTION //


// making an api call
// .get to 127.0.0.1:5000
