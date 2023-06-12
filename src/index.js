
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("button-down");
const tempButton = document.getElementById("get-temp")
let number = document.getElementById("temperature-now");
let numInt = parseFloat(number.innerText);
const weatherGarden = document.getElementById('weather-garden');
const weatherEmojis = document.getElementById('weather-emojis');
const cityDisplay = document.getElementById("city-display")
const cityId = document.getElementById("city-input")

function display() {
    cityDisplay.innerText = cityId.value;
  }

// console.log('curret temp', number.innerText);

const incrementNum = () => {
    number.innerText = numInt++;
}
// color changing function
const colorTemp = (number) => {

    if (numInt < 49){
        number.style.color = "teal";
    }
    else if (numInt < 59){
        number.style.color = "green";
    }
    else if (numInt < 69){
        number.style.color = "yellow";
    }
    else if (numInt < 79){
        number.style.color = "orange";
    }
    else {

            number.style.color = "red";
    }

}

const weatherGardenChanges = (number) => {

  if (numInt < 59){
      weatherGarden.style.backgroundColor = "green";
      weatherEmojis.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  }
  else if (numInt < 69){
      weatherGarden.style.backgroundColor = "yellow";
      weatherEmojis.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  }
  else if (numInt < 79){
      weatherGarden.style.backgroundColor = "orange";
      weatherEmojis.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  }
  else {
          weatherGarden.style.backgroundColor = "red";
          weatherEmojis.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
  }

}


upButton.addEventListener("click", () => {
    console.log(number);
    incrementNum();
    colorTemp(number);
    weatherGardenChanges(number);
});


const decrementNum = () => {
    number.innerText = numInt--;
}

downButton.addEventListener("click", () => {
    console.log(number);
    decrementNum()
    colorTemp(number)
    weatherGardenChanges(number);
});

const getLanLon = (city) => {
    return axios.get(`http://localhost:5000/location?q=${city}`)
    .then(response => {
        const lat = response.data[0].lat
        const lon = response.data[0].lon
        console.log(lat, lon)
        return [lat, lon]
    })
    .catch(e => {
        console.log(e)
    })
}

const getWeather = (coords) => {
    const lat = coords[0]
    const lon = coords[1]
    axios.get(`http://localhost:5000/weather?lat=${lat}&lon=${lon}`)
    .then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

tempButton.addEventListener("click", (cityDisplay) => {
    getLanLon(cityDisplay).then(resp => getWeather(resp))
    // .then get weather
})