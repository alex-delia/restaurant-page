function displayMenu() {
    const content = document.querySelector('#content');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('title');
    restaurantName.innerText = "Bubby's";
    content.appendChild(restaurantName);

    const leftMenu = document.createElement('div');
    const rightMenu = document.createElement('div');
    leftMenu.classList.add('menuColumn');
    rightMenu.classList.add('menuColumn');


    //Menu Item 1
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menuItem');

    const menuItem1Name = document.createElement('h3');
    menuItem1Name.innerText = 'Antipasto';

    const menuItem1Price = document.createElement('span');
    menuItem1Price.innerText = '$30';

    const menuItem1Description = document.createElement('p');
    menuItem1Description.classList.add('menuDescription')
    menuItem1Description.innerText = 'Cured meats, cheese and accompaniments.';

    menuItem1.appendChild(menuItem1Name);
    menuItem1.appendChild(menuItem1Price);
    menuItem1.appendChild(menuItem1Description);

    leftMenu.appendChild(menuItem1);

    //Menu Item 2
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menuItem');

    const menuItem2Name = document.createElement('h3');
    menuItem2Name.innerText = 'Aglio e Formaggio';

    const menuItem2Price = document.createElement('span');
    menuItem2Price.innerText = '$16';

    const menuItem2Description = document.createElement('p');
    menuItem2Description.classList.add('menuDescription')
    menuItem2Description.innerText = 'Roasted garlic bulb served with warm pesto crusted goat cheese. Drizzled with honey, apricot mostarda and served with rustic crisps';

    menuItem2.appendChild(menuItem2Name);
    menuItem2.appendChild(menuItem2Price);
    menuItem2.appendChild(menuItem2Description);

    rightMenu.appendChild(menuItem2);

    //Menu Item 3
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menuItem');

    const menuItem3Name = document.createElement('h3');
    menuItem3Name.innerText = 'Bruschetta';

    const menuItem3Price = document.createElement('span');
    menuItem3Price.innerText = '$14';

    const menuItem3Description = document.createElement('p');
    menuItem3Description.classList.add('menuDescription')
    menuItem3Description.innerText = 'Traditional style fresh tomatoes, onions, and fresh garlic on our homemade focaccia bread';

    menuItem3.appendChild(menuItem3Name);
    menuItem3.appendChild(menuItem3Price);
    menuItem3.appendChild(menuItem3Description);

    leftMenu.appendChild(menuItem3);

    //Menu Item 4
    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menuItem');

    const menuItem4Name = document.createElement('h3');
    menuItem4Name.innerText = 'Pane di Fichi';

    const menuItem4Price = document.createElement('span');
    menuItem4Price.innerText = '$20';

    const menuItem4Description = document.createElement('p');
    menuItem4Description.classList.add('menuDescription')
    menuItem4Description.innerText = 'Homemade fig jam, Gorgonzola cheese, honey, pears and arugula on Italian flatbread';

    menuItem4.appendChild(menuItem4Name);
    menuItem4.appendChild(menuItem4Price);
    menuItem4.appendChild(menuItem4Description);

    rightMenu.appendChild(menuItem4);

    //Menu Item 5
    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menuItem');

    const menuItem5Name = document.createElement('h3');
    menuItem5Name.innerText = 'Involtini di Melanzane';

    const menuItem5Price = document.createElement('span');
    menuItem5Price.innerText = '$15';

    const menuItem5Description = document.createElement('p');
    menuItem5Description.classList.add('menuDescription')
    menuItem5Description.innerText = 'Rolls of pan seared eggplant filled with ricotta cheese, spinach, and basil. Then baked with tomato sauce and parmesan finished with walnut pesto';

    menuItem5.appendChild(menuItem5Name);
    menuItem5.appendChild(menuItem5Price);
    menuItem5.appendChild(menuItem5Description);

    leftMenu.appendChild(menuItem5);

    //Menu Item 6
    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menuItem');

    const menuItem6Name = document.createElement('h3');
    menuItem6Name.innerText = 'Fromaggio Fritto';

    const menuItem6Price = document.createElement('span');
    menuItem6Price.innerText = '$12';

    const menuItem6Description = document.createElement('p');
    menuItem6Description.classList.add('menuDescription')
    menuItem6Description.innerText = 'Sliced and breaded creamy provolone cheese deep fried, served with our tomato sauce';

    menuItem6.appendChild(menuItem6Name);
    menuItem6.appendChild(menuItem6Price);
    menuItem6.appendChild(menuItem6Description);

    rightMenu.appendChild(menuItem6);

    //Menu Item 7
    const menuItem7 = document.createElement('div');
    menuItem7.classList.add('menuItem');

    const menuItem7Name = document.createElement('h3');
    menuItem7Name.innerText = 'Cozze';

    const menuItem7Price = document.createElement('span');
    menuItem7Price.innerText = '$15';

    const menuItem7Description = document.createElement('p');
    menuItem7Description.classList.add('menuDescription')
    menuItem7Description.innerText = 'Fresh mussels sautéed with tomatoes, garlic, onion, and white wine';

    menuItem7.appendChild(menuItem7Name);
    menuItem7.appendChild(menuItem7Price);
    menuItem7.appendChild(menuItem7Description);

    rightMenu.appendChild(menuItem7);

    //Menu Item 8
    const menuItem8 = document.createElement('div');
    menuItem8.classList.add('menuItem');

    const menuItem8Name = document.createElement('h3');
    menuItem8Name.innerText = 'Insalata di Bresaola';

    const menuItem8Price = document.createElement('span');
    menuItem8Price.innerText = '$18';

    const menuItem8Description = document.createElement('p');
    menuItem8Description.classList.add('menuDescription')
    menuItem8Description.innerText = 'Thinly sliced cured beef tenderloin and arugula tossed with a Sicilian lemon dressing, crispy capers, quail egg, shaved Grana Padano';

    menuItem8.appendChild(menuItem8Name);
    menuItem8.appendChild(menuItem8Price);
    menuItem8.appendChild(menuItem8Description);

    leftMenu.appendChild(menuItem8);

    //append columns
    content.appendChild(leftMenu);
    content.appendChild(rightMenu);
}

export { displayMenu };