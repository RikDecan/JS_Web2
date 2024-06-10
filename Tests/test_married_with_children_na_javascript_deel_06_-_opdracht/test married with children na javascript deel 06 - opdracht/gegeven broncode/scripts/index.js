// Deze opdracht bestaat uit drie stukjes :
// 1) zorg dat de setup functie wordt uitgevoerd na het inladen vd pagina 🆗
// 2) schrijf de setup functie🆗
// 3) schrijf de clickImage functie

// Gegeven zijn twee parallele arrays (dwz dat elementen op eenzelfde positie in deze arrays, samen horen)
// die personages beschrijven. Het ene bevat de naam van het personage en het andere bevat
// de url van de afbeelding van dat personage.

const names = ["Al Bundy", "Peggy Bundy", "Kelly Bundy", "Bud Bundy", "Buck Bundy"];


const urls = ["images/al.webp", "images/peg.webp", "images/kelly.webp", "images/bud.webp", "images/buck.webp"];

const getTextForNameLevel = (level) => {

    return name[level];
};


const getNameForText = (text) => {

    return name.indexOf(text);

};

// Bijvoorbeeld op indexpositie 1 vinden we alle info over personage Peggy :
// haar naam staat op positie 1 in array "names"
// de url van haar afbeelding staat op positie 1 in array "urls"


// Zorg ervoor dat deze setup functie wordt opgeroepen zodra de browser klaar is met het inladen van de pagina
const setup = () => {


    // De inhoud van de parallele arrays beschrijft de personages (naam en afbeelding url).
    for (let i = 0; i < txtTasks.length; i++) {
        let txtTask = txtTasks[i];
        txtTask.classList.remove("hidden");
        // en gebruik hiervoor insertAdjacentHTML. Koppel aan elke afbeelding een click event listener
        // die de functie clickImage oproept.


        let memberImages = document.getElementsByClassName("images")[0];
        divTasks.innerHTML += html;

        let inputURL = document.getElementById("imageURL").value;

        insertTaskHTML(0, "Al Bundy");
        insertTaskHTML(1, "Peggy Bundy");
        insertTaskHTML(2, "Kelly Bundy");
        insertTaskHTML(3, "Bud Bundy");
        insertTaskHTML(4, "Buck Bundy");
    }

// Dit is de functie die wordt opgeroepen bij een klik op de afbeelding van een personage
    const clickImage = (level, description) => {
        // Deze functie wijzigt de selectie :
        // - indien klik op reeds geselecteerde afbeelding : er is geen geselecteerd personage meer
        // - indien klik op andere afbeelding : selecteer dat personage

        let txtDescription = name[level];

        let NameText = getTextForNameLevel(level);
        let html = `<p class="task ${NameText}">${txtDescription}</p>`;

        let imagesOfMembers = document.getElementsByClassName("selectable")[0];
        imagesOfMembers.innerHTML += html;


        // Een geselecteerd personage leidt tot 2 visuele aanpassingen : de afbeelding en de naam.

        // De afbeelding van dit geselecteerde personage heeft een rood kader (via class "selected"),
        // andere afbeeldingen hebben deze class "selected" niet!

        // De naam van het geselecteerde personage verschijnt onderaan in een <span> met class "result",
        // indien er geen selectie is, bevat die span gewoon een lege string.

        // Tip : als je de naam van een personage moet achterhalen, bedenk dan dat je bij een klik makkelijk
        // de url kunt achterhalen van de geklikte afbeelding. Met die url kun je in het array "urls"
        // op zoek gaan naar de positie van die url. Op dezelfde positie in het "names" array vind je
        // dan de gezochte naam.

        // Bijvoorbeeld, een klik op afbeelding met url "images/peg.webp" doet ons zoeken in
        // array "urls" naar precies die url. We vinden die url op indexpositie 1 in array "urls"
        // en op diezelfde positie in het "names" array vinden we de naam "Peggy Bundy".

    }
}

window.addEventListener("load", setup);