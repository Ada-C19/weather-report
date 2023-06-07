let tempValueInt = 65;

const increaseButton = document.getElementById("topButton");
increaseButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValueInt++;
    tempValue.innerHTML = tempValueInt;
});

const decreaseButton = document.getElementById("bottomButton");
decreaseButton.addEventListener("click", () => {
    const tempValue = document.getElementById("tempValue");
    tempValueInt--;
    tempValue.innerHTML = tempValueInt;
})


