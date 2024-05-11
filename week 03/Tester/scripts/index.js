const setup = () => {



let link = document.getElementById("lnkVlaanderen");
    console.log ( link.textContent );

    let paras = document.getElementsByClassName("para");


    console.log ( paras[1].textContent );


    paras[0].textContent = "boemboem2";

    console.log ( paras[0].textContent );


    let paragrafen=document.getElementsByTagName("p");
    for (let i=0;i<paragrafen.length;i++) {
        paragrafen[i].textContent="Hello world!";
    }

}

window.addEventListener("load", setup);

