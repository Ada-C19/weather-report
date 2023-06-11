//City name search bar updates city name in header
function myChangeFunction(input) {
    var output = document.getElementById('search-output');
    output.value = input.value;
}
// count up 
const state = {
    tempCount: 0
};

function updateColor() {
    if (state.tempCount >= 80) {
        state.color = "red";
    }
    else if (state.tempCount >= 70) {
        state.color = "orange";
    }
    else if (state.tempCount >= 60) {
        state.color = "yellow";
    }
    else if (state.tempCount >= 50) {
        state.color = "green";
    }
    else {
        state.color= "black";
    }
    document.querySelector("#count").style.color = state.color
    console.log("Updated color " + state.color)
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

