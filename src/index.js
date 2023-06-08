const state = {
    liveTemp : 68
};





























const tempIncrease = () => {
    //temp behavior
    state.liveTemp += 1;
};

const tempDecrease = () => {
    //temp behavior
    state.liveTemp -= 1;
};

const displayCityInput = () => {
    let cityInput = document.getElementById("city_input").value;
    let cityDisplay = document.querySelector("h2");
    cityDisplay.textContent = `For the city of  ${cityInput}`;
}

const registerEventHandlers = () => {
    const tempIncButton = document.querySelector("#increase_button");
    tempIncButton.addEventListener("click", tempIncrease);
    
    
    
    
    const tempDecButton = document.querySelector("#decrease_button");
    tempDecButton.addEventListener("click", tempDecrease);


    
    
    const cityDisplay = document.querySelector("#city_input");
    cityDisplay.addEventListener("input", displayCityInput);


}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

// const getCityInput = () => {
//     let cityInput = document.querySelector("h2");
// }