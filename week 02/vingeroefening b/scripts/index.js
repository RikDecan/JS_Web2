const setup = () => {


    const aantalRegels = 4;

    const vierkant = () => {
        for (let i = 0; i < aantalRegels; i++) {
            console.log('****') //hoe doe ik een newline??? m'n console geeft " 4️⃣**** ";
        }
    }

    vierkant();

}

window.addEventListener("load", setup);

