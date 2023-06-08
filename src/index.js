// const temperatureContent = document.getElementById("temperature__content");

// let temperature = document.getElementById("tempValue").textContent;

// document.getElementById("tempValue").textContent = 420;

let temperature = document.getElementById("tempValue");

temperature.textContent = 420;

// temperature.textContent += 1;

const increaseTemp = (currentTemp) => {
  // console.log(temperature.textContent);
  currentTemp = parseInt(currentTemp);
  console.log(parseInt(temperature.textContent));
  console.log("the function ran");
  return currentTemp + 1;
};

temperature.textContent = increaseTemp(temperature.textContent);

console.log("what's up world");
