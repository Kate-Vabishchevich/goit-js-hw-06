function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bodyColor = document.querySelector('body');
const buttonColor = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

const changeBgc = (event) => {
  const changeColor = getRandomHexColor();

  bodyColor.style.backgroundColor = changeColor;
  spanColor.textContent = changeColor;
}

buttonColor.addEventListener('click',changeBgc);
