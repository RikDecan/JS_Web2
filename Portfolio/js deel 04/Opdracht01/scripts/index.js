const setup = () => {

    const zegKlik =() =>{
        console.log("klik")
    }

    let elementNode=document.getElementById("loremParas");
    elementNode.addEventListener("click", zegKlik);


}

window.addEventListener("load", setup);

