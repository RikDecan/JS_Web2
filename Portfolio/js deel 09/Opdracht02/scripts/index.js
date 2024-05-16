const setup = () => {
    let verwijderA=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderA.length;i++) {
        verwijderA[i].addEventListener("click", deleteLi);
    }
}

const deleteLi = (event) => {
    let link = event.target;
    let item = link.parentElement;
    let list = item.parentElement;  
    list.removeChild(item);
}

window.addEventListener('load', setup);














