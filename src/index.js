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

    if (temp >= 80) {
        color = "above80";
    } else if (70 <= temp < 80) {
        color = "seventies";
    } else if (60 <= temp < 70) {
        color = "sixties";
    } else if (50 <= temp < 60) {
        color = "fifties";
    } else {
        color = "below49";
    }

    const temperature = document.getElementById('temp_value');
    temperature.className = color;
    temperature.textContent = String(state.temp);
}

const registerEventHandlers = () => {
    updateTemp();
    const increaseButton = document.getElementById("increase_temp");
    increaseButton.addEventListener("click", increaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);