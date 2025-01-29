const imageItems = document.querySelectorAll('.image-item');
const details = document.querySelector('.details');
const detailsImage = document.querySelector('.details-image');
const detailsText = document.querySelector('.details-text');
const backButton = document.getElementById('back-button');
const imageGrid = document.querySelector('.image-grid');

// Manejar la selección de una imagen
imageItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const description = item.dataset.description;

    // Ocultar la cuadrícula de imágenes y mostrar los detalles
    imageGrid.classList.add('hidden');
    details.classList.remove('hidden');

    // Configurar la imagen y el texto
    detailsImage.src = imgSrc;
    detailsText.textContent = description;
  });
});

// Manejar el botón de regresar
backButton.addEventListener('click', () => {
  details.classList.add('hidden');
  imageGrid.classList.remove('hidden');
});


imageItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    const description = item.dataset.description;

    // Ejemplo: separar el texto con "||" para el título y descripción
    const [title, desc] = description.split('||');

    // Ocultar la cuadrícula de imágenes y mostrar los detalles
    imageGrid.classList.add('hidden');
    details.classList.remove('hidden');

    // Configurar la imagen y el texto
    detailsImage.src = imgSrc;

    // Generar texto con formato (negrita y salto de línea)
    detailsText.innerHTML = `<strong>${title}</strong><br><p>${desc}</p>`;
  });
});
