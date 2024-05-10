const setup = () => {
    let paragrafen = document.getElementById("paragrafen");



    let changeBackgroundColor = () => {
        paragrafen.style.backgroundColor = "red";
    }

    paragrafen.addEventListener("click", changeBackgroundColor);
}

window.addEventListener("load", setup);


