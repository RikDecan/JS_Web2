const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	 
	 
	let resultaatBtn = document.querySelector('#resultaatBtn');
	resultaatBtn.addEventListener("click" , genereerResultaat)
	
}



const genereerResultaat = () => {
	
	//console.log('eventListner werkt!');
	
	let isRokerCheckbox = document.querySelector('#isRokerCheckbox');	
		
	if (isRokerCheckbox.checked) {
		
        console.log('Is wel een roker');
		
    } else {
		
        console.log('Is geen roker');
		
	}
	
	let checkedRadioButton = document.querySelector("input[name='moedertaal']:checked") 
	
	if (checkedRadioButton.value == 'nl'){
		console.log('moedertaal is Nederlands');
	}
	else if (checkedRadioButton.value == 'fr'){
		console.log('moedertaal is Frans');

	}else {
		console.log('moedertaal is Engels');
	}
	
	
	let selectLand = document.querySelector('#selectLand');
	
    let selectedLandValue = selectLand.value;
	
	console.log(`Favoriete land is ${selectedLandValue}`);
	
	let selectBestelling = document.querySelector('#selectBestelling');
	
	let selectBestellingValue = selectBestelling.value;
	console.log(`Bestelling bestaat uit ${selectBestellingValue}`);
	
}

window.addEventListener("load", setup);
