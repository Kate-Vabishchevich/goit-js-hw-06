// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля
//  буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми 
//  використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// loginForm.addEventListener('submit', sendingForm)

// function sendingForm(event) {
//     event.preventDefault();
//     const { elements: { email, password } } = event.currentTarget;
//     if (email.value === '' || password.value === '') {
//         return alert('Please, fill in all the fields!');
//     }
//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//  event.currentTarget.reset();
// }

const form = document.querySelector("form.login-form");
const input = document.querySelector("input");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;

  const formData = new FormData(evt.currentTarget);

  const email = formElements.email.value.trim().length;
  const password = formElements.password.value.trim().length;
  if (email === 0 || password === 0) {
    return alert("Please, fill in all the fields!");
  }

    formData.forEach((value, name) => {
    console.log("Name:", name);
    console.log("Value:", value);
  });

  evt.currentTarget.reset();
}