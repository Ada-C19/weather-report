"use strict";

document.getElementById('increaseTempButton').addEventListener('click', increaseTemperature);
document.getElementById('decreaseTempButton').addEventListener('click', decreaseTemperature);

function increaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp + 1;
}

function decreaseTemperature() {
    const tempElement = document.getElementById('tempValue');
    const currentTemp = parseInt(tempElement.textContent);
    tempElement.textContent = currentTemp - 1;
}

// Get the text element
const tempValueElement = document.getElementById('tempValue');

// Function to change the text color
const changeTextColor = function(tempValue) {
    if (tempValue >= 80) {
        tempValueElement.classList.add("red");
} else if (69 < newValue < 80 ) {
    tempValueElement.classList.add("orange");
} else if (59 < newValue < 70 ) {
    tempValueElement.classList.add("yellow");
} else if (49 < newValue < 60) {
    tempValueElement.classList.add("green");
} else if (49 <= newValue) {
    tempValueElement.classList.add("teal");
}
}


// Temperature (F)	Color
// 80+	Red
// 70-79	Orange
// 60-69	Yellow
// 50-59	Green
// 49 or below	Teal