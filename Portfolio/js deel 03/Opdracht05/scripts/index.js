const setup = () => {

    const wijzig = () => {

       let pElement=document.getElementById("txtOutput");
       pElement.textContent="Welkom!";

        console.log('Hi There');
    }



    let txtInput = document.getElementById("txtInput");
    console.log( txtInput.value );

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);
}

window.addEventListener("load", setup);

