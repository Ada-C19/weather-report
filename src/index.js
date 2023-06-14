const state = {
    tempCount: 0,
    searchBox: null,
    lat: 0,
    lon: 0,
    tempDisplay: null
};

const onLoad = () => {
    state.searchBox = document.getElementById('search');
    state.tempDisplay = document.getElementById('count');
};
// Function for calling Location API
const findLatitudeAndLongitude = async (input) => {
            await axios.get('http://127.0.0.1:5000/location',
    {
      params: {
        q: input,
        format: 'json'
      }
    })
    .then( (response) => {
      state.lat = response.data[0].lat;
      state.lon = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', state.lat, state.lon);
    })
    .catch( (error) => {
      console.log('error in findLatitudeAndLongitude!');
    });
  }
// Function for calling Location API
  const findWeather = async (latitude, longitude) => {
    axios.get('http://127.0.0.1:5000/weather',
    {
      params: {
        format: 'json',
        lat: latitude,
        lon: longitude
      }
    })
    .then( (response) => {
        console.log('success in findWeather!', response.data);
        state.tempCount = response.data.main.temp;
        state.tempDisplay.innerText = state.tempCount;
        const fahrenheitTemp = kelvinToFahrenheit(state.tempCount);
        state.tempCount = Math.floor(fahrenheitTemp);
        state.tempDisplay.innerText = Math.floor(fahrenheitTemp);
        updateColor();
    })
    .catch( (error) => {
      console.log('error in findWeather!', error);
    });
  }
// get temperature increment event handling
const upButton = document.querySelector("#button-up");
upButton.addEventListener("click", upFunction)

// get temperature decrement event handling
const downButton = document.querySelector("#button-down");
downButton.addEventListener("click", downFunction)

// get reset city event handling
const selectReset = document.querySelector("#reset");
selectReset.addEventListener("click", resetCity)

// get realtime temperature event handling
const selectRealtime = document.querySelector("#realtime");
selectRealtime.addEventListener("click", resetRealtime)

// get sky mood event handling
const selectMood = document.querySelector("#moods");
const result = document.querySelector("#clouds");
selectMood.addEventListener("change", updateSkyMood) 

// function for Temperature converter
const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15)* 9/5 + 32);
};

// function for city search
const citySearchFunction = (input) => {
    const output = document.getElementById('search-output');
    output.value = camelSentence(input.value);
};

function camelSentence(str) {
    return  (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}

// function for Realtime Temperature
async function resetRealtime() { 
    await findLatitudeAndLongitude(state.searchBox.value)
    await findWeather(state.lat, state.lon)
    kelvinToFahrenheit(state.tempCount)
}

// function for Reset City with a defual location
function resetCity () { 
    document.querySelector("#search-output").innerHTML ="Atlanta";
    document.querySelector("#search").value = "Atlanta";
}

// function for updating Color and Garden Emoji
function updateColor(tempCount) {
    if (state.tempCount > 100) {
        alert("Overheat! Fine safe shelter.")
        state.color = "brown";
        gardenIcon =  "🏜️🐪🏜️_🐫__🏜️🐪🏜️__🐫"
    }
    else if (state.tempCount >= 80) {
        state.color = "red";
        gardenIcon =  "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    }
    else if (state.tempCount >= 70) {
        state.color = "orange";
        gardenIcon
         = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }
    else if (state.tempCount >= 60) {
        state.color = "yellow";
        gardenIcon =  "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }
    else if (state.tempCount >= 50) {
        state.color = "green";
        gardenIcon =  "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    else {
        state.color= "teal"
    }
    document.querySelector("#count").style.color = state.color
    document.querySelector("#flowers").innerHTML = gardenIcon
    // console.log("Updated color " + state.color)
    // console.log("Updated garden " + gardenIcon)
}

// function for Temperature Increment button
function upFunction() {
    state.tempCount++;
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

// function for Temperature Decrement button
function downFunction() {
    state.tempCount--;
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

// function for updating Cloud emoji base on sky mood
function updateSkyMood() {
    if (selectMood.value == "sunny") {
        cloudIcon =  "☁️ 🌞 ☁️ ☀️ ☁️ 🌞"
    }
    else if (selectMood.value == "cloudy") {
        cloudIcon = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    }
    else if (selectMood.value == "rainy") {
        cloudIcon =  "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }
    else {
        cloudIcon =  "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
    document.querySelector("#clouds").innerHTML = cloudIcon
};

onLoad()


