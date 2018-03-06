let url = "http://alternative.mathildebuenerd.fr/memoire/index.html";
// let url = "thesis.html";

numberParagraphs();

function numberParagraphs() {

    let paragraphs = document.querySelectorAll('body > p, body > blockquote');

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

        lineNumber.addEventListener('mouseover', showCopyMessage);
        lineNumber.addEventListener('mouseout', hideCopyMessage);
        lineNumber.addEventListener('click', copyAnchor);

        function showCopyMessage(e) {

            // when the line number is hovering, we display a little message to indicate to the user that he can click to copy the link to that paragraph
            let copyMessage = document.createElement('div');
            copyMessage.textContent = "Copier le lien";
            copyMessage.setAttribute('id', 'copymessage');
            copyMessage.style.top = ((e.target.offsetTop) + 20) + "px";
            copyMessage.style.left = (e.target.offsetLeft) + "px";
            document.body.appendChild(copyMessage);

        }

        function hideCopyMessage() {

            let copyMessage = document.querySelector('#copymessage');
            document.body.removeChild(copyMessage);

        }

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

            // we display a message to say to the user that the link is succesfully copied
            let copyMessage = document.querySelector('#copymessage');
            copyMessage.textContent = "Lien copié ;)";
        }
    }

    console.log(paragraphs);
}