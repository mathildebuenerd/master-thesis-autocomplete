// For putting the footnotes on the side of the document

placeFootnotes();

window.addEventListener('resize', () => {
    placeFootnotes();
});

document.querySelector('#TOC').addEventListener('click', () => { // il faut placer les footnotes chaque fois qu'on change de section, donc à chaque clic sur un lien
    placeFootnotes();
});




function placeFootnotes() {
    let notes = document.querySelectorAll('.footnote-ref');
    let notesContent = document.querySelector('.footnotes').querySelectorAll('li');

    // let lineHeight = getLineHeight(); // we check le fontsize in order to have to line height and place the note at the right top position.
    // function getLineHeight() {
    //     let par = document.querySelector('p');
    //     let parStyle  = window.getComputedStyle(par, null);
    //     let lineHeight = parseInt(parStyle.fontSize);
    //     return lineHeight;
    // };

    for (let i=0; i<notes.length; i++) { // /!\ the notes ids start at 1 not 0
        let yPosNotes = notes[i].offsetTop;

        if (yPosNotes !== 0) { // because not all the sections are displayed, we check before that the reference to the note is currently displayed
            // console.log("ypos " + yPosNotes);
            if (i > 0) { // for all notes except the first one, we check if the previous note is not too big and is going to be hidden by the next one
                let yPosPreviousNote = notesContent[i-1].offsetTop;
                let heightPreviousNote = notesContent[i-1].offsetHeight;
                // console.log(heightPreviousNote);
                if (yPosNotes < yPosPreviousNote + heightPreviousNote) { // if the yPos of the note is over the previous note, we move it
                    // let difference = yPosPreviousNote - yPosNotes + heightPreviousNote;
                    yPosNotes = yPosPreviousNote + heightPreviousNote + 10; // 15 is a little margin
                }
            }

            notesContent[i].style.top = yPosNotes + "px";

            // we also remove the backlink to the footnote, because the footnote is very close to the text
            notesContent[i].querySelector('.footnote-back').style.display = 'none';
        } else {
            notesContent[i].style.display = 'none';
        }

    }
}




/*********
 *
 *     Warning
 *
 ********/

document.querySelector('#avertissement').addEventListener('click', hideWarning);

placeWarning();

function placeWarning() {
    let warning = document.querySelector('#avertissement');
    warning.style.top = (window.innerHeight)/2 + "px";
    warning.style.left = (window.innerWidth)/2 + "px";
}

function hideWarning() {

    let warning = document.querySelector('#avertissement');
    warning.style.opacity = 0;

}
