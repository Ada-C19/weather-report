let tempValueInt = 65;

const increaseButton = document.getElementById("topButton");
increaseButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValueInt++;
    tempValue.innerHTML = tempValueInt;
    tempValue.className = tempValueInt < 49 ? "teal"
        : tempValueInt >= 50 && tempValueInt <= 59 ? "green"
        : tempValueInt >= 60 && tempValueInt <= 69 ? "yellow"
        : tempValueInt >= 70 && tempValueInt <= 79 ? "orange"
        : "red";
    // if (tempValueInt < 49) {
    //     tempValue.className = "blue";
    // } else if (tempValueInt >= 50 && tempValueInt <= 59) {
    //     tempValue.className = "green";
    // }
});

const decreaseButton = document.getElementById("bottomButton");
decreaseButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValueInt--;
    tempValue.innerHTML = tempValueInt;
})


