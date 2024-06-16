const setup = () => {
	
	let lstIngredients  = document.querySelector('#lstIngredients');
	lstIngredients.addEventListener("click", verwijderElement); 
	
}

const verwijderElement = (event) => {
	
	let lstIngredients  = document.querySelector('#lstIngredients');
	
	let element = event.target;
	
	//console.log(element)
	
	lstIngredients.removeChild(element)

}


window.addEventListener("load", setup);