// Definieer de 'kopieer' functie
const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    console.log(tekst);
  }
  
  // Voeg een event listener toe aan de knop
  document.addEventListener("DOMContentLoaded", function() {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", setup);
  });

   window.addEventListener("load", setup);