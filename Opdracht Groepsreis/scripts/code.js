// Dit is de functie die moet worden opgeroepen zodra de browser klaar is met het inladen vd pagina
// (dit gebeurt niet zomaar vanzelf, je zult iets moeten doen die dit bewerkstelligt)!
const setup = () => {
    // TODO
    // registreer de juiste click event listener voor de "Voeg toe" button


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
    // en stop ze in variabelen 'price' (string), 'isFixed' (een boolean) en 'description' (string)
    const price=""; // vervang de lege string door iets zinvols!
    const isFixed=false; // vervang de false door iets zinvols!
    const description=""; // vervang de lege string door iets zinvols!

    // TODO
    // Voeg de juiste HTML toe aan de DOM-tree, al naargelang het een vaste kost is of niet
    // Je hoeft enkel data-cost-fixed, data-cost-per-person en de description in te vullen
    // met (o.a.) behulp van de drie variabelen hierboven.
    // Voor het bedrag van de kost vul je gewoon 0 in, er staat immers onderaan een oproep
    // van updateCosts() die dat correct zal updaten!


    // TODO
    // voeg de juiste click event listener toe op het nieuwe .delete element (icoontje)


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


