const state = {
    currentTemp: 72
};

const increaseTemp = () => {
    state.currentTemp++;
    const currentTemp = document.querySelector('#display-temperature');
    console.log(state.currentTemp);
    currentTemp.textContent = `${state.currentTemp}`;
    // setTempAndColor();
};

const decreaseTemp = () => {
    state.currentTemp--;
    const currentTemp = document.querySelector('#display-temperature');
    console.log(state.currentTemp);
    currentTemp.textContent = `${state.currentTemp}`;
    // setTempAndColor();
};

// const setTempAndLandscape = () => {
//     const currentTemp = document.querySelector('#display-temperature');
//     currentTemp.textContent = `${state.currentTemp}`;
//     changeTempColor();
//     landscapeTitle();
// }

// const changeTempColor = () => {
//     const tempCurrent = document.getElementById('display-temperature');
//     let color;
//     switch (true) {
//         case currentTemp.currTemp >= 80:
//             color = 'red';
//             break;
//         case currentTemp.currTemp >= 70:
//             color = 'orange';
//             break;
//         case currentTemp.currTemp >= 60:
//             color = 'yellow';
//             break; 
//         case currentTemp.currTemp >= 50:
//             color = 'green';
//             break;
//         default:
//             color = 'teal';
//     }
//     tempCurrent.className = color;
// };

const registerEventHandlers = () => {
    const increaseButton = document.getElementById("increase-temp");
    const decreaseButton = document.getElementById("decrease-temp");
    increaseButton.addEventListener("click", increaseTemp);
    decreaseButton.addEventListener("click", decreaseTemp);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);