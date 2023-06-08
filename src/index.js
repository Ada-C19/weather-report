
const getLocation = (location) => {
    const url ='http://127.0.0.1:5000/location';

    return axios.get(url, {params:{q:location}})
    .then((response)=>{

    let latitude = response.data[0].lat;
    let longitude = response.data[0].lon
    console.log("working")
    console.log(latitude)
    return {latitude:latitude, longitude: longitude};


    })
    .catch( (error) => {
        console.log('error in findLatitudeAndLongitude!');
      });
    
 }
 getLocation("Seattle")





// states
const state = {
    temp: 0,
    landscape:"🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
    city: "Seattle"

}

// selected elements
const temp = document.getElementById("tempValue");
const controlUp = document.getElementById("increaseTempControl");
const controlDown = document.getElementById("decreaseTempControl");
const landscape = document.getElementById("landscape");
const cityName = document.getElementById("headerCityName");
const cityInput = document.getElementById("cityNameInput");
const reset = document.getElementById("cityNameReset");
const skyImage = document.getElementById("sky");
const sky = document.getElementById("skySelect");
const weatherGarden = document.getElementById("gardenContent")


// helper functions
const changeColor = () =>{
    if (state.temp>80){
        temp.className = 'red';
        landscape.innerText = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }
    else if (state.temp>69){
        temp.className = 'orange';
        landscape.innerText = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }
    else if(state.temp>59){
        temp.className = 'yellow';
        landscape.innerText = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }
    else if(state.temp>49){
        temp.className = 'green'
        landscape.innerText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    else{
        temp.className = 'teal'
        landscape.innerText = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
}

// functions
const increaseTemp = () =>{
    changeColor()
    state.temp+= 1
    temp.innerText = state.temp
    
}

const decreaseTemp = () => {
    changeColor()
    state.temp -= 1
    temp.innerText = state.temp
    
}

const resetCity = () =>{
    cityName.textContent = state.city;
    cityInput.value = state.city;

}

const changeSky= () =>{
   const skyValue = document.getElementById("skySelect").value;

   if (skyValue === "snowy"){
        skyImage.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
        weatherGarden.className = "snowy";

    }
   else if (skyValue === "rainy"){
        skyImage.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
        weatherGarden.className = "rainy";

    }
   else if (skyValue === "sunny") {
        skyImage.textContent = "☁️ ☁️ ☁️☁️ ☁️ ☀️ ☁️ ☁️☁️ ☁️"
        weatherGarden.className = "sunny";
   }
   
   else if (skyValue === "cloudy") {
        skyImage.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️ ☁️☁️☁️"
        weatherGarden.className = "cloudy";
   }



}

// event listeners
controlUp.addEventListener('click', increaseTemp)
controlDown.addEventListener('click', decreaseTemp)
cityInput.addEventListener('input', function(){
    cityName.textContent = this.value;
})
sky.addEventListener('change', changeSky)
reset.addEventListener("click", resetCity)





