const setup = () => {

    const wijzig = () => {

       let pElement=document.getElementById("txtOutput");
       pElement.textContent="Welkom!";

        console.log('Hi There');
    }

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);
}

window.addEventListener("load", setup);

