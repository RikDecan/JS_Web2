const setup = () => {

    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let vandaag = new Date();

    const print = (message) => { //functies zijn ook waarden, van het type 'function'!
        console.log(message);
    };

    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print);

    console.log("----------------");
    console.log("");
    console.log("----------------");

    console.log(typeof window);
    console.log(typeof window.document);
    console.log(typeof window.console);

}

window.addEventListener("load", setup);

