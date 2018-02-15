// For putting the footnotes on the side of the document

setup();

window.addEventListener('resize', () => {
    placeFootnotes();
});

// for display the name of the current chapter at the top of the page
window.addEventListener('scroll', (e) => {
    // console.log(e.pageY);

    let chapters = document.querySelectorAll('h2'); // every chapter should begin with a h2
    let currentChapterNumber = findCurrentChapter(e.pageY);


    function findCurrentChapter(scrollPosition) {
        // we compare the scroll position to the offset position of all h2 in order to know what is the chapter currently read
        for (let i=0; i<chapters.length; i++) {
            if (scrollPosition < chapters[i].offsetTop) {
                return i-1;
            }
        }
    }
    let currentChapter = '';
    let currentContent = document.querySelectorAll('#TOC > ul > li > ul > li');
    // console.log(currentContent);

    // if it equals -1, it means we are before the first h2, so we display the h1 instead
    if (currentChapterNumber === -1) {
        currentChapter = '';
    } else {
        currentChapter = chapters[currentChapterNumber].textContent;
        // console.log(currentContent[5]);

        // we highlight the current chapter in the table of content
        for (let i=0; i<chapters.length; i++) {
            if (i !== currentChapterNumber && currentContent[i].classList.contains('current')) {
                currentContent[i].classList.remove('current');
            } else if (i === currentChapterNumber) {
                currentContent[i].classList.add('current');
            }
        }

    }

    // update the current chapter displayed in the timeline
    let chapterBar = document.querySelector('#currentChapter');
    chapterBar.textContent = currentChapter;

    // find at which percentage of the current chapter we are, in order to display it
    let percentageBar = document.querySelector('#percentageBar');
    let scrollPos = e.pageY;
    let posChapt = chapters[currentChapterNumber].offsetTop;
    let posNextChapt = '';
    if (chapters[currentChapterNumber+1]) {
        posNextChapt = chapters[currentChapterNumber+1].offsetTop;
    } else {
        posNextChapt = window.innerHeight;
    }
    let currentPercentage = (scrollPos-posChapt)*100/(posNextChapt-posChapt);
    percentageBar.style.width = currentPercentage + 'vw';





});


function setup() {
    placeFootnotes();
    createTimeline();
}


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

        if (i > 0) { // for all notes except the first one, we check if the previous note is not too big and is going to be hidden by the next one
            let yPosPreviousNote = notesContent[i-1].offsetTop;
            let heightPreviousNote = notesContent[i-1].offsetHeight;
            console.log(heightPreviousNote);
            if (yPosNotes < yPosPreviousNote + heightPreviousNote) { // if the yPos of the note is over the previous note, we move it
                // let difference = yPosPreviousNote - yPosNotes + heightPreviousNote;
                yPosNotes = yPosPreviousNote + heightPreviousNote + 10; // 15 is a little margin
            }
        }

        notesContent[i].style.top = yPosNotes + "px";

        // we also remove the backlink to the footnote, because the footnote is very close to the text
        notesContent[i].querySelector('.footnote-back').style.display = 'none';
    }
}

// creates the html elements of the top nav bar
function createTimeline() {

    let chapterBar = document.createElement('div');
    chapterBar.setAttribute('id', 'chapterBar');
    let currentChapter = document.createElement('p');
    currentChapter.setAttribute('id', 'currentChapter');
    let percentageBar = document.createElement('div');
    percentageBar.setAttribute('id', 'percentageBar')
    chapterBar.appendChild(currentChapter);
    chapterBar.appendChild(percentageBar);

    document.body.appendChild(chapterBar);

}