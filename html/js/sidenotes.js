// For putting the footnotes on the side of the document

setup();

window.addEventListener('resize', () => {
    placeFootnotes();
});


function setup() {
    placeFootnotes();
}


function placeFootnotes() {
    let notes = document.querySelectorAll('.footnote-ref');
    let notesContent = document.querySelector('.footnotes').querySelectorAll('li');

    let lineHeight = getLineHeight(); // we check le fontsize in order to have to line height and place the note at the right top position.
    function getLineHeight() {
        let par = document.querySelector('p');
        let parStyle  = window.getComputedStyle(par, null);
        let lineHeight = parseInt(parStyle.fontSize);
        return lineHeight;
    };

    for (let i=0; i<notes.length; i++) { // /!\ the notes ids start at 1 not 0
        let yPosNotes = notes[i].offsetTop;

        if (i > 0) { // for all notes except the first one, we check if the previous note is not too big and is going to be hidden by the next one
            let yPosPreviousNote = notes[i-1].offsetTop;
            let heightPreviousNote = notesContent[i-1].offsetHeight;
            console.log(heightPreviousNote);
            if (yPosNotes < yPosPreviousNote + heightPreviousNote) {
                yPosNotes+=heightPreviousNote-lineHeight; // we remove the line-height from the value, because the 'noteContent' paragraph has a big margin, quite equal to its height
            }
        }

        notesContent[i].style.top = yPosNotes - lineHeight + "px";

        // we also remove the backlink to the footnote, because the footnote is very close to the text
        notesContent[i].querySelector('.footnote-back').style.display = 'none';
    }
}
