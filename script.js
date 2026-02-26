// Toggle Dark and Light Theme 

const bodyElement = document.querySelector('body');
const toggleButton = document.getElementById('toggle-theme');
const divElements = document.querySelectorAll('div');
const sectionElemenets = document.querySelectorAll('section');


toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    divElements.forEach(div => div.classList.toggle('dark-card'));
    sectionElemenets.forEach(section => section.classList.toggle('dark-section'));
});