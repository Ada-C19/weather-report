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