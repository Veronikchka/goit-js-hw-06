let counterValue = 0;

const counter = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

counter.addEventListener("click", (event) => {
const action = event.target.dataset.action;

if (action === "increment") {
counterValue += 1;
} else if (action === "decrement") {
counterValue -= 1;
}

valueEl.textContent = counterValue;
});

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.