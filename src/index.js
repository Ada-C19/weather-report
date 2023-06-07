"use strict";

let current_temp = 72

const getTemp = () => {
    const temperature = document.getElementById("temp");
    temperature.textContent = current_temp;
    if (current_temp >= 80) {
        temperature.className = "hot"
    } else if (current_temp >= 70) {
        temperature.className = "warm"
    } else if (current_temp >= 60) {
        temperature.className = "medium"
    } else if (current_temp >= 50) {
        temperature.className = "cool"
    } else {
        temperature.className = "cold"
    }
}
const button1 = document.getElementById("increase_temperature");
button1.addEventListener("click", () => {
    current_temp = current_temp + 1;
    getTemp();
});

const button2 = document.getElementById("decrease_temperature");
button2.addEventListener("click", () => {
    current_temp = current_temp - 1;
    getTemp();
});

if (document.readyState !== "loading") {
    getTemp();
} else {
    document.addEventListener("DOMContentLoaded", getTemp);
}
