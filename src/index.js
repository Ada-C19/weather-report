"use strict";
const tempElement = document.getElementById("temp");
const tempContainterElement = document.getElementById("temp-container");
// console.log(typeof tempVal);
// Wave2
const changeTempColor = () => {
  const tempVal = parseInt(tempElement.textContent);
  if (tempVal > 80) {
    tempElement.className = 'above80Temp';
    tempContainterElement.className = 'above80Bk';
  } else if (tempVal < 80 && tempVal > 69) {
    tempElement.className = 'temp69To80';
    tempContainterElement.className = 'temp69To80Bk';
  } else if (tempVal < 70 && tempVal > 59) {
    tempElement.className = 'temp59To70';
    tempContainterElement.className = 'temp59To70Bk';
  } else if (tempVal < 60 && tempVal > 49) {
    tempElement.className = 'temp49To60';
    tempContainterElement.className = 'temp49To60Bk';
  } else if (tempVal < 50) {
    tempElement.className = 'blow50';
    tempContainterElement.className = 'blow50Bk';
  };
}
changeTempColor();