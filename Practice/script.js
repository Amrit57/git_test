const hamMenu = document.querySelector('.ham-menu');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.menu')

hamMenu.addEventListener('click', createHamMenu)

function createHamMenu() {
  mobileMenu.classList.toggle('display')
}