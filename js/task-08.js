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

