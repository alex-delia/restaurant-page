import './style.css';

function displayContact() {
    const content = document.querySelector('#content');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('title');
    restaurantName.textContent = "Bubby's";
    content.appendChild(restaurantName);

    //contact info
    const contactContainer = document.createElement('div');

    const contactUs = document.createElement('h2');
    contactUs.textContent = 'Contact Us'
    contactUs.style.marginBottom = '8px';

    const email = document.createElement('p');
    email.innerHTML = '<b>Email:</b> info@bubbysitalian.com'

    const phone = document.createElement('p');
    phone.innerHTML = '<b>Phone:</b> (555) 555-5555'

    const address = document.createElement('p');
    address.innerHTML = '<b>Address:</b> 456 Oak Street, Little Italy, Anytown, USA'

    contactContainer.appendChild(contactUs);
    contactContainer.appendChild(email);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(address);

    content.appendChild(contactContainer);
}

export { displayContact };