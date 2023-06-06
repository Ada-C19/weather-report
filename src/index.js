const state = {
    tempValue: 75
};

const changeTempColor = () => {
    if (state.tempValue >= 80) {
        document.getElementById("tempValue").className = "red";
    }
    else if (state.tempValue >= 70 && state.tempValue <= 79) {
        document.getElementById("tempValue").className = "orange";
    }
    else if (state.tempValue >= 60 && state.tempValue <= 69) {
        document.getElementById("tempValue").className = "yellow";
    }
    else if (state.tempValue >= 50 && state.tempValue <= 59) {
        document.getElementById("tempValue").className = "green";
    }
    else if (state.tempValue >= 40 && state.tempValue <= 49) {
        document.getElementById("tempValue").className = "teal";
    }
}

const increaseTempButton = document.getElementById("increaseTempButton");
increaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    console.log(state);
    tempValue.textContent = state.tempValue += 1 
    changeTempColor()
})

const decreaseTempButton = document.getElementById("decreaseTempButton");
decreaseTempButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    console.log(state);
    tempValue.textContent = state.tempValue -= 1
    changeTempColor()
})

// const changeTempColor () => {
//     document.getElementById("tempValue").className = "red";

// }