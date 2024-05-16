const setup = () => {
    // koppel de 'verwijder' click event listener aan elk list item in onze lijst
    let items=document.querySelectorAll("#lstIngredients>li");
    for (let i=0;i<items.length;i++) {

        items[i].addEventListener("click", deleteLi);

    }
}

const deleteLi  = (event) => {
    let item = event.target;

    let list = item.parentElement;

    list.removeChild(item);

}

window.addEventListener('load', setup);



















