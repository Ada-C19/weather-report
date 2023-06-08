"use strict";
const state = {
    temp: 0,
    landscape:"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
    city: "Seattle"

}

const temp = document.getElementById("tempValue");
const controlUp = document.getElementById("increaseTempControl");
const controlDown = document.getElementById("decreaseTempControl");
const landscape = document.getElementById("landscape");
const cityName = document.getElementById("headerCityName");
const cityInput = document.getElementById("cityNameInput");
const reset = document.getElementById("cityNameReset");

const changeColor = () =>{
    if (state.temp>80){
        temp.className = 'red';
        landscape.innerText = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
    else if (state.temp>69){
        temp.className = 'orange';
        landscape.innerText = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }
    else if(state.temp>59){
        temp.className = 'yellow';
        landscape.innerText = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }
    else if(state.temp>49){
        temp.className = 'green'
        landscape.innerText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    else{
        temp.className = 'teal'
        landscape.innerText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
}

const increaseTemp = () =>{
    changeColor()
    state.temp+= 1
    temp.innerText = state.temp
    
}

controlUp.addEventListener('click', increaseTemp)

const decreaseTemp = () => {
    changeColor()
    state.temp -= 1
    temp.innerText = state.temp
    
}

controlDown.addEventListener('click', decreaseTemp)

cityInput.addEventListener('input', function(){
    cityName.textContent = this.value;
})

const resetCity = () =>{
    cityName.textContent = state.city;
}
reset.addEventListener("click", resetCity)

