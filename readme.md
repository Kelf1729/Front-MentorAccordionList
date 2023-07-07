# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Repo](https://github.com/Kelf1729/Front-MentorAccordionList.git)
- Live Site URL: [Hospe](https://kelf1729.github.io/Front-MentorAccordionList/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile
- Javascript

### What I learned

Uma das coisas que aprendi foi a preparar o html para o accordion list, seguindo a lógica abaixo:

```html
<div class="container">
  <div class="title">
    <h2>How many team members can I invite?</h2>
    <img src="/images/icon-arrow-down.svg" alt="icon-arrow" />
  </div>
  <p>
    You can invite up to 2 additional users on the Free plan. There is no limit
    on team members for the Premium plan.
  </p>
</div>
```

Na parte do CSS eu deixei o p como display: none; e depois com ajuda do JavaScript eu adiciona a classe com o display: block;

```css
p {
  margin-bottom: 15px;
  color: $text1;
  display: none;
  transform: translateY(-20px);
}
.ativo {
  display: block !important;
  animation: show 1s;
  animation-fill-mode: forwards;
}
```

A parte do JavaScript eu selecionei todos os containers e adicionei um evento de click em cada evento onde eu manipulei cada item.

```js
// Selecionando o container
const box = document.querySelectorAll(".container");
box.forEach((item) => {
  item.addEventListener("click", () => {
    item.querySelector("p").classList.toggle("ativo");
    item.querySelector("img").classList.toggle("rotacao");
    item.querySelector("h2").classList.toggle("ajuste-titulo");
  });
});
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Frontend Mentor - [@kelf1729]
