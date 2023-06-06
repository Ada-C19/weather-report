const state = {
    tempCount : 0
}

const landscapeImg = { 
    "1" : "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    "2" : "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    "3" : "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    "4" : "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    "5" : "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
};

const changeTemp = () => {
    const tempContainer = document.getElementById("temp-display");
    tempContainer.textContent = `${state.tempCount}`;
    tempRange()
}

const addTemp = () => {
    state.tempCount += 1;
    changeTemp()
};

const subtractTemp = () => {
    state.tempCount -= 1;
    changeTemp()
};

const tempRange = () => {
    if (state.tempCount <= 49){
        const temp = document.getElementById("temp-display")
        temp.className ="teal";
        const landscape = document.getElementById("landscape-container")
        landscape.append(landscapeImg["5"]);
        
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        const temp = document.getElementById("temp-display")
        temp.className ="green";
        const landscape = document.getElementById("landscape-container")
        landscape.append(landscapeImg["4"]);
    }
    else if (state.tempCount <= 69 && state.tempCount >=60){
        const temp = document.getElementById("temp-display")
        temp.className ="yellow";
        const landscape = document.getElementById("landscape-container")
        landscape.append(landscapeImg["3"]);
    } 
    else if (state.tempCount  >= 70 && state.tempCount <= 79){
        const temp = document.getElementById("temp-display")
        temp.className ="orange";
        const landscape = document.getElementById("landscape-container")
        landscape.append(landscapeImg["2"]);
    }
    else if (state.tempCount >= 80){
        const temp = document.getElementById("temp-display")
        temp.className ="red";
        const landscape = document.getElementById("landscape-container")
        landscape.append(landscapeImg["1"]);
    }
}



const registerEventHandlers = () => {

    document.getElementById("add-temp").addEventListener("click", addTemp);
    document.getElementById("sub-temp").addEventListener("click",subtractTemp );

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);