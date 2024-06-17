
const heading = document.getElementsByClassName('heading')[0];

// const toGreen = () => {
//     window.console.log('change color to green');
//     window.document.body.style.backgroundColor = 'green';
//     heading.textContent = 'Color Green'
// }

// const toRed = () => {
//     window.console.log('change color to red');
//     window.document.body.style.backgroundColor = 'red';
//     heading.textContent = 'Color Red'
// }

// const toBlue = () => {
//     window.console.log('change color to blue');
//     window.document.body.style.backgroundColor = 'blue';
//     heading.textContent = 'Color Blue'
// }

// repeated code above, need to optimize
const toColor = (color) => {
    window.console.log('change color to blue');
    window.document.body.style.backgroundColor = `${color}`;
    heading.textContent = `Changed to ${color}`;
}

const toRandom = () => {
    // RGB 
    const red = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    window.document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    heading.textContent = `Changed to rgb(${red},${green},${blue})`;
}