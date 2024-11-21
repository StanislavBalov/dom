const rotatorCases = document.querySelectorAll('.rotator__case');
let currentIndex = 0;

function changeRotator() {
    // —крываем текущее объ€вление
    rotatorCases[currentIndex].classList.remove('rotator__case_active');

    // ѕереходим к следующему объ€влению
    currentIndex = (currentIndex + 1) % rotatorCases.length;

    // ѕоказываем следующее объ€вление
    rotatorCases[currentIndex].classList.add('rotator__case_active');

    // ћен€ем цвет текста
    const currentCase = rotatorCases[currentIndex];
    currentCase.style.color = currentCase.dataset.color;

    // ”станавливаем таймер дл€ следующей смены
    setTimeout(changeRotator, currentCase.dataset.speed);
}

// «апускаем механизм смены объ€влений
setTimeout(changeRotator, 1000);