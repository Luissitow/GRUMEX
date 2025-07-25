// Soporte para gestos táctiles en el slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.exitos__list');
    const sliderInfo = document.querySelector('.exitos__lists');
    
    if (!slider || !sliderInfo) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe(direction) {
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
        
        if (direction === 'left') {
            // Deslizamiento a la izquierda, ir adelante
            nextButton.click();
        } else if (direction === 'right') {
            // Deslizamiento a la derecha, ir atrás
            prevButton.click();
        }
    }
    
    // Para el slider de imágenes
    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            handleSwipe('left');
        } else if (touchEndX - touchStartX > 50) {
            handleSwipe('right');
        }
    });
    
    // Para el slider de información
    sliderInfo.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderInfo.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            handleSwipe('left');
        } else if (touchEndX - touchStartX > 50) {
            handleSwipe('right');
        }
    });
});















// Hacer que las miniaturas funcionen correctamente en dispositivos táctiles
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail .item');
    
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            // Simular el mismo comportamiento que en escritorio
            const sliderItems = document.querySelectorAll('.exitos__list .item');
            const infoItems = document.querySelectorAll('.exitos__lists .item');
            
            // Remover clase active de todos los elementos
            sliderItems.forEach(item => item.classList.remove('active'));
            infoItems.forEach(item => item.classList.remove('active'));
            thumbnails.forEach(item => item.classList.remove('active'));
            
            // Agregar clase active al elemento seleccionado
            if(sliderItems[index]) sliderItems[index].classList.add('active');
            if(infoItems[index]) infoItems[index].classList.add('active');
            this.classList.add('active');
        });
    });
});