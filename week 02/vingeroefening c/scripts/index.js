const setup = () => {



    const deelvoudVanDrie = () => {
        for (let i = 0; i <= 500; i += 3) {
            console.log(i);
        }
    }


    const deelvoudVanVijf = () => {
        for (let i = 0; i <= 500; i += 5) {
            console.log(i);
        }
    }

    deelvoudVanDrie();

    deelvoudVanVijf();

}

window.addEventListener("load", setup);

