const setup = () => {
    let verwijderA=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderA.length;i++) {
        verwijderA[i].addEventListener("click", deleteLi);
    }
}

const deleteLi = (event) => {
    let linkA = event.target;
    let item = linkA.parentElement;
    let lijst = item.parentElement;  
    lijst.removeChild(item);
}

window.addEventListener('load', setup);