// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
  city: 'Seattle',
  temp: 72,
};

// changing font color

const changeTempFontColorAndLandscape = () => {
    let temp = state.temp;
    const groundemoji = document.getElementById("groundemoji")
    const temperature = document.getElementById('tempnumber')
    if (temp >= 80) {
        temperature.className = 'red';
        groundemoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";

    }else if (temp >=70) {
        temperature.className = 'orange';
        groundemoji.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }else if (temp >= 60) {
        temperature.className = 'yellow';
        groundemoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }else if (temp >=50) {
        temperature.className = 'green';
        groundemoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }else {
        temperature.className = 'brown';
        groundemoji.textContent = "💀💀💀💀💀💀💀💀💀💀💀💀💀";
    }
};



// increase
const increaseTemp = () => {
    state.temp += 1;
    const upTempNumber = document.getElementById("tempnumber");
    upTempNumber.textContent = `${state.temp}`;
    changeTempFontColorAndLandscape();

}
const increaseButton = document.getElementById("up");
increaseButton.addEventListener("click", increaseTemp);

// decrease
const decreaseTemp = () => {
  state.temp -= 1;
  const downTempNumber = document.getElementById("tempnumber");
  downTempNumber.textContent = `${state.temp}`;
  changeTempFontColorAndLandscape();
};

const decreaseButton = document.getElementById("down");
decreaseButton.addEventListener("click", decreaseTemp);


// update the city
const changeCity = () => {
    const city = document.getElementById("city");
    const inputCity = document.getElementById("searchbar").value;
    state.city = inputCity;
    city.textContent = state.city;
    }
    
const cityInput = document.getElementById("searchbar");
cityInput.addEventListener("input", changeCity);

