import { displayHome } from "./home";

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

displayHome();

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    displayHome();
})

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
})

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
})
