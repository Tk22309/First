// Отримуємо посилання за його id
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

// Функція, яка дописує href в кінець тексту посилання
function addHrefToText(event) {
  const link = event.target;
  const href = link.getAttribute('href');
  const text = link.textContent;
  link.textContent = text + ' (' + href + ')';
  
  // Відв'язуємо обробник події після першого наведення
  link.removeEventListener('mouseover', addHrefToText);
}

link1.addEventListener('mouseover', addHrefToText);
link2.addEventListener('mouseover', addHrefToText);
link3.addEventListener('mouseover', addHrefToText);

/*
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

// Функція, яка дописує href в кінець тексту посилання
function addText(event) {
  const link = event.target;
  const href = link.getAttribute('href');
  const text = link.textContent;
  link.textContent = text + ' (' + href + ')';
}

// Функція, яка видаляє href з кінця тексту посилання
function removeText(event) {
  const link = event.target;
  const text = link.textContent;
  const href = link.getAttribute('href');
  link.textContent = text.replace(' (' + href + ')', '');
}

// Прив'язуємо обробник події до кожного посилання
link1.addEventListener('mouseover', addText);
link2.addEventListener('mouseover', addText);
link3.addEventListener('mouseover', addText);

link1.addEventListener('mouseout', removeText);
link2.addEventListener('mouseout', removeText);
link3.addEventListener('mouseout', removeText);*/