const setup = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let paragrafen = document.getElementById("paragrafen");
    const logKlik = () => {
        console.log("klik");
    }
    paragrafen.addEventListener("click", logKlik);
}


window.addEventListener("load", setup);


