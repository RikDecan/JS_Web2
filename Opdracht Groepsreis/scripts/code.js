// Dit is de functie die moet worden opgeroepen zodra de browser klaar is met het inladen vd pagina
// (dit gebeurt niet zomaar vanzelf, je zult iets moeten doen die dit bewerkstelligt)!
const setup = () => {
    // TODO
    // registreer de juiste click event listener voor de "Voeg toe" button
	let btnAdd = document.querySelector('#btnAdd');
	btnAdd.addEventListener("click", addCost)


    // TODO
    // registreer de juiste input event listener op het invoerveld voor het aantal personen


    // TODO
    // registreer de juiste click event listener op elk .delete element (icoontje)



    // GEGEVEN (laat dit staan)
    // Zorg ervoor dat bij het starten, de kosten up-to-date worden gebracht
    updateAllCosts();
};

// Dit is de event listener die wordt opgeroepen telkens de gebruiker op een delete icoontje klikt
const deleteCost = (event) => {
    // TODO
    // verwijder de kost van het geklikte .delete element


    // GEGEVEN (laat dit staan)
    // update alle kosten (kon efficienter, maar makkelijker voor de programmeur)
    updateAllCosts();
}

// Dit is de event listener die moet worden opgeroepen telkens de gebruiker het aantal personen aanpast
const personCountChanged = () => {
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
	
    // en stop ze in variabelen 'price' (string), 'isFixed' (een boolean) en 'description' (string)
    const price= txtAmount.value; // vervang de lege string door iets zinvols!
	console.log(price);
	
	let soortKost = "";
	
	if (chkFixedCost.checked) {
		
        const isFixed=true;
		console.log(isFixed);
		soortKost = 'fixed';
		
		let lstCosts = document.querySelector('.lstCosts');
	    lstCosts.insertAdjacentHTML("beforeend",`<li><span class="cost" > isFixed = true </span></li>`);

		
		
		
		
    } else {
		
        const isFixed=false;
		console.log(isFixed);
		soortKost = 'per-person';
		
		let lstCosts = document.querySelector('.lstCosts');
	    lstCosts.insertAdjacentHTML("beforeend",`<li><span class="cost" > isFixed = false </span></li>`);


	}	
		
    const description= txtDescription.value; 
	console.log(description);
	
    

    // TODO
    // Voeg de juiste HTML toe aan de DOM-tree, al naargelang het een vaste kost is of niet
    // Je hoeft enkel data-cost-fixed, data-cost-per-person en de description in te vullen
    // met (o.a.) behulp van de drie variabelen hierboven.
    // Voor het bedrag van de kost vul je gewoon 0 in, er staat immers onderaan een oproep
    // van updateCosts() die dat correct zal updaten!
	
	let lstCosts = document.querySelector('.lstCosts');
	

	

	
	

//<li><span class="cost" data-cost-fixed="1000">0</span> Vervoer (heen en terug)<span><img class="delete" src="images/remove.png"></span></li>
//<li><span class="cost" data-cost-per-person="100">0</span> Hotel nacht 1<span><img class="delete" src="images/remove.png"></span></li>

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


};

window.addEventListener("load", setup);

