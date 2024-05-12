const setup = () => {
	let colorDemos = document.getElementsByClassName("colorDemo");
	let redSlider = document.getElementsByClassName("redSlider");
	let greenSlider = document.getElementsByClassName("greenSlider");
	let blueSlider = document.getElementsByClassName("blueSlider");

	redSlider[0].addEventListener("change", updateColor);
	redSlider[0].addEventListener("input", updateColor);
	greenSlider[0].addEventListener("change", updateColor);
	greenSlider[0].addEventListener("input", updateColor);
	blueSlider[0].addEventListener("change", updateColor);
	blueSlider[0].addEventListener("input", updateColor);

	updateColor();
}

const updateColor = () => {
	let redSlider = document.getElementsByClassName("redSlider")[0].value;
	let greenSlider = document.getElementsByClassName("greenSlider")[0].value;
	let blueSlider = document.getElementsByClassName("blueSlider")[0].value;

	let colorDemo = document.getElementsByClassName("colorDemo")[0];
	colorDemo.style.backgroundColor = "rgb(" + redSlider + ", " + greenSlider + ", " + blueSlider + ")";

}
window.addEventListener("load", setup);