function displayHome() {


    const content = document.querySelector('#content');

    const foodImg = document.createElement('img');
    foodImg.src = '../images/food.jpeg';

    content.appendChild(foodImg);

    //Restaurant Name and Description
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Bubby's";

    const catchprhase = document.createElement('p');
    catchprhase.innerHTML = '<em>SERVED EVERY DAY SINCE 1990</em>';

    const description = document.createElement('p');
    description.innerText = " Bubby's opened on Thanksgiving Day 1990. Chef / Owner Ron Silver began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.";

    header.appendChild(restaurantName);
    header.appendChild(catchprhase);
    header.appendChild(description);

    content.append(header);
}

export { displayHome };