const state = {
    temp:69,
}

const updateTemp = () => {
    const tempElement = document.querySelector("#temp");
    tempElement.textContent = `${state.temp}`;
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