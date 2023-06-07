const state = {}

const loadControls = () => {
    const elementsWithId = document.querySelectorAll('[id')
    elementsWithId.forEach(element => state[element.id] = element);
}

const registerEvents = () => {
    state.increaseTempControl.addEventListener('click', handleIncrease)
    state.decreaseTempControl.addEventListener('click', handleDecrease)
}

const handleIncrease = () => handleTempChange(1);
const handleDecrease = () => handleTempChange(-1);

const handleTempChange = (adj) => {
    let currentTemp = parseInt(state.tempValue.innerText);
    let newTemp = currentTemp + adj;
    state.tempValue.innerText = newTemp;
    //Changed text color based on temp
    let color, landscape;
    if (newTemp >= 80) {
        color = 'red';
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (newTemp >= 70 && newTemp <= 79) {
        color = 'orange';
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (newTemp >= 60 && newTemp <= 69) {
        color = 'yellow'
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"; 
        color = newTemp >= 50 && newTemp <=59 ? 'green': 'teal';
    }
    state.tempValue.style.color = color;
    state.landscape.innerText = landscape;
}



const onLoaded = () => {
    loadControls();
    registerEvents();
}

document.addEventListener("DOMContentLoaded", onLoaded);


