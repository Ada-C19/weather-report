const state = {
    temp:69,
}

const updateTemp = () => {
    const tempElement = document.querySelector("#temp");
    tempElement.textContent = `${state.temp}`;
    if (tempElement.textContent >= 85) {
        tempElement.style.color = 'red';
    } else if (tempElement.textContent <= 55) {
        tempElement.style.color = 'blue';
    } else {
        tempElement.style.color = 'rgb(200, 91, 51)';
    }
}

const increaseTemp = document.querySelector("#upTempControl")

const upTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp += 1;
    updateTemp();
}

increaseTemp.addEventListener("click",upTemp)

const decreaseTemp = document.querySelector("#downTempControl")

const downTemp = () => {
    const changeTemp = document.querySelector("#changeTemp");
    state.temp -= 1;
    updateTemp();
}

decreaseTemp.addEventListener("click",downTemp)

const enterCityName = document.querySelector("#enter")
const nameInput = document.querySelector("#citynameinput")
const currentName = document.querySelector("#cityname")

const changeCity = () => {
    currentName.textContent = nameInput.value;
}
enterCityName.addEventListener("click",changeCity)

const resetCityName = document.querySelector("#reset")
const resetCity = () => {
    currentName.textContent = "";
    nameInput.value = "";
}
resetCityName.addEventListener("click",resetCity)

