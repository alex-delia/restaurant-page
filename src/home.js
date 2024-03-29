import foodImage from "./images/food.jpeg";
import './style.css';

function displayHome() {
    const content = document.querySelector('#content');

    const foodImg = document.createElement('img');
    foodImg.src = foodImage;

    content.appendChild(foodImg);

    //Restaurant Name and Description
    const home = document.createElement('div');
    home.classList.add('home');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Bubby's";

    const catchprhase = document.createElement('p');
    catchprhase.style.marginBottom = '16px';
    catchprhase.innerHTML = '<em>SERVED EVERY DAY SINCE 1990</em>';

    const description = document.createElement('p');
    description.textContent = " Bubby's opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.";

    home.appendChild(restaurantName);
    home.appendChild(catchprhase);
    home.appendChild(description);

    content.appendChild(home);
}

export { displayHome };