document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarme. Te responderé pronto.");
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  const secciones = document.querySelectorAll(".seccion-cv");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Oculta todas las secciones
      secciones.forEach(seccion => seccion.classList.add("d-none"));

      // Muestra solo la sección correspondiente
      const id = this.getAttribute("href").substring(1);
      const objetivo = document.getElementById(id);
      if (objetivo) {
        objetivo.classList.remove("d-none");
        objetivo.scrollIntoView({ behavior: "smooth" });
      }

      // Cierra el menú en pantallas pequeñas
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      }
    });
  });
});

const enlaces = document.querySelectorAll('.nav-link');
const secciones = document.querySelectorAll('.seccion-cv');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();

    const id = enlace.getAttribute('href').substring(1); // le quita el "#"
    
    secciones.forEach(seccion => {
      seccion.classList.add('d-none');
    });

    document.getElementById(id).classList.remove('d-none');
  });
});
