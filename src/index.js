// const so 72 is not hard coded, used in increaseTemp & decreaseTemp functions
const tempValue = document.getElementById('tempValue');


// assign a constant state for temp
const state = {
    tempCount : tempValue.innerText, 
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


// DO NOT NEED ANYMORE, BUT LEAVING FOR REVIEW
// functions to update the number on temp gauge
// const changeTemperature = () => {
//     const tempContainer = document.getElementById("temperature-id");
//     tempContainer.textContent = `${state.tempCount}`;
//     tempRange()
// }



// add 1 degree to temp
// had to transform str to int to +1 properly, otherwise it was 721
// innerText is a key on the element span with id "tempValue"
// go to dev tools console and click the up and down arrows, see the console!
const increaseTemperature = () => {
    state.tempCount = Number(state.tempCount) + 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// subtract 1 degree to temp
// had to transform str to int to -1 properly
// innerText is a key on the element span with id "tempValue"
const decreaseTemperature = () => {
    state.tempCount = Number(state.tempCount) - 1;
    tempValue.innerText = state.tempCount;
    tempRange();
    console.log(state.tempCount)
    // changeTemperature()
};

// function to set ranges for temperature and change colors
// of the temperature number & print emojis for landscape
const tempRange = () => {
    if (state.tempCount <= 49){
        const temp = document.getElementById("temperature-id")
        temp.className="teal";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["5"];
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        const temp = document.getElementById("temperature-id")
        temp.className="green";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["4"];
    }
    else if (state.tempCount <= 69 && state.tempCount >= 60){
        const temp = document.getElementById("temperature-id")
        temp.className="yellow";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["3"];
    }
    else if (state.tempCount >=70 && state.tempCount <= 79){
        const temp = document.getElementById("temperature-id")
        temp.className="orange";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["2"];
    }
    else if (state.tempCount >= 80){
        const temp = document.getElementById("temperature-id")
        temp.className ="red";
        const landscape = document.getElementById("weather-garden-id")
        landscape.textContent = landscapeEmojis["1"];
    }
}


const registerEventHandlers = () => {

// assigns upTempArrow to that specific button. Document keyword grabs everything in index.html
// then you run func on document called querySelector. Then you are grabbing the id of increaseTempControl
// Do not need # in front of decreaseTempControl bc .getElementById does it automatically
const downTempArrow = document.getElementById("decreaseTempControl");
downTempArrow.addEventListener("click", decreaseTemperature);

const upTempArrow = document.getElementById("increaseTempControl");
upTempArrow.addEventListener("click", increaseTemperature);


// NOTE FOR CHAINED EVENTS BELOW: YOU CAN'T PULL OUT/LOOK AT 1 SPECIFIC EVENT AT A TIME
// Because you are storing in memory you can't grab individual events, chaining can be problematic for this reason
    // const upTempArrow = document.getElementById("#increaseTempControl").addEventListener("click", increaseTemperature);
    // const downTempArrow = document.getElementById("#decreaseTempControl").addEventListener("click", decreaseTemperature);

    
    // updateCityHeader();
    // const updateCity = document.getElementById("cityNameInput");
    // updateCity.addEventListener('input', updateCityHeader)
};

// previously didn't exist, calls function here to register events
registerEventHandlers();


