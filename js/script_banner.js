// Variables globales
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Función para cambiar el slide manualmente
function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex < 0) {
    currentSlideIndex = totalSlides - 1;
  } else if (currentSlideIndex >= totalSlides) {
    currentSlideIndex = 0;
  }
  updateSlidePosition();
}

// Función para actualizar la posición del slider
function updateSlidePosition() {
  const offset = -currentSlideIndex * 100;
  document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

// Función para cambiar de slide automáticamente
function autoChangeSlide() {
  changeSlide(1);
}

// Iniciar el cambio automático de slides cada 5 segundos
setInterval(autoChangeSlide, 5000);