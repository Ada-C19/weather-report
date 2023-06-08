"use strict";
const tempVal = parseInt(document.getElementById("temp"));
const tempContainterVal = document.getElementById("temp-container");

// Wave2
const changeTempColor = () => {

  if (tempVal > 80) {
    tempVal.className = 'above80Temp';
    tempContainterVal.className = 'above80Bk';

  } else if (tempVal < 80 && tempVal > 69) {
    tempVal.className.add('temp69To80');
    tempContainterVal.className = 'temp69To80Bk';
  };
}
changeTempColor();