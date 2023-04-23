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
