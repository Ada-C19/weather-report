//STATES
const state = {
    city: 'Seattle',
    temp: 72,
};


// WAVE 2 HELPER FUNCTION //////////////////////

//  grass for color and garden https://codepen.io/graphilla/pen/ExQqyXq
const applyColorAndGarden = (element, temperature) => {
    element.classList.remove('red', 'orange', 'yellow', 'green', 'teal', 'ice');
  
    let landscape = '';
  
    if (temperature >= 80) {
      element.classList.add('red');
      landscape = '🌵🏜️🌵🐍🦂🌋👹🌋🦂🐍🌵🏜️🌵';
    } else if (temperature >= 70) {
      element.classList.add('orange');
      landscape = '🌞🌞🌻🌻🏖️🏝️👙🏝️🏖️🌻🌻🌞🌞';
    } else if (temperature >= 60) {
      element.classList.add('yellow');
      landscape = '🌹🌸🎋🌹🌸🌱🪺🌱🌸🌹🎋🌸🌹';
    } else if (temperature >= 50) {
      element.classList.add('green');
      landscape = '🌳🌾🍂🪵🌳🐿️🧣🐿️🌳🪵🍂🌾🌳';
    } else if (temperature >= 40) {
      element.classList.add('teal');
      landscape = '🌲🌳🌨️🪵🌲🌳🧤🌳🌲🪵🌨️🌳🌲';
    } else if (temperature < 40) {
      element.classList.add('ice');
      landscape = '🎄❄️🌨️🌲⛄️🌨️❄️🌨️⛄️🌲🌨️❄️🎄';
    }
    const landscapeElement = document.querySelector("#landscape");
    landscapeElement.textContent = landscape;
  };


// WAVE 2 increase and decrease temp buttons change number///////

// line 24  <span id="increaseTempControl">⬆️</span>
// line 25  <span id="tempValue"></span>
// line 26  <span id="decreaseTempControl">⬇️</span>

  const increaseTemp = () => {
    const tempContainer = document.querySelector("#tempValue");
    state.temp++;
    console.log(state.temp);
    tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };
  
  const decreaseTemp = () => {
    const tempContainer = document.querySelector("#tempValue");
    // query selector is our document method
    state.temp--;
    console.log(state.temp);
    tempContainer.textContent = state.temp;
    applyColorAndGarden(tempContainer, state.temp);
  };


  //WAVE 3 grab the value of the text input elemen.//////////////////////

  // THIS IS THE NAME INPUT BOX   
  //input: line 40 "cityNameInput"

  //THIS IS THE HEADER WITH THE STARS CSS
  //output: line 18 id="headerCityName"

  // WAVE 3 FUNCTION ////////////////////////////
  const updateCity = () => {
    const cityBox = document.getElementById('cityNameInput').value;
    //get element by id is our document method
    const cityHeader = document.getElementById('headerCityName');
    state.city = cityBox;
    cityHeader.textContent = state.city;
  }



//WAVE 5  need to change a select element//////////////////////

//THIS IS THE DROPDOWN SELECTOR 
//input line 33  <select id="skySelect">

//THIS IS WHERE YOU WILL SEE THE SKY EMOJIS
//output  line 47 <div id="sky"></div>

//sky emojis ref, make this prettier its hideous
// Sunny 	"☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
// sunny effect https://codepen.io/DanielleOwens/pen/rYGeMz
// Cloudy 	"☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
//cloud effect https://codepen.io/iamrohan/pen/ezzaMq
// Rainy 	"🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
// rain effect https://codepen.io/arickle/pen/XKjMZY
// Snowy 	"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
// snow effect https://codepen.io/yaelsilvermanpeet/pen/KKrwZgJ

//WAVE 5 SKY HELPER FUNCTION? //////////////////////
// const applySky = (selector) => {}


// wave 4 get realtime temp

//WAVE 5 FUNCTION //////////////////////
// const skyView = () => {
//   const skySelector = document.getElementById('skySelect').value;
//   const skyContainer = document.getElementById('sky');
//   applySky()
// };


// WAVE 6 reset city name ////////////////////////

//WAVE 6 FUNCTION /////////////////////

const resetCity = () => {
    const cityContainer = document.getElementById('cityNameInput');
    const cityHeader = document.getElementById('headerCityName')
    cityContainer.value = '';
    cityHeader.textContent = '';
    //what kind of method is this called? effects html elements differently
};


  // EVENT HANDLERS FOR ALL WAVES LIVE HERE ! //////////////
  const registerEventHandlers = () => {
    // WAVE 2 event is 'click listening to increase decrease Temp handler///////
    const increaseTempControl = document.getElementById('increaseTempControl');
    increaseTempControl.addEventListener('click', increaseTemp);
  
    const decreaseTempControl = document.getElementById('decreaseTempControl');
    decreaseTempControl.addEventListener('click', decreaseTemp);

    // WAVE 3 event is 'input' listening to updateCity handler //////////// 
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.addEventListener('input', updateCity);

    // WAVE 5 event is 'change' listening to skyView handler ///////
    //const skyUpdate = document.getElementById('skySelect');
    // SkyUpdate.addeventListenere('change', skyView)


    //WAVE 6 event is 'click' listening to 'resetCount' handler /////
    const resetButton = document.querySelector("#cityNameReset");
    resetButton.addEventListener("click", resetCity);


  };
  document.addEventListener("DOMContentLoaded", registerEventHandlers);
  



//extra functions

//move realtime temp down into city name 
//add current city name to realtime button connect to update city name
//sky to change with real time 
//change graphics on sky and garden 
//temperature guage 