const state = {
    tempCount : 0,
    city: "Seattle"
}

const landscapeImg = { 
    "1" : "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    "2" : "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
    "3" : "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
    "4" : "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
    "5" : "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
};
//change header city name from search input
const updateCityHeader = () => {
    const inputName = document.getElementById("cityInput").value;
    const header = document.getElementById("headerCityName");
    state.city = inputName;
    header.textContent = state.city;
}


//function updates number of temp 
const changeTemp = () => {
    const tempContainer = document.getElementById("temp-display");
    tempContainer.textContent = `${state.tempCount}`;
    tempRange()
}

const addTemp = () => { //adds 1 to temp
    state.tempCount += 1;
    changeTemp()
};

const subtractTemp = () => { //subtracts 1 from temp
    state.tempCount -= 1;
    changeTemp()
};

//this function sets ranges for temp and changes color
//of temp number and prints emojis to landscape
const tempRange = () => {
    if (state.tempCount <= 49){
        const temp = document.getElementById("temp-display")
        temp.className ="teal";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeImg["5"];
    }
    else if (state.tempCount <= 59 && state.tempCount >= 50){
        const temp = document.getElementById("temp-display")
        temp.className ="green";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeImg["4"];
    }
    else if (state.tempCount <= 69 && state.tempCount >=60){
        const temp = document.getElementById("temp-display")
        temp.className ="yellow";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeImg["3"];
    } 
    else if (state.tempCount  >= 70 && state.tempCount <= 79){
        const temp = document.getElementById("temp-display")
        temp.className ="orange";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeImg["2"];
    }
    else if (state.tempCount >= 80){
        const temp = document.getElementById("temp-display")
        temp.className ="red";
        const landscape = document.getElementById("landscape-container")
        landscape.textContent = landscapeImg["1"];
    }
}


//registering all event handlers
const registerEventHandlers = () => {

    const addTempButton = document.getElementById("add-temp").addEventListener("click", addTemp);
    
    const lowerTempButton = document.getElementById("sub-temp").addEventListener("click",subtractTemp );
    
    updateCityHeader();
    const updateCity = document.getElementById("cityInput");
    updateCity.addEventListener('input', updateCityHeader)
};

//document.addEventListener("DOMContentLoaded", registerEventHandlers);






// const query_params = {

//     "q": state.city,
 
// }

// axios 
// .get(`http://127.0.0.1:5000/location`,
// //request body
// {params :query_params},
// //config stuff, and a key called headers
// { headers: {
//     "Content-Type": "application/json",
//     "Authorization": `Bearer ${process.env.SLACK_TOKEN}`
//     }
// })
// .then((response) => {
//     //what to do if it works
//     console.log(response.data)
//     console.log("Success")
    

// })
// .catch((error)=> {
//     //if unsuccessul
//     console.log("fail")
// })

axios 
.get(`http://127.0.0.1:5000/location`,
//request body
{
    params : {
        q : state.city
    }
  },
//config stuff, and a key called headers
{ 
})
.then((response) => {
    //what to do if it works
    console.log(response.data)
    console.log("Success")
    

})
.catch((error)=> {
    //if unsuccessul
    console.log("fail")
})