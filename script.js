var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var backgroundText = document.querySelector("#backgroundText");
var body = document.body;
var randomButton = document.querySelector("#randomButton");


function setGradient() {
 body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
 backgroundText.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function randomNumber() {
	return Math.floor(Math.random()*256);
}

function randomColor() {
	return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

function getRandomColors() {
	body.style.background = `linear-gradient(to right,${randomColor()}, ${randomColor()})`;
	backgroundText.textContent = body.style.background;
}

randomButton.addEventListener("click", getRandomColors);