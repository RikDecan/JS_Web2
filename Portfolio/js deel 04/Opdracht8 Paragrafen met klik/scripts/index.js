
    document.addEventListener("load", function() {
        let belangrijkeParagrafen = document.getElementsByClassName("belangrijk");
        belangrijkeParagrafen.forEach(function(paragraaf) {
            paragraaf.classList.add('opvallend');
        });
    });

