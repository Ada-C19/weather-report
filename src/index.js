//City name search bar updates city name in header
function myChangeFunction(input) {
    const output = document.getElementById('search-output');
    output.value = input.value.toUpperCase();
}
// select dom elemnt from html and addEventListerner
const selectReset = document.querySelector("#reset");
selectReset.addEventListener("click", resetCity) //clickReset )
console.log(selectReset)
// create function clickReset that return a defualt city in output
function resetCity () { 
    // alert("you have reset your city!")
    document.querySelector("#search-output").innerHTML ="Atlanta";
    document.querySelector("#search").value = "Atlanta";
}
// use state methode and addEvenlistener
//  to call click button
// anable change of color and garden emoji based on temperature changing
const state = {
    tempCount: 0
};
function updateColor() {
    if (state.tempCount > 100) {
        alert("Overheat! Fine safe shelter.")
    }
    else if (state.tempCount >= 80) {
        state.color = "red";
        gardenIcon =  "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    }
    else if (state.tempCount >= 70) {
        state.color = "orange";
        gardenIcon
         = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }
    else if (state.tempCount >= 60) {
        state.color = "yellow";
        gardenIcon =  "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }
    else if (state.tempCount >= 50) {
        state.color = "green";
        gardenIcon =  "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    else {
        state.color= "teal";
    }
    document.querySelector("#count").style.color = state.color
    console.log("Updated color " + state.color)
    document.querySelector("#flowers").innerHTML = gardenIcon
    console.log("Updated garden " + gardenIcon)
}


const upButton = document.querySelector("#button-up");
upButton.addEventListener("click", upFunction)

function upFunction() {
    
    state.tempCount++;
    // alert("Up" + state.tempCount)
    
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

const downButton = document.querySelector("#button-down");
downButton.addEventListener("click", downFunction)

function downFunction() {
    state.tempCount--;
    // alert("Down" + state.tempCount)
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

// add eventlistener to the select tag called select mood
// add change fuction to the dropdown list to print cloud mood 

const selectMood = document.querySelector("#moods");
const result = document.querySelector("#clouds");

selectMood.addEventListener("change", (event) => {
    console.log(selectMood.value)
    if (selectMood.value == "sunny") {
        // alert("You selected sunny")
        cloudIcon =  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    }
    else if (selectMood.value == "cloudy") {
        // alert("You selected cloudy")
        cloudIcon = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }
    else if (selectMood.value == "rainy") {
        // alert("You selected rainy")
        cloudIcon =  "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }
    else {
        // alert("You selected snowy")
        cloudIcon =  "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
result.textContent = `You like ${event.target.value}`;
document.querySelector("#clouds").innerHTML = cloudIcon
});

