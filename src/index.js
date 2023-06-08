// import 'regenerator-runtime/runtime';
// import axios from 'axios';

const state = {
    city: 'Seattle',
    lat: 47.6038321,
    long: -122.3300624,
    temp: 72,
};

const convertTempF = (temp) => {
  return (temp - 273.15) * (9 / 5) + 32;
};

// find latitude and longitude
const longitudeAndLatitude = () => {
  axios
  .get('http://127.0.0.1:5000/location',
  {
    params: {
      q: (state.city),
    },
  })
  .then((response) => {
    console.log(response);
    state.lat = response.data[0]['lat'];
    state.long= response.data[0]['lon'];
    getWeatherTemp();
    })
  .catch((error) => {
    console.log("Error!");
    console.log(error.response.data)
  });
};



const getWeatherTemp = () => {
  axios
  .get('http://127.0.0.1:5000/weather', {
    params: {
      lat: state.lat,
      lon: state.long
    },
  })
  .then((response) => {
    const weatherReport = response.data;
    state.temp = Math.round(convertTempF(weatherReport.main.temp));
    changeTempFontColorAndLandscape();
  })
  .catch((error) => {
    console.log("ERROR!")
  })
}

const realtimeButton = document.getElementById('realtime');
realtimeButton.addEventListener('click', longitudeAndLatitude);





// changing font color

const changeTempFontColorAndLandscape = () => {
    let temp = state.temp;
    let color = 'orange';
    let ground = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷'
    if (temp >= 80) {
        color = 'red';
        ground = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }else if (temp >=70) {
        color = 'orange';
        ground = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    }else if (temp >= 60) {
        color = 'yellow';
        ground = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }else if (temp >=50) {
        color = 'green';
        ground = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }else {
        color = 'brown';
        ground = "💀💀💀💀💀💀💀💀💀💀💀💀💀";
    }
    const newGround = document.getElementById("groundemoji");
    newGround.textContent = ground;
    const temperature = document.getElementById('tempnumber');
    temperature.className = color;
    temperature.textContent = String(state.temp)
};



// increase
const increaseTemp = () => {
    state.temp += 1;
    changeTempFontColorAndLandscape();

};
const increaseButton = document.getElementById("up");
increaseButton.addEventListener("click", increaseTemp);

// decrease
const decreaseTemp = () => {
  state.temp -= 1;
  changeTempFontColorAndLandscape();
};

const decreaseButton = document.getElementById("down");
decreaseButton.addEventListener("click", decreaseTemp);


// update the city
const changeCity = () => {
    const city = document.getElementById("city");
    const inputCity = document.getElementById("searchbar").value;
    state.city = inputCity;
    city.textContent = state.city;
    }
    
const cityInput = document.getElementById("searchbar");
cityInput.addEventListener("input", changeCity);

//update sky

const updateSky = () => {
    const skyemoji = document.getElementById("skyemoji");
    const skystatus = document.getElementById("skystatus")
    const garden = document.querySelector(".garden")

    const skySelected = skystatus.options[skystatus.selectedIndex].value;
    skyemoji.textContent = skySelected;

    const skyBackground = skystatus.options[skystatus.selectedIndex].id;
    

    if (skyBackground === "cloudy") {
        garden.style.backgroundColor = "lightblue";
    }
    else if (skyBackground === "sunny") {
      garden.style.backgroundColor = "rgb(81, 218, 226)";
    }
    else if (skyBackground === "rainy") {
      garden.style.backgroundColor = "gray";
    }
    else if (skyBackground === "haily") {
      garden.style.backgroundColor = "white";
    }
    
}
const skyOption = document.getElementById("skystatus");
skyOption.addEventListener("change", updateSky);

// Reset city 
const resetCity = () => {
  const inputCity = document.getElementById("searchbar");
  inputCity.value = "Seattle";
}

// resetInputButton

const inputButton = document.getElementById("reset");
inputButton.addEventListener('click', resetCity);
