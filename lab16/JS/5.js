    // Отримуємо елементи input за їх id
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const demo = document.getElementById('demo');

    // Функція, яка виводить значення input в абзац
    function handleBlur(event) {
      const input = event.target;
      const value = input.value;
      demo.textContent = value;
    }

    // Прив'язуємо обробник події blur до кожного input
    input1.addEventListener('blur', handleBlur);
    input2.addEventListener('blur', handleBlur);
    input3.addEventListener('blur', handleBlur);