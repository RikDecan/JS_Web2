const setup = () => {
    // Deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const deleteLinks = document.querySelectorAll("#lstIngredients a");
    for (i=0;i<deleteLinks.length;i++) {
        deleteLinks[i].addEventListener("click",removeChild);
    }
}

const removeChild = (event) => {
    const link = event.target; // click event op de href elementen dus
    const listItem = link.parentElement; // geeft de ouder weer van dat kind
    const lstIngredients = document.querySelector("#lstIngredients");
    lstIngredients.removeChild(listItem);
}

window.addEventListener("load", setup);