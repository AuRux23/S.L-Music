  document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("form");
    const mensajeEnviado = document.getElementById("mensaje-enviado");

    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); 

      mensajeEnviado.style.display = "block"; 
    });
  });
      const links = document.querySelectorAll('.nav-menu a');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });
