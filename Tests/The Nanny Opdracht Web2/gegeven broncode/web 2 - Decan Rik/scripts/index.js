// Gegeven is een array met objecten dat de verschillende personages beschrijft. Per personage is
// er een object dat de naam en de afbeeldings-url bevat van dat personage.
const personages = [
    {
        name : "Fran Fine",
        url : "images/Fran.webp"
    },
    {
        name : "Niles (butler)",
        url : "images/Niles.webp"
    },
    {
        name : "Maxwell Sheffield",
        url : "images/Maxwell.webp"
    },
    {
        name : "CC",
        url : "images/CC.webp"
    },
    {
        name : "Maggie Sheffield",
        url : "images/Maggie.webp"
    },
    {
        name : "Brighton Sheffield",
        url : "images/Brighton.webp"
    },
    {
        name : "Maggie Sheffield",
        url : "images/Grace.webp"
    }
];

// Zorg ervoor dat deze setup functie wordt opgeroepen zodra de browser klaar is met het inladen van de pagina
const setup = () => {

    console.log('Setup Functie opgeroepen...');
    console.log("")

    let spans = document.getElementsByTagName("span");



    for (let i=0 ; i <spans.length ; i++){

            const maakSelected = () =>{
            spans[i].classList.add("selected");
            console.log('element geselecteerd');
            }

            const checkSelected = () =>{
                if ( spans[i].classList.contains("selected"))
                {
                    spans[i].classList.remove("selected");
                    console.log('geselecteerd element verwijderd');
                }else{
                    spans[i].addEventListener("click", maakSelected);
                }
            }

            spans[i].addEventListener("click", maakSelected);
            checkSelected();

    }


    for (let i=0; i <= spans.length; i++){

        let spans = document.getElementsByTagName("span")[i];

    }

    // Voeg voor elk personage een span toe met diens naam (zoals beschreven in de broncode van het HTML document),
    // en gebruik hiervoor insertAdjacentHTML. Koppel aan elke span een click event listener
    // die de functie clickCharacter oproept.



    const  voegPersonagesToe= () =>{

        for (let i=0; i > personages.length; i++){

            let charsel = document.getElementsByClassName("character-selection")[0];
            charsel.insertAdjacentHTML("beforeend", "<span>hi there</span>");
        }
    }

    window.addEventListener('load',voegPersonagesToe);



    // In de HTML code staat bij elke span een attribuut data-info="???". Het is de bedoeling dat je
    // zelf beslist welke custom-data value je aan elke <span> koppelt (het zal dus NIET "???" zijn!).
    //
    // Je oplossing MOET op basis van deze custom-data kunnen achterhalen welke afbeeldings-url moet
    // getoond worden als er op de naam geklikt wordt (zie uitleg in functie clickCharacter).
    //
    // HINT : Twee typische mogelijkheden zijn "de url zelf" of "de positie vh personage in het array" ;)
    //
    // LET OP : dit custom data-attribuut staat opzettelijk NIET getoond in de demo video, maar is
    // wel degelijk VERPLICHT te gebruiken in je oplossing!

    // Zorg ervoor dat er initieel niks geselecteerd is en het logo (zie afbeelding image/Logo.webp)
    // verschijnt in het image met class character-image
}

// Dit is de functie die wordt opgeroepen bij een klik op de naam van een personage
const clickCharacter = (event) => {

    // update de selectie
    // - indien klik op reeds geselecteerde naam : er is geen geselecteerd personage meer
    // - indien klik op andere naam : selecteer dat personage

    // Een geselecteerd personage leidt tot 2 visuele aanpassingen : de afbeelding en de naam.

    // De afbeelding van dit personage wordt getoond in het <image> element met class "character-image"
    // Indien er geen selectie is, wordt het logo getoond (zie images/Logo.webp).

    // Om de juiste afbeeldings-url van een personage te achterhalen, MOET je hiervoor het zelfverzonnen
    // custom data-attribuut "data-info" gebruiken! (zie HINT in setup functie).

    // De naam van het geselecteerde personage krijgt een class "selected". Andere namen hebben deze
    // class niet. Indien er geen selectie is, heeft natuurlijk geen enkele naam deze class.

    // Bijvoorbeeld, een klik op naam "CC" doet ons zoeken in array "names" naar precies die naam.
    // We vinden die url op indexpositie 3 in array "names" en op diezelfde positie in het "urls" array
    // vinden we de url "images/CC.webp".

}

window.addEventListener('load',setup);






























//Lord have mercy

