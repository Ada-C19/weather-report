const state = {
    liveTemp : 68
};

const changeTempAndLand = () => {
    let temp = state.liveTemp;
    let color = 'yellow';
    let land = "🌾🌾_🍃_🪨_🛤_🌾🌾_🍃";
    if (temp >= 80) {
        color = 'hot';
        land = "🌵_🐍🌵🦂_🌵🌵__🐍🏜🦂";
    } else if (temp >= 70) {
        color = 'warm';
        land = "🌸🌿🌼🌱_🌷🌻🌿_🌱🌻🌷";
    } else if (temp >= 60) {
        color = 'moderate';
        land = "🌾🌾_🍃_🪨_🛤_🌾🌾_🍃";
    } else if (temp >= 50) {
        color = 'cool';
        land = "🌲⛄️🌲⛄️🍂🌲🍁🌲⛄️🍂🌲";
    } else {
        color = 'cold';
        land = "🌲⛄️🌲⛄️🍂🌲🍁🌲⛄️🍂🌲";
    }
    const temperature = document.getElementById('live_temp');
    temperature.textContent = state.liveTemp;
    temperature.className = color;
    const landscape = document.getElementById('garden_land');
    landscape.textContent = land;
};


const tempIncrease = () => {
    //temp behavior
    state.liveTemp += 1;
};

const tempDecrease = () => {
    //temp behavior
    state.liveTemp -= 1;
};







const registerEventHandlers = () => {
    const tempIncButton = document.querySelector("#increase_button");
    tempIncButton.addEventListener('click', tempIncrease);
    tempIncButton.addEventListener('click', () =>{
        changeTempAndLand()
    });

    const tempDecButton = document.querySelector("#decrease_button");
    tempDecButton.addEventListener('click', tempDecrease);
    tempDecButton.addEventListener('click', () => {
        changeTempAndLand()
    })
};






document.addEventListener("DOMContentLoaded", registerEventHandlers);

