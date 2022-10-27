const sectionRating = document.querySelector('.main__container-rating');
const sectionSelection = document.querySelector('.main__container-selection');
const radioUno = document.querySelector('#radio1');
const radioDos = document.querySelector('#radio2');
const radioTres = document.querySelector('#radio3');
const radioCuatro = document.querySelector('#radio4');
const radioCinco = document.querySelector('#radio5');
const submitButton = document.querySelector('.main__container-rating-button');
const contentSpan = document.querySelector('.main__container-content-span');

function checkRating () {
    if (radioUno.checked) {
        inactiveScreen();
        addSpan();
    } else if (radioDos.checked) {
        inactiveScreen();
        addSpan();
    } else if (radioTres.checked) {
        inactiveScreen();
        addSpan();
    } else if (radioCuatro.checked) {
        inactiveScreen();
        addSpan();
    } else if (radioCinco.checked) {
        inactiveScreen();
        addSpan();
    } else {
    }
}

submitButton.addEventListener('click', checkRating);

function inactiveScreen () {
    sectionRating.classList.add('inactive');
    sectionSelection.classList.remove('inactive');
}

function addSpan () {
    if (radioUno.checked) {
        contentSpan.textContent = '1 '
    } else if (radioDos.checked) {
        contentSpan.textContent = '2 '
    } else if (radioTres.checked) {
        contentSpan.textContent = '3 '
    } else if (radioCuatro.checked) {
        contentSpan.textContent = '4 '
    } else if (radioCinco.checked) {
        contentSpan.textContent = '5 '
    }
}
