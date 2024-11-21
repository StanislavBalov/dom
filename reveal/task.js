window.addEventListener('scroll', function () {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active'); // Удаляем класс, если элемент не на экране
        }
    });
});