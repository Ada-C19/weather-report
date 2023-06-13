"use strict";
const state = {
  tempEl: document.getElementById("temp"),
  tempConEl: document.getElementById("temp-container"),
  tempIncrease: document.getElementById("temp-increase"),
  tempDecrease: document.getElementById("temp-decrease"),
  tempVal: parseInt(document.getElementById("temp").textContent),
  landscapeEl: document.getElementById("landscape"),
  mainTitle: document.getElementById("city"),
  inputField: document.getElementById("city-choice"),
  getTempButton: document.getElementById("get-current-temp"),
  skyDropdown: document.getElementById("sky-dropdown"),
  skyEl: document.getElementById("sky"),
  resetCityButton: document.getElementById("reset-city"),
}

// Wave2
const changeTempColor = () => {
  if (state.tempVal > 80) {
    state.tempEl.className = 'above80Temp';
    state.tempConEl.className = 'above80Bk';
  } else if (state.tempVal < 80 && state.tempVal > 69) {
    state.tempEl.className = 'temp69To80';
    state.tempConEl.className = 'temp69To80Bk';
  } else if (state.tempVal < 70 && state.tempVal > 59) {
    state.tempEl.className = 'temp59To70';
    state.tempConEl.className = 'temp59To70Bk';
  } else if (state.tempVal < 60 && state.tempVal > 49) {
    state.tempEl.className = 'temp49To60';
    state.tempConEl.className = 'temp49To60Bk';
  } else if (state.tempVal < 50) {
    state.tempEl.className = 'blow50';
    state.tempConEl.className = 'blow50Bk';
  };
}

const changeLandscape = () => {
  const landscapeImage = document.getElementById("landscape-img");
  if (state.tempVal >= 80) {
    landscapeImage.src = 'assets/landscapes/dunes.jpg';
    landscapeImage.alt = 'Desert dunes landscape';
  } else if (state.tempVal < 80 && state.tempVal >= 70) {
    landscapeImage.src = 'assets/landscapes/grass.jpg';
    landscapeImage.alt = 'Happy cow in lush grassy green hills landscape';
  } else if (state.tempVal < 70 && state.tempVal >= 33) {
    landscapeImage.src = 'assets/landscapes/forest.jpg';
    landscapeImage.alt = 'Foggy dense forest landscape';
  } else {
    landscapeImage.src = 'assets/landscapes/tundra.jpg';
    landscapeImage.alt = 'Icy expansive landscape';
  }
}

state.tempIncrease.addEventListener('click', (event) => {
  event.preventDefault()
  state.tempVal += 1;
  state.tempEl.textContent = state.tempVal;
  changeTempColor();
  changeLandscape();
})

state.tempDecrease.addEventListener('click', (event) => {
  event.preventDefault()
  state.tempVal -= 1;
  state.tempEl.textContent = state.tempVal;
  changeTempColor();
  changeLandscape();
})

//Wave 3
state.inputField.addEventListener('keyup', (event) => {
  state.mainTitle.textContent = state.inputField.value
})

//Wave 4
let lat;
let lon;
const getLocation = () => {
  // console.log(state.mainTitle);
  const url = `http://127.0.0.1:5000/location`;
  axios.get(url, {
    params: {
      q: state.mainTitle.textContent,
    }})
    .then((response) => {
      console.log(response.data[0].lat, response.data[0].lon)
      getWeather(response.data[0].lat, response.data[0].lon);
      }
    )
    .catch((error) => {
      console.log(error);
    })
};

const getWeather = (lat, lon) => {
  return (axios.get('http://127.0.0.1:5000/weather', {
    params: {
      lat: lat,
      lon: lon,
    }})
    .then((response) => {

      console.log(response.data.main.temp)
      const tempInF = (response.data.main.temp - 273.15) * (9/5) + 32;
      state.tempVal = parseInt(tempInF);
      // console.log(state.tempVal)
      state.tempEl.textContent = state.tempVal;
      changeTempColor();
      changeLandscape();
    })
    .catch((error)=> {
      console.log(error);
    })
  )
}
state.getTempButton.addEventListener('click', getLocation);

// WAVE 55555
const changeSky = () => {
  const skyValue = state.skyDropdown.value;
  console.log(skyValue);
  if (skyValue === 'puffy-cloud') {
    state.skyEl.className = 'puffy-clouds';
  } else if (skyValue === 'cloudy') {
    state.skyEl.className = 'cloudy';
  } else if (skyValue === 'storm-cloud') {
    state.skyEl.className = 'storm-cloud';
  } else if (skyValue === 'sunny') {
    state.skyEl.className = 'sunny';
  }
};

state.skyDropdown.addEventListener('change', changeSky)

// WAVE 6
state.resetCityButton.addEventListener('click', () => {
  state.mainTitle.textContent = 'Anamosa';
  state.inputField.value = 'Anamosa';
})