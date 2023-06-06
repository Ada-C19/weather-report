const state = {
    tempValue: 75
};

const increaseTempButton = document.getElementById("increaseTempButton");
increaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue += 1 
    if (state.tempValue >= 80) {
        document.getElementById("tempValue").className = "red";
    }
    else if (state.tempValue >= 70 || state.tempValue <= 79) {
        document.getElementById("tempValue").className = "orange";
    }
    else if (state.tempValue >= 60 || state.tempValue <= 69) {
        document.getElementById("tempValue").className = "yellow";
}
})

const decreaseTempButton = document.getElementById("decreaseTempButton");
decreaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValue.textContent = state.tempValue -= 1
    if (state.tempValue >= 80) {
        document.getElementById("tempValue").className = "red";
    }
    else if (state.tempValue >= 70 || state.tempValue <= 79) {
        document.getElementById("tempValue").className = "orange";
    }
    else if (state.tempValue >= 60 || state.tempValue <= 69) {
        document.getElementById("tempValue").className = "yellow";
}
})

// const changeTempColor () => {
//     document.getElementById("tempValue").className = "red";

// }