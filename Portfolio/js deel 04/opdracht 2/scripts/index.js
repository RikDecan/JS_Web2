const setup = () => {
    // Vraag de DOM-tree om het element met id 'myDiv'
    let paragrafen = document.getElementById("paragrafen");

    const logKlik = () => {
        console.log("klik");
    }

    const logEnter = () => {
        console.log("enter");
    }

    const logMove = () => {
        console.log("move");
    }

    const logLeave = () => {
        console.log("leave");
    }

    paragrafen.addEventListener("click", logKlik);
    paragrafen.addEventListener("mouseenter", logEnter);
    paragrafen.addEventListener("mousemove", logMove);
    paragrafen.addEventListener("mouseleave", logLeave);
}

window.addEventListener("load", setup);
