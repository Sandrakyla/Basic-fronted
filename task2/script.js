const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода в коносль!');
    console.log('Добро пожаловать в консоль!');
});

const alertText = document.querySelector('#alert');

alertText.addEventListener('click', () => {
    alert('Функция alert() предназначена для вывода в браузере предупреждающего окна!');
    alert('Это и есть предупреждающее окно')
});

const promptText = document.querySelector('#prompt');

promptText.addEventListener('click', () => {
    alert('Команда prompt() предназначена для взаимодействия с пользователем!');
    prompt('Пример команды prompt, введите Ваше имя: ')
});