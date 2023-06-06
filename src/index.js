const state = {
    temp: 72
}

const increaseTemp = () => {
    state.temp += 1;
    updateTemp();
};

const updateTemp = () => {
    let temp = state.temp;
    let color = "above80";

    if (state.temp >= 80) {
        let color = "above80";
    } else if (70 <= state.temp < 80) {
        let color = "seventies";
    } else if (60 <= state.temp < 70) {
        let color = "sixties";
    } else if (50 <= state.temp < 60) {
        let color = "fifties";
    } else {
        let color = "below49";
    }

    const temperature = document.getElementById('temp_value');
    temperature.className = color;
    temperature.textContent = String(state.temp);
}

const registerEventHandlers = () => {
    updateTemp()l
    const increaseButton = document.getElementById("increase_temp");
    increaseButton.addEventListener("click", increaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);