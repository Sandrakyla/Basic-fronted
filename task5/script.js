const inputText = document.querySelector('input');
const textField = document.querySelector('#duplicateField');

inputText.addEventListener('input', () => {
    textField.textContent = inputText.value;
});

document.querySelector('#button').addEventListener('click', (event) => {
    textField.textContent = inputText.value;
    console.log(textField.textContent);
    textField.textContent = "";
    event.preventDefault();
});