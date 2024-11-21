document.addEventListener('DOMContentLoaded', function () {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const bookContent = document.querySelector('.book__content');

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const size = this.dataset.size;

            // ������� �������� ����� � ���� ������
            fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

            // ��������� �������� ����� � ������� ������
            this.classList.add('font-size_active');

            // ������ ������ ������ � ����������� �� ���������� �������
            if (size === 'small') {
                bookContent.style.fontSize = '12px';
            } else if (size === 'big') {
                bookContent.style.fontSize = '20px';
            } else {
                bookContent.style.fontSize = '16px'; // ������� ������
            }
        });
    });
});