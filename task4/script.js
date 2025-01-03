const link = document.querySelector('#website');

link.addEventListener('click', function(event) {
    document.querySelector('a').textContent=prompt('Изменение текста сслыки:');
    event.preventDefault();
});