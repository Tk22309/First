const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

    // Функція, яка записує текст посилання в атрибут title
function setLinkTitle(event) {
    const linkText = event.target.textContent;
    event.target.setAttribute('title', linkText);
}

    // Прив'язуємо обробник події до кожного посилання
link1.addEventListener('mouseover', setLinkTitle);
link2.addEventListener('mouseover', setLinkTitle);
link3.addEventListener('mouseover', setLinkTitle);
















// рядок const link1 = document.getElementById('link1'); 
// отримує посилання на HTML-елемент з ідентифікатором 'link1'
// і зберігає його у змінній link1. Це дозволяє нам використовувати 
// link1 для подальшої маніпуляції цим елементом, наприклад, 
// прив'язувати обробники подій або змінювати його властивості.