// Función para desplazar la galería hacia la izquierda o derecha
function scrollVideos(direction) {
    const galleryWrapper = document.querySelector('.gallery-container-video');
    const scrollAmount = 300; // Distancia de desplazamiento en píxeles por clic
  
    // Desplazar a la izquierda
    if (direction === 'left') {
      galleryWrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
    // Desplazar a la derecha
    else if (direction === 'right') {
      galleryWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  