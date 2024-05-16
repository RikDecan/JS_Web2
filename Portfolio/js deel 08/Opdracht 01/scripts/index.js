const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    const lstIngredients = document.querySelector("#lstIngredients");
    lstIngredients.addEventListener("click",removeChild);
}

const removeChild = () => {
    const lstIngredients = document.querySelector("#lstIngredients");
    const childrenIngredients = document.querySelector("#lstIngredients>li");
    lstIngredients.removeChild(childrenIngredients);
}
window.addEventListener("load", setup);