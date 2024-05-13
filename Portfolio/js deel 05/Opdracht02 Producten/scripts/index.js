const setup = () => {


    const update = () => {
        console.log("clicked");
    }

    let bereken = document.getElementById("btnBereken");
    bereken.addEventListener("click", update);

}

window.addEventListener("load", setup);

