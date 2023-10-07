// JavaScript para el banner de imágenes cambiantes
const images = document.querySelectorAll('.image-slider img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].style.opacity = '0';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = '1';
}

setInterval(changeImage, 3000); // Cambiar la imagen cada 3 segundos

let visitCount = 0;
const visitCountElement = document.getElementById('visit-count');

function incrementVisitCount() {
    visitCount++;
    visitCountElement.textContent = visitCount;
}

incrementVisitCount(); // Incrementa el contador al cargar la página
