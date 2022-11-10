// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє 
// його поточне значення в span#name - output.Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

// const eventRef = (event) => {
//     if (textInput.value.length === 0) {
//         textOutput.textContent = "Anonymous"
//     } else textOutput.textContent = event.currentTarget.value;
// }
 
// або тернарник:

const eventRef = (event) => {
    textInput.value.length === 0 ? textOutput.textContent = "Anonymous" : textOutput.textContent = event.currentTarget.value;
}

textInput.addEventListener('input', eventRef)