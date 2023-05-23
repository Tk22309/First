const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.getElementById('paragraph2');
const paragraph3 = document.getElementById('paragraph3');

// Функція, яка виводить квадрат числа
function displaySquare(event) {
    const paragraph = event.target;
    const number = parseInt(paragraph.textContent);
    const square = number * number;
    paragraph.textContent = square;
}

// Прив'язуємо обробник події click до кожного параграфа
paragraph1.addEventListener('click', displaySquare);
paragraph2.addEventListener('click', displaySquare);
paragraph3.addEventListener('click', displaySquare);