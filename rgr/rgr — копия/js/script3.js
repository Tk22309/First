var buttons = document.getElementsByClassName('myButton');
var divs = document.getElementsByClassName('myDiv');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', toggleDiv.bind(null, divs[i]));
    }

    function toggleDiv(div) {
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.remove('fade-in');
            divs[i].classList.add('fade-out');
            divs[i].classList.add('hidden');
        }

        div.classList.remove('fade-out');
        div.classList.remove('hidden');
        div.classList.add('fade-in');
        }

var buttons = document.getElementsByClassName('myButton');

function toggleBackground(button) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    button.classList.add('active');
}

