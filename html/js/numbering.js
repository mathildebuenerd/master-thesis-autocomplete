let url = "http://alternative.mathildebuenerd.fr/memoire/index.html";
// let url = "thesis.html";

numberParagraphs();

function numberParagraphs() {

    let paragraphs = document.querySelectorAll('p');

    for (let i=0; i<paragraphs.length; i++) {

        paragraphs[i].setAttribute('id', 'paragraph-' + i);

        // we create a span element that will contain the line number with a link to the paragraph
        let numberElement = document.createElement('a');
        numberElement.setAttribute('class', 'paragraph-number');
        numberElement.textContent = String(i);

        paragraphs[i].insertBefore(numberElement, paragraphs[i].firstChild);

        let lineNumber = document.querySelectorAll('.paragraph-number')[i];
        lineNumber.style.marginRight = '-' + lineNumber.offsetWidth + 'px'; // as some the line numbers can have 1 2 ou 3 numbers, we need to check the width to apply a correct offset
        lineNumber.style.left = '-' + (lineNumber.offsetWidth + 10) + 'px';

        lineNumber.addEventListener('click', copyAnchor);

        function copyAnchor(e) {
            // we create a temporary input, because we can only copy to clipboard from a value in a input tag
            let tempInput = document.createElement('input');
            let anchor = url + '#' + e.target.parentNode.id; // we pick the id of the parent paragraph
            tempInput.setAttribute('id', 'tempinput'); // we add an idea so that we can remove it easily after
            tempInput.value = anchor; // we inject the anchor link inside the input
            document.body.appendChild(tempInput);
            tempInput.select(); // we select the value inside the input
            document.execCommand("copy"); // the selected value is copied!
            tempInput = document.querySelector('#tempinput');
            document.body.removeChild(tempInput); // then we remove the input from the DOM
        }
    }

    console.log(paragraphs);
}