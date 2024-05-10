

const setup = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.textContent="Welkom!";

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);

    
   }
  
   window.addEventListener("load", setup); 