

const setup = () => {
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    let verwijderLinks=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderLinks.length;i++) {
        verwijderLinks[i].addEventListener("click", deleteLi);
    }
}

const deleteLi = (event) => {
    let link = event.target;
    let item = link.parentElement;

    let list = item.parentElement;
    list.removeChild(item);

    event.preventDefault();
}

const voegToe = () => {
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient} <a href="#">verwijder</a></li>`);

    let link=document.querySelector("#lstIngredients>li:last-of-type a");

    link.addEventListener("click", verwijder);

}


window.addEventListener('load', setup);