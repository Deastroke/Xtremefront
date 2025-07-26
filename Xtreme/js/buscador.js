// Seleccionamos el campo de búsqueda y las tarjetas
const searchInput = document.getElementById('search');
const serviceCards = document.querySelectorAll('.service-card');

// Mostrar todas las tarjetas al inicio
window.onload = function() {
    serviceCards.forEach(card => {
        card.style.display = 'block'; // Asegura que todas las tarjetas estén visibles al cargar la página
        card.style.zIndex = '0'; // Asegura que las tarjetas no se solapen
        card.classList.remove('highlight'); // Elimina cualquier resalto previo
    });
}

// Función que se ejecuta cuando el usuario escribe en el buscador
searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase(); // Convertimos el texto a minúsculas

    // Si el campo de búsqueda está vacío, mostramos todas las tarjetas
    if (searchText.trim() === "") {
        serviceCards.forEach(card => {
            card.style.display = 'block'; // Mostrar todas las tarjetas
            card.style.zIndex = '0'; // Coloca las tarjetas en el fondo
            card.classList.remove('highlight'); // Elimina la clase de resalto
        });
    } else {
        // Si hay texto en el campo de búsqueda, filtramos las tarjetas
        serviceCards.forEach(card => {
            const serviceTitle = card.querySelector('h3').textContent.toLowerCase(); // Título de la tarjeta
            
            // Comprobamos si el título contiene el texto ingresado en el buscador
            if (serviceTitle.includes(searchText)) {
                card.style.display = 'block'; // Mostrar la tarjeta
                card.style.zIndex = '10'; // Mover la tarjeta al frente
                card.classList.add('highlight'); // Agregar clase de resalto
            } else {
                card.style.display = 'none'; // Ocultar tarjeta si no coincide
                card.classList.remove('highlight'); // Eliminar la clase de animación
            }
        });
    }
});
