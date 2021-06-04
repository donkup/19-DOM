const inputDOM = document.querySelector('input');
const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');


buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';
})










