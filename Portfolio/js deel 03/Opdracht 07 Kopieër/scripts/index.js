const setup = () => {


    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        console.log(tekst);

        let output = document.getElementById("txtOutput");

        output.innerHTML = tekst;

    }


    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

}

window.addEventListener("load", setup);

