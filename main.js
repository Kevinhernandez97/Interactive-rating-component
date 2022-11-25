const sectionRating = document.querySelector('.main__container-rating');
const sectionSelection = document.querySelector('.main__container-selection');
const radioUno = document.querySelector('#radio1');
const radioDos = document.querySelector('#radio2');
const radioTres = document.querySelector('#radio3');
const radioCuatro = document.querySelector('#radio4');
const radioCinco = document.querySelector('#radio5');
const submitButton = document.querySelector('.main__container-rating-button');
const contentSpan = document.querySelector('.main__container-content-span');

const checkRating = () => {
    radioUno.checked ? (inactiveScreen(), addSpan()) : 
    radioDos.checked ? (inactiveScreen(), addSpan()) : 
    radioTres.checked ? (inactiveScreen(), addSpan()) : 
    radioCuatro.checked ? (inactiveScreen(), addSpan()) : 
    radioCinco.checked ? (inactiveScreen(), addSpan()) : '';
}
submitButton.addEventListener('click', checkRating);


const inactiveScreen = () => {
sectionRating.classList.add('inactive'); 
sectionSelection.classList.remove('inactive');
}

const addSpan = () => {
    radioUno.checked ? contentSpan.textContent = '1 ' :
    radioDos.checked ? contentSpan.textContent = '2 ' :
    radioTres.checked ? contentSpan.textContent = '3 ' :
    radioCuatro.checked ? contentSpan.textContent = '4 ' :
    radioCinco.checked ? contentSpan.textContent = '5 ' : '';
}
