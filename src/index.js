
// get temperature display and arrows
const tempDisplay = document.getElementById("temp-display");

const tempString = tempDisplay.textContent;
let temperature = parseInt(tempString);




//update temperature display
const updateTemperature = () => {
    tempDisplay.textContent  = temperature;

    if (temperature >= 27) {
        tempDisplay.style.color = "red";   
    } else if (temperature >= 21) {
        tempDisplay.style.color = "orange"
    } else if (temperature >= 16) {
        tempDisplay.style.color = "yellow"
    } else if (temperature >= 10) {
        tempDisplay.style.color = "green"
    } else {
        tempDisplay.style.color = "teal"
    }
};  
// event listener to increase temp
const raiseTemp = document.getElementById("raise-temp");
raiseTemp.addEventListener("click", () => {
    temperature++;
    updateTemperature();
});

// event listener to decrease temp
const lowerTemp = document.getElementById("lower-temp");
lowerTemp.addEventListener("click", () => {
    temperature--;
    updateTemperature();
});

//initial temp display
updateTemperature();



// if (document.readyState !== "loading") {
//   getTasks();
// } else {
//   document.addEventListener("DOMContentLoaded", getTasks);
// }
