var heading3 = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var background = document.querySelector("#gradient");
// console.log(background);

background.style.background = "linear-gradient(to right, color1.value , red)";

function setgradient(){

	background.style.background = "linear-gradient(to right," + color1.value + " ," + color2.value +")";
}
function updatecolors(){
	heading3.innerHTML = " color 1 : " + color1.value + "  color 2 : " + color2.value ; 
}

console.log(heading3);
console.log(color2);
console.log(color1);

color1.addEventListener("input",function(){

	setgradient();
	updatecolors();
	console.log(color1.value);
	 
})
color2.addEventListener("input",function(){

	setgradient();
	updatecolors();
	console.log(color2.value);
})

