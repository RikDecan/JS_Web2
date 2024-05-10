const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd

    const btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", Add);

    // registreer click event listener 'wisAlles' bij #btnClear

    const btnClear = document.querySelector("#btnClear");
    btnClear.addEventListener("click", Clear);

    // registreer click event listener 'maakBelangrijk' bij elke <li> in .lstIngredients

    let ul = document.querySelector("#lstIngredients");
    ul.addEventListener("click", maakBelangrijk);
}

const Add = () => {

    const ul = document.querySelector("#lstIngredients");
    const input = document.querySelector("#txtInput");
    const ingredient = input.value;
    input.value='';
    ul.insertAdjacentHTML("beforeend", `<li>${ingredient}</li>`);

    let li = document.querySelector("#lstIngredients>li:last-child");
    li.addEventListener("click", maakBelangrijk);
}

const Clear = () => {
    const lis = document.querySelectorAll("#lstIngredients>li");
    for (let i=0; 1<lis.length; i++)
    {
        lis[i].remove();
    }
}

const maakBelangrijk = (event) => {
    const element = event.target;
    element.style.color='red';
}

window.addEventListener('load',setup);