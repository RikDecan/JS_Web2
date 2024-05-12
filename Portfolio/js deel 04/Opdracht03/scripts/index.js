const setup = () => {

    const maakRood =() =>{
        elementNode.style.backgroundColor = "red";
    }

    let elementNode=document.getElementById("loremParas");
    elementNode.addEventListener("click", maakRood);



}

window.addEventListener("load", setup);

