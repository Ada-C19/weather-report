
// get temperature display and arrows
const tempDisplay = document.getElementById("temp-display");

const tempString = tempDisplay.textContent;
let temperature = parseInt(tempString);




//update temperature display
const updateTemperature = () => {
    tempDisplay.textContent  = temperature;
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
