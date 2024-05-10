const setup = () => {
	const sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("input", updateColor);
	}
	updateColor();
}

const updateColor = () => {
	const sliders = document.getElementsByClassName("slider");
	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	let colorDemo = document.getElementsByClassName("colorDemo")[0];
	colorDemo.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

window.addEventListener("load", setup);
