/**
 * Created by mathi on 05/03/2018.
 */

let tableOfContentWidth = '';
createSideBar();

let sidebarTOC = document.querySelector(".sidebar-toc");

sidebarTOC.addEventListener('click', toggleTableOfContent);

function createSideBar() { // we create the sidebar we have to click on to see the menu

    console.log('je suis lu');
    let tableOfContent = document.querySelector('#TOC');

    let sideBar = document.createElement('div');
    sideBar.setAttribute('class', 'sidebar-toc');
    tableOfContentWidth = window.getComputedStyle(tableOfContent, null).getPropertyValue('width');
    sideBar.style.left = tableOfContentWidth;
    sideBar.textContent = "Sommaire";
    console.log(tableOfContentWidth);
    tableOfContent.appendChild(sideBar);
    tableOfContent.style.left = '-' + tableOfContentWidth;

}

function toggleTableOfContent() {

    let tableOfContent = document.querySelector('#TOC');

    if(tableOfContent.style.left === 0 || tableOfContent.style.left === '0px') {
        tableOfContent.style.left = '-' + tableOfContentWidth;
    } else {
        tableOfContent.style.left = 0;
    }
    // tableOfContent.classList.toggle('visible');


}

function hideTableOfContent() {



}