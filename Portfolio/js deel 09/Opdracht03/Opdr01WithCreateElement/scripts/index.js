

const setup = () => {
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    let verwijderLinks=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderLinks.length;i++) {
        verwijderLinks[i].addEventListener("click", deleteLi);
    }
}

const voegToe = () => {
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");
    let link=document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent="verwijder";
    link.addEventListener("click", deleteLi);

    let item=document.createElement("li");
    item.textContent=ingredient+" ";
    item.appendChild(link);

    lstIngredients.appendChild(item);
}


const deleteLi = (event) => {
    let link = event.target;
    let item = link.parentElement;

    let list = item.parentElement;  list.removeChild(item);
    event.preventDefault();
}



window.addEventListener('load', setup);