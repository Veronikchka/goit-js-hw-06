const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
event.preventDefault(); // зупиняємо перезавантаження сторінки

const formData = new FormData(form); // створюємо об'єкт FormData зі значеннями форми
const data = Object.fromEntries(formData); // перетворюємо FormData в звичайний об'єкт з допомогою методу fromEntries

// перевіряємо, чи всі поля заповнені
if (!data.email || !data.password) {
alert('All fields must be filled!');
return;
}

console.log(data); // виводимо об'єкт з даними в консоль
form.reset(); // очищуємо форму
});


// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.