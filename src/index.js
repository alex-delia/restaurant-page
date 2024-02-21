import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayContact } from "./contact";
import './style.css';

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

displayHome();

homeButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.firstChild.remove();
    }
    displayHome();
})

menuButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.firstChild.remove();
    }
    displayMenu();
})

contactButton.addEventListener('click', () => {
    while (content.firstChild) {
        content.firstChild.remove();
    }
    displayContact();
})
