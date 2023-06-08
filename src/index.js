
const state = {
    city: 'Seattle',
    temp: 72,
};

const applyColorAndGarden = (element, temperature) => {
    element.classList.remove('red', 'orange', 'yellow', 'green', 'teal', 'ice');
  
    let landscape = '';
  
    if (temperature >= 80) {
      element.classList.add('red');
      landscape = '🌵🏜️🌵🐍🦂🌋👹🌋🦂🐍🌵🏜️🌵';
    } else if (temperature >= 70) {
      element.classList.add('orange');
      landscape = '🌞🌞🌻🌻🏖️🏝️👙🏝️🏖️🌻🌻🌞🌞';
    } else if (temperature >= 60) {
      element.classList.add('yellow');
      landscape = '🌹🌸🎋🌹🌸🌱🪺🌱🌸🌹🎋🌸🌹';
    } else if (temperature >= 50) {
      element.classList.add('green');
      landscape = '🌳🌾🍂🪵🌳🐿️🧣🐿️🌳🪵🍂🌾🌳';
    } else if (temperature >= 40) {
      element.classList.add('teal');
      landscape = '🌲🌳🌨️🪵🌲🌳🧤🌳🌲🪵🌨️🌳🌲';
    } else if (temperature < 40) {
      element.classList.add('ice');
      landscape = '🎄❄️🌨️🌲⛄️🌨️❄️🌨️⛄️🌲🌨️❄️🎄';
    }
  
    const landscapeElement = document.querySelector("#landscape");
    landscapeElement.textContent = landscape;
  };
  
  const increaseTemp = () => {
    const tempContainer = document.querySelector("#tempValue");
    state.temp++;
    console.log(state.temp);
    tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };
  
  const decreaseTemp = () => {
    const tempContainer = document.querySelector("#tempValue");
    state.temp--;
    console.log(state.temp);
    tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };
  
  const registerEventHandlers = () => {
    const increaseTempControl = document.getElementById('increaseTempControl');
    increaseTempControl.addEventListener('click', increaseTemp);
  
    const decreaseTempControl = document.getElementById('decreaseTempControl');
    decreaseTempControl.addEventListener('click', decreaseTemp);
  };
  
  document.addEventListener("DOMContentLoaded", registerEventHandlers);
  