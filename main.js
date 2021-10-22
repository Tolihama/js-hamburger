/*
 * Hamburger menu
 */

// Selectors
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerLogo = document.querySelector('.fas.fa-bars');
const closeMenuLogo = document.querySelector('.fas.fa-times');
// Fare attenzione alla selezione dei loghi: se nel documento html ne fossero presenti di più, il programma potrebbe non funzionare correttamente per via di una selezione errata.

// Open menu
hamburgerLogo.addEventListener('click', function() {
    hamburgerMenu.classList.add('active');
});

// Close menu
closeMenuLogo.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
});