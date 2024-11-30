let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide_img').length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex === totalSlides) {
    currentIndex = 0; // Volta para o primeiro slide
  }
  slides.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Intervalo para mudar de slide a cada 5 segundos
setInterval(showNextSlide, 5000);
