// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
  city: 'Seattle',
  temp: 72,
};

const increaseTemp = () => {
    state.temp += 1;
    const tempNumber = document.getElementById("tempnumber");
    tempNumber.textContent = `${state.temp}`;

}

const increaseButton = document.getElementById("up");
increaseButton.addEventListener("click", increaseTemp);



