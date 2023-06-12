// select the hml element the event has to occur on 
// make function to run when it occurs
//register function in event list

 state = {
    temp: 50,
    city: "Atlanta",
};

const displayCity = function(){
    const inputNow = document.querySelector("input").value
    console.log(inputNow)
    state.city = inputNow
    const tempCityContainer = document.querySelector('#city')
    tempCityContainer.textContent = `For the lovely city of ${state.city}`
}
const incrementTemp = function() {
    state.temp +=1;
    const tempNumContainer = document.querySelector("#currentTemp")
    tempNumContainer.textContent = `${state.temp}°`;
};
const decrementTemp = function() {
    state.temp -=1
    const tempNumContainer = document.querySelector("#currentTemp")
    tempNumContainer.textContent = `${state.temp}°`
    
};

const registerEventHandlers = () => {
    const upArrow = document.querySelector("#up_arrow");
    upArrow.addEventListener('click', incrementTemp);

    const DownArrow = document.querySelector("#down_arrow");
    DownArrow.addEventListener('click', decrementTemp);
    
    const cityInput = document.getElementById("inputCity")
    cityInput.addEventListener('input', displayCity)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);