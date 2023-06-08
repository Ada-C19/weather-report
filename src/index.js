// assign a constant state for temp
const state = {
    tempCount : 0, 
    city: "Seattle"
}

// assign variable for landscape and sky image icons

const landscapeEmojis = {
    "1" : "🌞🌵___🐍🦂__🌵🌞",
    "2" : "🌸🌿__🌷🌻🌷__🌿🌸",
    "3" : "🦚__🍄🌳🪷🌳🍄__🦚",
    "4" : "__🍂🍂🍁🍁🍁🍂🍂__",
    "5" : "⛄️🌲______🌲⛄️",
};

const skyEmojis = {
    "0" : "add emoji here",
    "1": "add emji here too",
    "2" : "finding these takes a little time",
    "3" : "so put it off till it's all working"
};

// functions to update the number on temp gauge
const changeTemperature = () => {
    const tempContainer = document.getElementById("temperature-id");
    tempContainer.textContent = `${state.tempCount}`;
    tempRange()
}

// add 1 degree to temp
const increaseTemperature = () => {
    state.tempCount += 1;
    changeTemperature()
};

// subtract 1 degree to temp
const decreaseTemperature = () => {
    state.tempCount -= 1;
    changeTemperature()
};

// function to set ranges for temperature and change colors
// of the temperature number & print emojis for landscape
const tempRange = () => {
    if (state.tempCount <= 49){
        const temp = document.getElementById("temperature-id")
        temp.className="teal";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeEmojis["5"];
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        const temp = document.getElementById("temperature-id")
        temp.className="green";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeEmojis["4"];
    }
    else if (state.tempCount <= 69 && state.tempCount >= 60){
        const temp = document.getElementById("temperature-id")
        temp.className="yellow";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeEmojis["3"];
    }
    else if (state.tempCount >=70 && state.tempCount <= 79){
        const temp = document.getElementById("temperature-id")
        temp.className="orange";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeEmojis["2"];
    }
    else if (state.tempCount >= 80){
        const temp = document.getElementById("temperature-id")
        temp.className ="red";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeEmojis["1"];
    }
}

const registerEventHandlers = () => {

// assigns upTempArrow to that specific button
// document keyword grabs everything in index.html
// then you run func on document called querySelector
// then you are grabbing the id of #increaseTempControl
    const upTempArrow = document.querySelector("#increaseTempControl");
    const downTempArrow = document.querySelector("#decreaseTempControl");

// upTempArrow watches for a click
// set a call back function that handles the click event
// the event that the event listener is watching for is a click event
// you can change click to hover, mouse, etc. 
    upTempArrow.addEventListener('click', (event) => {
        console.log({ event, upTempArrow })
    });

    downTempArrow.addEventListener('click', (event) => {
        console.log({ event, downTempArrow })});
    
    updateCityHeader():
    const updateCity = document.getElementById("cityInput");
    updateCity.addEventListener('input', updateCityHeader)
    };



// next task is to get the 72 to print out on the console in dev tools
// then when you have access to it you can update it from there to increase with clicks
