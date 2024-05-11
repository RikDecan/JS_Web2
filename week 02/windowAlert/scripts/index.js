const setup = () => {

    let resultaatAlert =window.alert("Dit is een mededeling");
    //Toont de mededeling in een popup met een 'ok' button
    console.log(resultaatAlert);



    let resultaatConfirm = window.confirm("Weet u het zeker?");
    //Toont de vraag in een popup met een 'ok' en 'cancel' button
    // De return waarde geeft aan op welke knop de gebruiker duwde
    console.log(resultaatConfirm);



    let resultaatPrompt = window.prompt("Wat is uw naam", "onbekend");
    //Toont de vraag in een popup met een tekstveld met een 'ok' en een 'cancel' button.
    //De andere tekst ("onbekend" hierboven) wordt standaard al ingevuld bij het tonen.
    console.log(resultaatPrompt);


}

window.addEventListener("load", setup);

