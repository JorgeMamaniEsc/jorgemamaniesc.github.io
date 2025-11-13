document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de Jorge Mamani Escobedo cargada correctamente ⚡");
  
  const title = document.querySelector("header h1");
  title.style.transition = "transform 0.6s ease";
  title.addEventListener("mouseover", () => title.style.transform = "scale(1.05)");
  title.addEventListener("mouseout", () => title.style.transform = "scale(1)");
});
