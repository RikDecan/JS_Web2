const setup = () => {
    // Deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    //evenlistener voor de voegtoeknop
    const btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    const deleteLinks = document.querySelector("#lstIngredients");
    deleteLinks.addEventListener("click", removeChild);
}

const removeChild = (event) => {
    if (event.target.nodeName == "A"){
        let link = event.target;
        let listItem = link.parentElement;
        let lstIngredients = document.querySelector("#lstIngredients");
        lstIngredients.removeChild(listItem);
    }
    else {

    }
}

const voegToe = () => {
    const input = document.querySelector("#txtInput").value;

    const lstIngredients = document.querySelector("#lstIngredients");
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${input} <a href="#">verwijder</a></li>`);
}
window.addEventListener("load", setup);