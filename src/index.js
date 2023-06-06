// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
  city: 'Seattle',
  temp: 72,
};

// changing font color

const changeTempFontColor = () => {
    let temp = state.temp;
    temperature = document.getElementById('tempnumber')
    if (temp >= 80) {
        temperature.className = 'red';
    }else if (temp >=70) {
        temperature.className = 'orange';
    }else if (temp >= 60) {
        temperature.className ='yellow';
    }else if (temp >=50) {
        temperature.className = 'green';
    }else {
        temperature.className = 'brown';
    }
};



// increase
const increaseTemp = () => {
    state.temp += 1;
    const upTempNumber = document.getElementById("tempnumber");
    upTempNumber.textContent = `${state.temp}`;
    changeTempFontColor();

}
const increaseButton = document.getElementById("up");
increaseButton.addEventListener("click", increaseTemp);

// decrease
const decreaseTemp = () => {
  state.temp -= 1;
  const downTempNumber = document.getElementById("tempnumber");
  downTempNumber.textContent = `${state.temp}`;
  changeTempFontColor();
};

const decreaseButton = document.getElementById("down");
decreaseButton.addEventListener("click", decreaseTemp);




