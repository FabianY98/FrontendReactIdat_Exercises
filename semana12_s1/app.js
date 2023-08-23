const element = document.createElement('p');

element.textContent = 'Soy un parrafo';

const container = document.getElementById('container');
const elementBody = document.querySelector('body');

// container.appendChild(element);
elementBody.appendChild(element);
