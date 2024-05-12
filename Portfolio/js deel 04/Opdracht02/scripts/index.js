const setup = () => {

    const zegKlik =() =>{
        console.log("klik")
    }

    const zegEnter =() =>{
        console.log("enter")
    }

    const zegMove =() =>{
        console.log("move")
    }

    const zegLeave =() =>{
        console.log("leave")
    }

    let elementNode=document.getElementById("loremParas");
    elementNode.addEventListener("click", zegKlik);
    elementNode.addEventListener("mouseenter", zegEnter);
    elementNode.addEventListener("mousemove", zegMove);
    elementNode.addEventListener("mouseleave", zegLeave);

}

window.addEventListener("load", setup);

//• Event “mouseenter” : de listener toont “enter” op de console
// • Event “mousemove” : de listener toont “move” op de console
// • Event “mouseleave” : de listener toont “leave” op de console