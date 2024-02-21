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
    content.innerHTML = '';
    displayHome();
})

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayMenu();
})

contactButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayContact();
})
