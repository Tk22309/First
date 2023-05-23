const inputs = document.querySelectorAll('input');

// Додаємо обробник події для кожного input
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    const length = input.getAttribute('data-length');
    const value = input.value.trim();

    if (value.length === parseInt(length)) {
      input.style.borderColor = 'green'; 
    } else {
      input.style.borderColor = 'red'; 
    }
  });
});