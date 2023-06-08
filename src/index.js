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
    updateLandscape()
});

// event listener to decrease temp
const lowerTemp = document.getElementById("lower-temp");
lowerTemp.addEventListener("click", () => {
    temperature--;
    updateTemperature();
    updateLandscape()
});

//initial temp display
updateTemperature();

const skys = {
    "27+":	"🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞☀️🌞",
	"15": "🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️☀️🌤️",
	"6": "🌦️⛅️⛅️⛅️☔️☔️⛈️⛈️⛈️⛈️☔️☔️⛅️⛅️⛅️🌦️",
    "5 or below": "🌨️🌨️🌨️🌨️🌨️❄️❄️❄️❄️❄️🌨️🌨️🌨️🌨️🌨️"
}

const landscapes = {
    "27+":	"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
	"15": "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
	"6": "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    "5 or below": "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
}

const updateLandscape = () => {
    let landscape  = "";
    let sky_i = "";
    if (temperature >= 27) {
        landscape = landscapes["27+"];
        sky_i = skys["27+"];
    } else if (temperature >= 15) {
        landscape = landscapes["15"];
        sky_i = skys["15"];
    } else if (temperature >= 6) {
        landscape = landscapes["6"];
        sky_i = skys["6"];
    } else {
        landscape = landscapes["5 or below"];
        sky_i = skys["5 or below"];
    } 
    
    document.getElementById("garden-emoji").textContent = landscape;
    document.getElementById("sky-emoji").textContent = sky_i;
}

const updateCity = () => {
    let cityInput = document.getElementById("city-input").value;
    document.getElementById("header-city").textContent = cityInput;
}

updateLandscape()
// if (document.readyState !== "loading") {
//   getTasks();
// } else {
//   document.addEventListener("DOMContentLoaded", getTasks);
// }