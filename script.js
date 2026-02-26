// Toggle Dark and Light Theme 

const bodyElement = document.body;
const toggleButton = document.getElementById('toggle-theme');
const extensionSection = document.getElementById('extensions');
const mainDiv = extensionSection.querySelectorAll('div');
const divCard = document.querySelectorAll('.card');
const mainElement = document.main;


function toggleTheme() {
    bodyElement.classList.toggle('dark-theme');
    mainDiv.forEach(div => {
        div.classList.toggle('dark-card');
    });

    if (div.classList.contains('card')) {
        div.classList.toggle('dark-card');
    }
};  

toggleButton.addEventListener('click', toggleTheme);