const setup = () => {


}
function wijzigAfbeelding() {
    let inputURL = document.getElementById("imageURL").value;
    let afbeeldingElement = document.getElementById("afbeelding");
    afbeeldingElement.src = inputURL;
}

window.onload = function() {
    let afbeeldingURL = document.getElementById("afbeelding").src;
    document.getElementById("imageURL").value = afbeeldingURL;
};


window.addEventListener("load", setup);