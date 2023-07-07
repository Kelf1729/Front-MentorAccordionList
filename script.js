// Selecionando o container
const box = document.querySelectorAll(".container");
box.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector("p").classList.toggle("ativo");
    item.querySelector("img").classList.toggle("rotacao");
    item.querySelector("h2").classList.toggle("ajuste-titulo");
  });
});
