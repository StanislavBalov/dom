document.addEventListener('DOMContentLoaded', function () {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book__content');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const size = this.dataset.size;

            // Удаляем активный класс у всех ссылок
            fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

            // Добавляем активный класс к текущей ссылке
            this.classList.add('font-size_active');

            // Меняем размер шрифта в зависимости от выбранного размера
            if (size === 'small') {
                bookContent.style.fontSize = '12px';
            } else if (size === 'big') {
                bookContent.style.fontSize = '20px';
            } else {
                bookContent.style.fontSize = '16px'; // обычный размер
            }
        });
    });
});