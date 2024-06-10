// Gegeven is een globale variabele 'fruits' met fruit-objecten.
//
// Elk object bevat de beschrijving van een soort fruit dat in de fruitsla kan terechtkomen.
//
// Voor elk soort fruit is er dus een fruit-object met drie properties :
//  - unique : dit is een unieke code die het soort fruit identificeert
//  - description : dit is een korte omschrijving van het soort fruit
//  - url : dit is de url van een afbeelding van het soort fruit
//
const fruits = [
    {
        unique : "KRS",
        description : "Kersen",
        url : "images/fruit01.jpg",
    },
    {
        unique : "SNS",
        description : "Sinaasappelen",
        url : "images/fruit02.jpg",
    },
    {
        unique : "BNN",
        description : "Banaan",
        url : "images/fruit03.jpg",
    },
    {
        unique : "PER",
        description : "Peer",
        url : "images/fruit04.jpg",
    },
    {
        unique : "FRM",
        description : "Frambozen",
        url : "images/fruit05.jpg",
    }
    ];

// De 'setup' functie wordt automatisch uitgevoerd zodra de pagina is ingeladen.
const setup = () => {
    // TODO 1
    // Voeg voor elk fruit-object (uit het 'fruits' array), een <img> toe aan de section ✅
    // met class 'fruits-section'. De precieze vorm van dit <img> element staat beschreven ✅
    // in de HTML file. Je mag dit niet met .innerHTML doen!
    // Vergeet niet dat elk <img> drie attributen moet krijgen : een 'src', een 'class' en een 'data-unique'!

    let galleryOfFruits = document.querySelector(".fruits-section"); 



    for (let i = 1 ; i <= fruits.length ; i++){

    let fruitImage = document.createElement("img"); 
    fruitImage.setAttribute("src", "images/fruit0"+[i]+".jpg");
    fruitImage.setAttribute("class","fruit" );
    fruitImage.setAttribute("data-unique", ""+[i]+""); 
    
    // image toevoegen na laatste kind
    galleryOfFruits.appendChild(fruitImage);
    }

    // TODO 2
    // Koppel aan elke toegevoegde <img> element een 'click' event listener die de functie 'addFruitAmount' oproept.

   let fruitFoto=document.getElementsByClassName("fruit");

    for (let i=0; i <= fruitFoto.length; i++) {
        fruitFoto[i].addEventListener("click", addFruitAmount);
       }

}

// De 'addFruitAmount' functie wordt opgeroepen telkens de gebruiker op een fruit afbeelding klikt.

const addFruitAmount = (event) => { console.log('fruit klik test'); //om te testen of het werkt✅
    // TODO 3
    // Indien aanwezig verwijder de huidige selectie, zowel bij de fruit afbeeldingen als in de fruitsla lijst,
    // in beide gevallen zijn dit elementen met class 'selected'!


    let fruitFoto=document.getElementsByClassName("fruit");
   
   for (let i=0; i <= fruitFoto.length; i++) {
    fruitFoto[i].classList.add("selected");
   }

 

    // Dus :
    // - ofwel is er nog  geen selectie
    // - ofwel is er een <img>-element EN een <li>-element met class 'selected'.
    //
    // De 'selected' class wordt toegevoegd aan het juiste <img>-element in TODO 4
    // De 'selected' class wordt toegevoegd aan het juiste <li>-element in TODO 8

      const fruitFoto2 =document.getElementsByClassName("fruit");
   for (let i=0;i>fruitFoto2.length;i++) {
       const img = fruitFoto2[i];
       const dataUniqueAsText = img.getAttribute("data-unique");
       const index = Number.parseInt(dataUniqueAsText,10);
       if (index === currentIndex) {
           img.classList.add("selected");
       } else {
           img.classList.remove("selected");
       }
   }
    

    // TODO 4
    // Selecteer de geklikte fruit afbeelding door er een class 'selected' aan toe te voegen.


    
    // TODO 5
    // Zoek op hoeveel keer we het geklikte fruit willen toevoegen, met behulp van functie 'getAmountToAdd'



    // TODO 6
    // Zoek het juiste fruit-object op, met behulp van de 'data-unique' waarde van het geklikte <img>
    // element en de functie 'findFruitObjectByUnique'.


    
    // TODO BELANGRIJK BELANGRIJK BELANGRIJK BELANGRIJK
    //
    // Als hieronder iets staat over .salad-item, bedoelen we een <li>-element met class 'salad-item'
    // in de <ul>-lijst met class 'salad'
    //
    // De code van TODO's 7a 7b en 8 zijn wellicht niet makkelijk op te splitsen in stukken, deze TODO's
    // dus gerust samen in 1 groter blok code opgelost worden.
    //
    // TODO BELANGRIJK BELANGRIJK BELANGRIJK BELANGRIJK

    
    // TODO 7a)
    // Indien er nog geen .salad-item bestaat voor het geklikte fruit, voeg zo'n <li> element toe (geen .innerHTML!)
    // De precieze vorm van dit <li>-element vind je terug in de HTML-file.
    // Bij TODO 8 moet dit nieuwe <li>-element de class 'selected' krijgen, het is veel makkelijker om
    // dit al meteen bij het toevoegen te doen!


    // TODO 7b)
    // Indien er wel al een .salad-item bestaat voor het geklikte fruit, update het aantal in de bijbehorende
    // <span>.
    //
    // De moeilijkheid hier is te achterhalen welk <span>-element je precies moet updaten!
    //
    // Eerst moet je het juiste .salad-item vinden, dit doe je door ze allemaal te overlopen en de waarde
    // van het 'data-unique' attribuut te vergelijken met dat van het geklikte <img>-element (zie TODO 5).
    //
    // Er zijn twee makkelijke manieren om de juiste <span> te bemachtigen :
    //
    // MANIER 1 : tellen
    // Elk .salad-item heeft precies 1 <span>-element, er zijn dus precies evenveel .salad.item elementen als <span>s !!
    // Als je dus bv. de gezochte data-unique waarde vindt bij het derde .salad-item, dan moet je de derde <span> updaten
    //
    // MANIER 2 : child opvragen
    // Elk .salad-item heeft precies 1 <span>-element als child element.
    // Je kunt dus van het .salad-item het juiste child opvragen en dat updaten.


    // TODO 8
    // Selecteer het juiste .salad-item door er een CSS-class 'selected' aan toe te voegen.
    // Indien dit een nieuw .salad-item, zou je dit best in de code bij TODO 7a doen!
    // Indien het een bestaand .salad-item is, heb je dit element al bij TODO 7b gevonden.


    

}

// Deze hulpfunctie hoort bij TODO 5
// Deze functie checkt welke <option> gekozen is in het <select> element, en retourneert de waarde van
// het value attribuut. De return waarde moet een Number zijn (dus geen string!)
const getAmountToAdd = () => {
    // TODO : schrijf hieronder je code

    let CombinationOfFruits = document.querySelector(".salad"); 

    let startFruitList = document.createElement("ul"); 

    for (let i = 1 ; i <= fruits.length ; i++){

        let fruitItem = document.createElement("li"); 
        fruitItem.setAttribute("src", "images/fruit0"+[i]+".jpg");
   
         // fruitImage.setAttribute("class","fruit" );
         // fruitImage.setAttribute("data-unique", ""+[i]+"");

         // listItem toevoegen na laatste kind
         startFruitList.appendChild(fruitItem);

}

}


// Deze hulpfunctie hoort bij TODO 6
// Deze functie overloopt het array met fruit-objecten en zoekt het fruit-object wiens 'unique' property overeenkomt
// met de meegegeven 'uniqueText' parameter.
// Indien gevonden, retourneert de functie dit fruit-object.
// Indien niet gevonden, retourneert de functie de speciale 'null' waarde.
const findFruitObjectByUnique = (uniqueText) => {
    // TODO : schrijf hieronder je code
}

// Voer de setup functie uit na het inladen van de pagina
window.addEventListener("load", setup);