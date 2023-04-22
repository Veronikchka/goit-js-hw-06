const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.querySelector('input');
const createBtnEl = controlsEl.querySelector('[data-create]');
const destroyBtnEl = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
const amount = inputEl.value;
let boxSize = 30;
const boxes = [];

for (let i = 0; i < amount; i += 1, boxSize += 10) {
const box = document.createElement('div');
box.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};`;

boxes.push(box);
}

boxesEl.append(...boxes);
}

function destroyBoxes() {
boxesEl.innerHTML = '';
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)    
.toString(16)     
.padStart(6, 0)}`;
}

// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого 
//рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.