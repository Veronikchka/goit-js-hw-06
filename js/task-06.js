const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
const inputLength = input.value.length;
const dataLength = Number(input.dataset.length);

if (inputLength === dataLength) {
input.classList.add('valid');
input.classList.remove('invalid');
} else {
input.classList.add('invalid');
input.classList.remove('valid');
}
});


