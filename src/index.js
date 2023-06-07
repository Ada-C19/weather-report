const state = {
    temp: 72
}

const increaseTemp = () => {
    state.temp += 1;
    updateTemp();
};

// this is new
const decreaseTemp = () => {
    state.temp -= 1;
    updateTemp();
}

const updateTemp = () => {
    let temp = state.temp;
    let color = "above80";

    if (state.temp >= 80) {
        color = "above80";
    // some changes here to add the "&& state.temp"
    } else if (70 <= state.temp && state.temp < 80) {
        color = "seventies";
    } else if (60 <= state.temp && state.temp < 70) {
        color = "sixties";
    } else if (50 <= state.temp && state.temp < 60) {
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

    // this is new
    const decreaseButton = document.getElementById("decrease_temp");
    decreaseButton.addEventListener("click", decreaseTemp);
}


document.addEventListener("DOMContentLoaded", registerEventHandlers);