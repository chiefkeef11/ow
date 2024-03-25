function addContact() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    const colors = ['blue', 'green', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const contactsContainer = document.getElementById('contactsContainer');
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');
    contactCard.style.backgroundColor = randomColor;

    contactCard.innerHTML = `
        <p>Имя: ${name}</p>
    <b></b>
        <p>Фамилия: ${surname}</p>

        <p>Адрес: ${address}</p>

        <p>Телефон: ${phone}</p>

        <p>Email: ${email}</p>
        `   
    ;

    contactsContainer.appendChild(contactCard);
}

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', addContact);