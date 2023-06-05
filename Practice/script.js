const hamMenu = document.querySelector('.ham-menu');
const header = document.querySelector('header');
const mobileMenu = document.querySelector('.menu')
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let current = 0;

hamMenu.addEventListener('click', createHamMenu)
function createHamMenu() {
  mobileMenu.classList.toggle('display')
}

function reset() {
  for (let i = 0; i < slides.length; i++)
    slides[i].style.display = "none";
}

function startSlide() {
  reset();
  slides[0].style.display = 'block';
}
function slideLeft() {
  reset()
  slides[current - 1].style.display = 'block';
  current--;
}
function slideRight() {
  reset()
  slides[current + 1].style.display = 'block';
  current++;
}

prevBtn.addEventListener('click', function () {
  if (current === 0) {
    current = slides.length
  }
  slideLeft()
})

nextBtn.addEventListener('click', function () {
  if (current === slides.length - 1) {
    current = -1;
  }
  slideRight();
})
startSlide()