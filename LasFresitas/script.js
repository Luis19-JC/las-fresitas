function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("section");
  secciones.forEach(sec => {
    sec.classList.add("oculto");
    sec.classList.remove("section-animate");
  });
  const target = document.getElementById(id);
  target.classList.remove("oculto");
  target.classList.add("section-animate");
  target.addEventListener(
    "animationend",
    () => target.classList.remove("section-animate"),
    { once: true }
  );
}
