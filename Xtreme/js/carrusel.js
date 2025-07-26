
  let slides = document.querySelectorAll('.slide');
  let index = 0;

  function mostrarSiguienteSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  setInterval(mostrarSiguienteSlide, 5000); // Cambia cada 5 segundos

