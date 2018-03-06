/**
 * Created by mathi on 06/03/2018.
 */

createSections();

function createSections() {

    let counter = document.querySelectorAll('h1').length;

    // console.log("counter " + counter);

    // console.log(bodyTags);

    while (counter >= 0) {

        let bodyTags = document.querySelectorAll('body > h1, body > h2, body > h3, body > h4, body > h5, body > h6, body > p, body > blockquote, body > figure, body > ul, #refs');
        let newSection = document.createElement('section');

        for (let i=0; i<bodyTags.length; i++) {
            // console.log(bodyTags[i]);
            if (bodyTags[i].tagName !== 'H1' || i === 0 || bodyTags[i].id === 'refs') { // the first element always go inside the section, because it's usually a h1
                newSection.appendChild(bodyTags[i]);
                console.log('--- if ---');
                console.log(bodyTags[i]);
                console.log(bodyTags[i].tagName);
            } else {
                console.log('--- Je suis un h1 ou i nest pas égal à 0');
                console.log(i);
                console.log(bodyTags[i]);
                break;
            }
        }

        console.log("i'll appendchild");
        document.body.appendChild(newSection);

        counter--;

    }

}