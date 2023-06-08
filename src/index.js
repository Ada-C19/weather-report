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
document.getElementById('tempValue').addEventListener('<select onchange="changeSky()">', changeTextColor);

const skyElement = document.getElementById('sky');

const changeSky = function(sky) {
    
    tempValueElement.classList.remove(""red", "orange", "green", "teal", "yellow"")
    if (sky = cloudy) {
        skyElement.classList.add("cloudy");
    } 
}


/* < id="gardenContent" class="garden-content sunny">
<div id="sky"> ☀️☀️☀️☀️☀️</div>
<div id="landscape">🌼🌼🌼🌼🌼</div>*/


// END OF SKY CHANGE FUNCTION //

