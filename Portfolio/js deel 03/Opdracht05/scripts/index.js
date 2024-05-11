const setup = () => {

    const wijzig = () => {

       let pElement=document.getElementById("txtOutput");
       pElement.textContent="Welkom!";

        console.log('Hi There');
    }

    let btnWijzig = document.getElementById("btnWijzig");
    btnWijzig.addEventListener("click", wijzig);


   // document.getElementById("txtInput").value = "Hallo! dit is de waarde van de txtInput";

   // let txtInput = document.getElementById("txtInput");
   // console.log( txtInput.value );


}

window.addEventListener("load", setup);

