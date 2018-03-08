/**
 * Created by mathi on 08/03/2018.
 */

transformTranslateWords();

// In the original markdown file there are words written in brackets like that : [word], they are translations of words in the text
// That function replaces the brackets with parenthesis and add a span around it in order to display it in a different color
function transformTranslateWords() {

    console.log('hello');

    let paragraphs = document.querySelectorAll('p');
    console.log(paragraphs);


    for (let i=0; i<paragraphs.length; i++) {

        let translatedWord = new RegExp(/\[<em>([\w ]+)<\/em>]/, 'gi'); // a translated word has the form '[<em>' + any number of letter, tiret or space + '</em>]'

        if (translatedWord.exec(paragraphs[i].innerHTML) !== null) {
            translatedWord = new RegExp(/\[<em>([\w ]+)<\/em>]/, 'gi'); // a translated word has the form '[<em>' + any number of letter, tiret or space + '</em>]'
            let word = translatedWord.exec(paragraphs[i].innerHTML);
            console.log(word[0]);
        }

    }


}