import './style.css';

function displayMenu() {
    const content = document.querySelector('#content');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('title');
    restaurantName.textContent = "Our Menu";
    content.appendChild(restaurantName);

    const leftMenu = document.createElement('div');
    const rightMenu = document.createElement('div');
    leftMenu.classList.add('menuColumn');
    rightMenu.classList.add('menuColumn');

    function createItem(name, price, description) {
        return { name, price, description };
    }

    const menuItems = [
        createItem('Antipasto', 30, 'Cured meats, cheese and accompaniments.'),
        createItem('Aglio e Formaggio', 16, 'Roasted garlic bulb served with warm pesto crusted goat cheese. Drizzled with honey, apricot mostarda and served with rustic crisps'),
        createItem('Bruschetta', 14, 'Traditional style fresh tomatoes, onions, and fresh garlic on our homemade focaccia bread'),
        createItem('Pane di Fichi', 20, 'Homemade fig jam, Gorgonzola cheese, honey, pears and arugula on Italian flatbread'),
        createItem('Involtini di Melanzane', 15, 'Rolls of pan seared eggplant filled with ricotta cheese, spinach, and basil. Then baked with tomato sauce and parmesan finished with walnut pesto'),
        createItem('Fromaggio Fritto', 12, 'Sliced and breaded creamy provolone cheese deep fried, served with our tomato sauce'),
        createItem('Cozze', 15, 'Fresh mussels sautéed with tomatoes, garlic, onion, and white wine'),
        createItem('Insalata di Bresaola', 18, 'Thinly sliced cured beef tenderloin and arugula tossed with a Sicilian lemon dressing, crispy capers, quail egg, shaved Grana Padano'),
        createItem('Calamari Fritti', 17, 'Hand cut in house Lightly dusted with semolina and fried to perfection. Served with a spicy aioli sauce')
    ]

    let menuSide = 'left';

    function populateMenu() {
        for (let item of menuItems) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menuItem');

            const menuItemName = document.createElement('h3');
            menuItemName.textContent = item.name;

            const menuItemPrice = document.createElement('span');
            menuItemPrice.textContent = `$${item.price}`;

            const menuItemDescription = document.createElement('p');
            menuItemDescription.classList.add('menuDescription')
            menuItemDescription.textContent = item.description;

            menuItem.appendChild(menuItemName);
            menuItem.appendChild(menuItemPrice);
            menuItem.appendChild(menuItemDescription);

            if (menuSide === 'left') {
                leftMenu.appendChild(menuItem);
                menuSide = 'right';
            } else {
                rightMenu.appendChild(menuItem);
                menuSide = 'left';
            }
        }
    }

    populateMenu();

    //append columns
    content.appendChild(leftMenu);
    content.appendChild(rightMenu);
}

export { displayMenu };