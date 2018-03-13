/**
 * Created by mathi on 13/03/2018.
 */

// Add a personnalized content on the homepage/ index page

addContentToHomepage();

function addContentToHomepage() {

    let title = document.createElement('h1');
    title.textContent = "Converser à l'ère de l'autocomplétion";
    let author = document.createElement('h2');
    author.textContent = "Mathilde Buenerd";
    let paragraphe = document.createElement('p');
    paragraphe.textContent = "Mémoire de master Media Design, tutoré par Nicolas Nova. 2018 - HEAD Genève.";

    let blockContent = document.createElement('div');
    blockContent.setAttribute('id', 'intro');
    blockContent.appendChild(title);
    blockContent.appendChild(author);
    blockContent.appendChild(paragraphe);
    document.body.appendChild(blockContent);

}