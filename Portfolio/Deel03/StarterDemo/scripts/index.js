const setup = () => {

    let paras = document.getElementsByClassName("para");
    paras[2].textContent = "boemboem3";


    console.log(paras[2].textContent);

let txtDemo = document.getElementById("txtDemo");
txtDemo.innerHTML = 'Make <a href="http://www.vlaanderen.be">Flanders</a> great again.'
}

window.addEventListener("load", setup);

