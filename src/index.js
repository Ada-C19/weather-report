const state = {
    tempValue: 70,
    tempLabel: null,
    emoji: null,
    cityLabel: null,
    cityValue: null,
    currentTempButton: null
};


const updateUI = () =>  {
    state.tempLabel.textContent = state.tempValue;
    console.log(state.tempValue)
}; 

const updateCity = (event) => {
    state.cityValue = event.target.value
    state.cityLabel.textContent = state.cityValue;
}


const getLocationInformation = () => {
    let location = state.cityValue;
    return axios
    .get('http://localhost:5000/location', {
        params: {
            q: location,
        },
    })
    .then((response) => {
        let lat = response.data[0].lat;
        let lon=response.data[0].lon;
        return {latitude:lat,longitude:lon}
    })
    .catch((error)=> {
        console.log('location fetch failed')
    });
};
// updateRealtimeWeather('Las Vegas')
// .then(response => {
//     console.log('does this work');
// });


    //     const { lat, lon } = response.data[0];
    //     return console.log({ lat, lon});
    // })
    

//     const weatherData = axios
//     .get('http://localhost:5000/weather', {
//         params: {
//             lat: locationData.latitude,
//             lon: locationData.longitude,
//         },
//     })
//     .then(response => {
//         const { temp } = response.data["current"]["temp"];
//         return console.log(temp)
// }) 



// Create an event handler & register an event
// Event handler - makes axios call (.then & .catch - proper logging)
// Save values returned from location IQ api - save to state to make another call to Weather endpoint
// "http://localhost:5000/endpoint"



const increaseTemp = () => {
    ++state.tempValue;
    updateUI();

    console.log("increasing temp")

    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
};


const decreaseTemp = () => {
    --state.tempValue;
    updateUI();
    console.log("decreasing temp")
    if (state.tempValue >= 80) {
        state.tempLabel.style.color = 'red';
        state.emoji.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (state.tempValue >= 70) {
        state.tempLabel.style.color = 'orange';
        state.emoji.textContent = "🌸🌿🌼__🌷🌻🌿_🌱_🌻🌷";
    } else if (state.tempValue >= 60) {
        state.tempLabel.style.color = 'yellow';
        state.emoji.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (state.tempValue >= 50) {
        state.tempLabel.style.color = 'green';
        state.emoji.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        state.tempLabel.style.color = 'teal';   
    }
}; 


const registerEventHandlers = () => {
loadControls()
    const topButton = document.querySelector("#increaseTempControl");
topButton.addEventListener("click", increaseTemp);
    const bottomButton = document.querySelector("#decreaseTempControl");
bottomButton.addEventListener("click", decreaseTemp);
    const cityButton = document.querySelector("#cityNameInput");
cityButton.addEventListener("input", updateCity);
    const realTempButton = document.querySelector("#currentTempButton");
realTempButton.addEventListener("click", handleRealTimeButtonClick);
    
}

const handleRealTimeButtonClick = () => {
    console.log('real time click');
    getLocationInformation();
}

const loadControls = () => {
    state.tempLabel = document.getElementById("tempLabel");
    state.emoji = document.getElementById("landscape");
    state.cityLabel = document.getElementById("headerCityName");
    state.cityValue = document.getElementById("cityNameInput").value;
    state.currentTempButton = document.getElementById("currentTempButton");
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
