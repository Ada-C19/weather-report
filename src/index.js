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
//City name search bar updates city name in header
const myChangeFunction = (input) => {
    const output = document.getElementById('search-output');
    output.value = input.value.toUpperCase();
};

const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15)* 9/5 + 32);
};
// 
// const LOCATIONIQ_KEY = process.env['api_key'];
const findLatitudeAndLongitude = async (input) => {
        let latitude, longitude;
            await axios.get('http://127.0.0.1:5000/location',
    {
      params: {
        // key: LOCATION_KEY,
        q: input,
        format: 'json'
      }
    })
    .then( (response) => {
      state.lat = response.data[0].lat;
      state.lon = response.data[0].lon;
      console.log('success in findLatitudeAndLongitude!', state.lat, state.lon);
  
      // make the next API call here!
    //   findWeather(latitude, longitude);
    })
    .catch( (error) => {
      console.log('error in findLatitudeAndLongitude!');
    });
  }
  
  const findWeather = async (latitude, longitude) => {
    axios.get('http://127.0.0.1:5000/weather',
    {
      params: {
        // key: WEATHER_KEY,
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

    
// select dom elemnt from html and addEventListerner
const selectReset = document.querySelector("#reset");
selectReset.addEventListener("click", resetCity) //clickReset )
console.log(selectReset)

// get realtime temperature event handling
const selectRealtime = document.querySelector("#realtime");
selectRealtime.addEventListener("click", resetRealtime)
console.log(selectRealtime)


// function for Realtime Temperature
async function resetRealtime() { 
    // alert("you have reset your temperature!")
    // state.tempCount = 75

    await findLatitudeAndLongitude(state.searchBox.value)
    await findWeather(state.lat, state.lon)
    kelvinToFahrenheit(state.tempCount)
    // console.log(state)
    
}

//const axios = require('axios');
// import axios, {isCancel, AxiosError} from 'axios';
// create function clickReset that return a defualt city in output
function resetCity () { 
    // alert("you have reset your city!")
    document.querySelector("#search-output").innerHTML ="Atlanta";
    document.querySelector("#search").value = "Atlanta";


    // axios
    //     .get('http://127.0.0.1:5000/location?q=Atlanta')
    //     .then((response) => {
    //         // Code that executes with a successful response goes here
    //         console.log('success!' + JSON.stringify(response));
    //     })
    //     .catch((error) => {
    //         // Code that executes with an unsuccessful response goes here
    //         console.log('error!' + JSON.stringify(response));
    //     });

}
// use state methode and addEvenlistener
//  to call click button
// anable change of color and garden emoji based on temperature changing
let gardenIcon;

function updateColor(tempCount) {
    // if (state.tempCount > 100) {
    //     // alert("Overheat! Fine safe shelter.")
    //     console.log('hellooooooo')
    // }
    if (state.tempCount >= 80) {
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
        state.color= "teal";
    }
    document.querySelector("#count").style.color = state.color
    console.log("Updated color " + state.color)
    document.querySelector("#flowers").innerHTML = gardenIcon
    console.log("Updated garden " + gardenIcon)
    

}


const upButton = document.querySelector("#button-up");
upButton.addEventListener("click", upFunction)

function upFunction() {
    
    state.tempCount++;
    // alert("Up" + state.tempCount)
    
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

const downButton = document.querySelector("#button-down");
downButton.addEventListener("click", downFunction)

function downFunction() {
    state.tempCount--;
    // alert("Down" + state.tempCount)
    document.querySelector("#count").innerHTML = state.tempCount;
    updateColor()
}

// add eventlistener to the select tag called select mood
// add change fuction to the dropdown list to print cloud mood 

const selectMood = document.querySelector("#moods");
const result = document.querySelector("#clouds");

selectMood.addEventListener("change", (event) => {
    console.log(selectMood.value)
    if (selectMood.value == "sunny") {
        // alert("You selected sunny")
        cloudIcon =  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    }
    else if (selectMood.value == "cloudy") {
        // alert("You selected cloudy")
        cloudIcon = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }
    else if (selectMood.value == "rainy") {
        // alert("You selected rainy")
        cloudIcon =  "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }
    else {
        // alert("You selected snowy")
        cloudIcon =  "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
// result.textContent = `You like ${event.target.value}`;
document.querySelector("#clouds").innerHTML = cloudIcon
});

onLoad()
// make get api request with axios

// const axios = require('axios');

// axios
//   .get('http://127.0.0.1:5000/location?q=Atlanta')
//   .then((response) => {
//     // Code that executes with a successful response goes here
//     console.log('success!');
//   })
//   .catch((error) => {
//     // Code that executes with an unsuccessful response goes here
//     console.log('error!');
//   });

