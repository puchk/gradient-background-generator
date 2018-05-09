var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var backgroundText = document.querySelector("#backgroundText");
var body = document.body;

function setGradient() {
 body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
 backgroundText.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
