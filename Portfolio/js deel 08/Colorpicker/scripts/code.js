const setup = () => {
	const btnSave = document.querySelector(".btnSave");
	btnSave.addEventListener("click",saveSwatch);

	const sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
};
const saveSwatch = () => {
	//<div class ="bSwatch" id = "bSwatch"><input type="button" class="btnDelete" value="X"></div>
	const div = document.createElement("div"); // klik op Save maakt een div in de section swatchComponents
	div.classList.add("bSwatch"); //ik geef het de klasse bSwatch, wat de CSS overneemt

	// haal de waarden op van de 3 sliders
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;

	// zet de waarden van de rgb values op het div element
	div.style.backgroundColor="rgb("+red+","+green+","+blue+")";

	div.setAttribute("data-red",red);
	div.setAttribute("data-green",green);
	div.setAttribute("data-blue",blue);

	const input = document.createElement("input")
	input.setAttribute("type", "button")
	input.value = "X";
	div.appendChild(input);
	input.classList.add("btnDelete");
	input.addEventListener("click", deleteSwatch);

	div.addEventListener("click",setColor);

	const swatchComponents = document.querySelector("#swatchComponents");
	swatchComponents.appendChild(div);

}

const setColor = (event) => {

	const swatch = event.target;
	const red = swatch.getAttribute("data-red");
	const green = swatch.getAttribute("data-green");
	const blue = swatch.getAttribute("data-blue");

	const sldRed = document.querySelector("#sldRed");
	const sldGreen = document.querySelector("#sldGreen");
	const sldBlue = document.querySelector("#sldBlue");

	sldRed.value = red;
	sldGreen.value = green;
	sldBlue.value = blue;

	update();
}

const deleteSwatch = (event) => {

	const deleteBtn = event.target;
	const div = deleteBtn.parentNode;

	const parent = document.querySelector("#swatchComponents");
	parent.removeChild(div);
}



const update = () => {
	// haal de waarden op van de 3 sliders
	let red=document.getElementById("sldRed").value;
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;

	document.getElementById("lblRed").textContent=red;
	document.getElementById("lblGreen").textContent=green;
	document.getElementById("lblBlue").textContent=blue;

	const swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

window.addEventListener("load", setup);