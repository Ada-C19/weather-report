// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
  city: 'Seattle',
  temp: 72,
};

// incrase
const increaseTemp = () => {
    state.temp += 1;
    const upTempNumber = document.getElementById("tempnumber");
    upTempNumber.textContent = `${state.temp}`;

}
const increaseButton = document.getElementById("up");
increaseButton.addEventListener("click", increaseTemp);

// decrease
const decreaseTemp = () => {
  state.temp -= 1;
  const downTempNumber = document.getElementById("tempnumber");
  downTempNumber.textContent = `${state.temp}`;
};

const decreaseButton = document.getElementById("down");
decreaseButton.addEventListener("click", decreaseTemp);




