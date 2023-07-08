// Selecionando o container
const boxes = document.querySelectorAll(".container");
boxes.forEach((box) => {
  const paragraph = box.querySelector("p");
  const imagem = box.querySelector("img");
  const titulo = box.querySelector("h2");
  box.addEventListener("click", () => {
    paragraph.classList.toggle("ativo");
    imagem.classList.toggle("rotacao");
    titulo.classList.toggle("ajuste-titulo");
  });
});
