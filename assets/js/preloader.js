document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none"; // Oculta el preloader
        document.getElementById("contenido").classList.remove("hidden"); // Muestra la web
    }, 1800); // Tiempo en milisegundos (2 segundos)
});
