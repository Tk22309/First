const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

// Функція, яка виводить значення value з використанням alert
function handleFirstClick1(event) {
    const input = event.target;
    const value = input.value;
    alert("input_1");
    
    input.removeEventListener('click', handleFirstClick);
}
function handleFirstClick2(event) {
    const input = event.target;
    const value = input.value;
    alert("input_2");
    
    input.removeEventListener('click', handleFirstClick);
}
function handleFirstClick3(event) {
    const input = event.target;
    const value = input.value;
    alert("input_3");
    
    input.removeEventListener('click', handleFirstClick);
}

// Прив'язуємо обробник події click до кожного input
input1.addEventListener('click', handleFirstClick1);
input2.addEventListener('click', handleFirstClick2);
input3.addEventListener('click', handleFirstClick3);