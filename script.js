var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var backgroundText = document.querySelector("#backgroundText");
var body = document.body;
var randomButton = document.querySelector("#randomButton");

setGradient();

function setGradient() {
 body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
 // backgroundText.textContent = body.style.background;
 backgroundText.textContent = `linear-gradient(to right,${color1.value},${color2.value})`;
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
	var random1 = randomColor();
	var random2 = randomColor();
	body.style.background = `linear-gradient(to right,${random1}, ${random2})`;
	// backgroundText.textContent = body.style.background;
	backgroundText.textContent = `linear-gradient(to right,${random1}, ${random2})`;
}

randomButton.addEventListener("click", getRandomColors);