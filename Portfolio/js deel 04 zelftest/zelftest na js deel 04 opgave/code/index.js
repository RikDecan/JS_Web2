const voegToe = () => {
    const txtKleur = document.getElementById("txtKleur");
    const kleur = txtKleur.value.trim();
    const secKleurZones = document.getElementById("secKleurZones");

    if (kleur) {
        const kleurZone = document.createElement("div");
        kleurZone.classList.add("kleurZone");
        kleurZone.style.backgroundColor = kleur;
        kleurZone.textContent = kleur;
        secKleurZones.appendChild(kleurZone);
        txtKleur.value = ""; // Het invoerveld wissen na het toevoegen van de kleurzone
    }
}

const setup = () => {
    const btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", voegToe);

    const secKleurZones = document.getElementById("secKleurZones");
    secKleurZones.addEventListener("click", function(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains("kleurZone")) {
            const kleur = clickedElement.style.backgroundColor;
            const testZone = document.querySelector(".testZone.clicked");
            if (testZone) {
                testZone.style.backgroundColor = kleur;
                testZone.classList.remove("clicked");
            }
        }
    });

    const testZones = document.querySelectorAll(".testZone");
    testZones.forEach(zone => {
        zone.addEventListener("click", function() {
            const kleur = this.style.backgroundColor;
            const clickedTestZone = document.querySelector(".testZone.clicked");
            if (clickedTestZone) {
                clickedTestZone.classList.remove("clicked");
            }
            this.style.backgroundColor = kleur;
            this.classList.add("clicked");
        });
    });

}

window.addEventListener("load", setup);
