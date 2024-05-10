const setup = () => {
    let btnHerbereken = document.getElementsByClassName('bereken')[0];
    btnHerbereken.addEventListener("click", calc);


    calc();
};

const calc = () => {

    let btwAlsTekst = document.getElementsByClassName('btw');
    let aantallenAlsTekst = document.getElementsByClassName('aantal');
    let prijsAlsTekst = document.getElementsByClassName('prijs');
    let subtotaalAlsTekst = document.getElementsByClassName('subtotaal');
    let totaal = 0;

    for (let i = 0; i < btwAlsTekst.length; i++) {

        let prijs=parseFloat(prijsAlsTekst[i].textContent.replace('€ ', ''), 10);
        let aantal=parseFloat(aantallenAlsTekst[i].value, 10);
        let btw=parseFloat(btwAlsTekst[i].textContent, 10);

        const btwBedrag = prijs * (btw / 100);
        const subtotaal = aantal * (prijs + btwBedrag);

        totaal+=subtotaal;

        subtotaalAlsTekst[i].textContent = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(subtotaal);
        //deze vorm heb ik adhv het internet omdat ik graag het euroteken '€' erbij wou

    }

    let totaalAlsTekst=document.getElementsByClassName('totaal')[0];
    const subtotaal = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(totaal);
    //same here
    totaalAlsTekst.textContent = subtotaal ;
}


window.addEventListener("load", setup);
