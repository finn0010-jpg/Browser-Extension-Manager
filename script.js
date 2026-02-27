// Toggle Dark and Light Theme 

const bodyElement = document.body;
const toggleButton = document.getElementById('toggle-theme');
const extensionSection = document.getElementById('extensions');
const mainDiv = extensionSection.querySelectorAll('div');
const divCard = document.querySelectorAll('.card');
const mainElement = document.main;
const filterButtons = document.querySelectorAll('.filter-button');
const buttonElements = document.querySelectorAll('button');

function toggleTheme() {
    bodyElement.classList.toggle('dark-theme');
    mainDiv.forEach(div => {
        div.classList.toggle('dark-card');
    });

    buttonElements.forEach(button => {
        button.classList.toggle('dark-button');
    });

    if (div.classList.contains('card')) {
        div.classList.toggle('dark-card');
    }
};

function toggleButtonIcon() {
    const buttonIcon = document.getElementById('button-toggle');
    if (bodyElement.classList.contains('dark-theme')) {
        buttonIcon.src = './assets/images/icon-sun.svg';
    } else {
        buttonIcon.src = './assets/images/icon-moon.svg';
    }
}

toggleButton.addEventListener('click', toggleTheme);
toggleButton.addEventListener('click', toggleButtonIcon);
// Filter Buttons 

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        // Find the currently active button and remove the 'active' class
        const currentActive = document.getElementsByClassName("active");
        if (currentActive.length > 0) {
            currentActive[0].classList.remove("active");
        }

        // Add the 'active' class to the clicked button
        this.classList.add("active");
    });
}