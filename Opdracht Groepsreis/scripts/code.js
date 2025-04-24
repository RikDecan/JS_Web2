// Dit is de functie die moet worden opgeroepen zodra de browser klaar is met het inladen vd pagina
// (dit gebeurt niet zomaar vanzelf, je zult iets moeten doen die dit bewerkstelligt)!
const setup = () => {
    // TODO
    // registreer de juiste click event listener voor de "Voeg toe" button
	let btnAdd = document.querySelector('#btnAdd');
	btnAdd.addEventListener("click", addCost)


    // TODO
    // registreer de juiste input event listener op het invoerveld voor het aantal personen
	let txtPersonCount = document.querySelector('#txtPersonCount');
	txtPersonCount.addEventListener( 'input',personCountChanged )



    // TODO
	const deleteButtons = document.querySelectorAll('.delete');

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', deleteCost);
	}
	
    // GEGEVEN (laat dit staan)
    // Zorg ervoor dat bij het starten, de kosten up-to-date worden gebracht
    updateAllCosts();
};

// Dit is de event listener die wordt opgeroepen telkens de gebruiker op een delete icoontje klikt
const deleteCost = (event) => {
    // TODO
    // verwijder de kost van het geklikte .delete element

	const listItem = event.target.closest('li');
	if (listItem) {
		listItem.remove();
	}

    // GEGEVEN (laat dit staan)
    // update alle kosten (kon efficienter, maar makkelijker voor de programmeur)
    updateAllCosts();
}

// Dit is de event listener die moet worden opgeroepen telkens de gebruiker het aantal personen aanpast
const personCountChanged = () => {
	
	
	
	let txtPersonCount = document.querySelector('#txtPersonCount');

	
	let aantalPersonen = txtPersonCount.value; 

	
	 let spannerPerPersoon = document.querySelectorAll('span.cost[data-cost-per-person]');
	 
	 for (let i = 0; i < spannerPerPersoon.length; i++) {

		let atribuutwaarde =  spannerPerPersoon[i].getAttribute('data-cost-per-person');
		let costPerPerson = atribuutwaarde * aantalPersonen
		spannerPerPersoon[i].textContent = costPerPerson;
		
	 }
	 
	let spannerFixed = document.querySelectorAll('span.cost[data-cost-fixed]');
	for (let i = 0; i < spannerFixed.length; i++) {

		let atribuutwaarde =  spannerFixed[i].getAttribute('data-cost-fixed');
		let costPerPerson = atribuutwaarde 
		spannerFixed[i].textContent = costPerPerson;
		
	 }

    // GEGEVEN (laat dit staan)
    updateAllCosts();
}

// Dit is de event listener die wordt opgeroepen als de gebruiker op de "Voeg toe" knop klikt
const addCost = () => {
    // TODO
    // Haal het bedrag, de beschrijving en de status vd checkbox op uit de DOM-tree
	let txtAmount = document.querySelector('#txtAmount');
	let chkFixedCost = document.querySelector('#chkFixedCost');
	let txtDescription = document.querySelector('#txtDescription');	
	
	const price= txtAmount.value;
	// console.log(price);
	
	const description= txtDescription.value; 
	// console.log(description);

//<li><span class="cost" data-cost-fixed="1000">0</span> Vervoer (heen en terug)<span><img class="delete" src="images/remove.png"></span></li>

    let lstCosts = document.querySelector('.lstCosts');

	lstCosts.insertAdjacentHTML("beforeend", `<li><span class="cost">${price}</span> ${description} <span><img class="delete" src="images/remove.png"></span></li>`);
		
	let laatsteElement = lstCosts.lastElementChild ;
	
    	
	let LaatElem_firstSpan = laatsteElement.getElementsByTagName('span')[0];
	
	
	if (chkFixedCost.checked) {
		
		LaatElem_firstSpan.setAttribute("data-cost-fixed",`${price}`); 
		
	} else {
		
		LaatElem_firstSpan.setAttribute("data-cost-per-person", `${price}`);
	}				


	// console.log(laatsteElement);


    // TODO
    // Voeg de juiste HTML toe aan de DOM-tree, al naargelang het een vaste kost is of niet
    // Je hoeft enkel data-cost-fixed, data-cost-per-person en de description in te vullen
    // met (o.a.) behulp van de drie variabelen hierboven.
    // Voor het bedrag van de kost vul je gewoon 0 in, er staat immers onderaan een oproep
    // van updateCosts() die dat correct zal updaten!

    // TODO
    // voeg de juiste click event listener toe op het nieuwe .delete element (icoontje)

    txtAmount.value=""; 
    chkFixedCost=chkFixedCost.unchecked; 
    txtDescription.value = "";
    // GEGEVEN  (laat dit staan)
    // update alle kosten (is niet efficient om alles uit te rekenen, maar makkelijk vr de programmeur ;)
    updateAllCosts();
};

// Dit is een hulpfunctie die alle kosten opnieuw doorrekent en update, ze wordt op
// verschillende plaatsen in de code gebruikt. Dit is GEEN event listener functie!
const updateAllCosts = () => {
    // TODO
    // update de bedragen van alle kosten (i.e. de correcte bedragen in de spans invullen)
    // en bereken ook de totale kost en vul deze in bij de span met class totalCost.

	let spannerFixed = document.querySelectorAll('span.cost[data-cost-fixed]');
	for (let i = 0; i < spannerFixed.length; i++) {

		let atribuutwaarde =  spannerFixed[i].getAttribute('data-cost-fixed');
		let costPerPerson = atribuutwaarde 
		spannerFixed[i].textContent = costPerPerson;
		
	 }

	 let totaal = 0;


	 let alleSpans = document.querySelectorAll('span.cost');
	 for (let i = 0; i < alleSpans.length; i++) {

		let txtContentAlsGetal = Number.parseInt(alleSpans[i].textContent,10)

		// console.log(txtContentAlsGetal);

		totaal += txtContentAlsGetal; 

	 }	 
	 console.log('Totale som:', totaal);

	 let spanTotalCost = document.querySelector('span.totalCost');
	 spanTotalCost.textContent = totaal;


	 const deleteButtons = document.querySelectorAll('.delete');

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', deleteCost);
	}


};

window.addEventListener("load", setup);
