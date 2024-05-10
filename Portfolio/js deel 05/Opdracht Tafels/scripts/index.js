const setup = () => {
    const para = document.createElement("p");
    para.textcontent = 'test'
    document.getElementById('generate-button').addEventListener('click', function() {
        let input = document.getElementById('number-input').value;
        let parsedInput = parseInt(input);

        if (!isNaN(parsedInput)) {
            let tableContainer = document.getElementById('tables-container');
            let tableDiv = document.createElement('div');
            tableDiv.className = 'table';

            let tableHTML = '<p style="background-color: #122b40; color: white;">Tafel van ' + parsedInput + '</p>';
            for (let i = 1; i <= 10; i++) {
                let result = parsedInput * i;
                let rowClass = i % 2 === 0 ? 'even' : '';
                //functie die ik op het internet zocht voor de even rijen te vindenn
                tableHTML += '<p class="' + rowClass + '">' + parsedInput + ' x ' + i + ' = ' + result + '</p>';
            }

            tableDiv.innerHTML = tableHTML;
            tableContainer.appendChild(tableDiv);

            document.getElementById('number-input').value = '';
        }
    });

}

window.addEventListener("load", setup);