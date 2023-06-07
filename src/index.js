// assigns upTempArrow to that specific button
// document keyword grabs everything in index.html
// then you run func on document called querySelector
// then you are grabbing the id of #increaseTempControl
const upTempArrow = document.querySelector("#increaseTempControl");
const downTempArrow = document.querySelector("#decreaseTempControl");



// upTempArrow watches for a click
// set a call back function that handles the click event
// the event that the event listener is watching for is a click event
// you can change click to hover, mouse, etc. 
upTempArrow.addEventListener('click', (event) => {
    console.log({ event, upTempArrow })
});


downTempArrow.addEventListener('click', (event) => {
    console.log({ event, downTempArrow })
});




// next task is to get the 72 to print out on the console in dev tools
// then when you have access to it you can update it from there to increase with clicks


