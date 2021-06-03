/*
pakeisti tekstini turini H1 elemente i "labas vakaras"

*/
// const h1DOM = document.querySelector('h1');
// h1DOM.innerText = "labas vakaras!";

// const pDOM = document.querySelector('p');
// pDOM.innerText = "Siandienas grazus oras";


/*
surasti visus ingridientus

*/

// const liDOM = document.querySelectorAll('li')
// console.log(liDOM);
// const ingredientai = [];

// for (let i = 0; i < liDOM.length; i++) {
//     const ingredientas = liDOM[i].innerText.toUpperCase();
//     console.log(ingredientas);
//     ingredientai.push(ingredientas);

// }
// const uppercased = ingredientai.map(i => i.toUpperCase())
// console.log(ingredientai);
// console.log(uppercased);
// const h1DOM = document.querySelector('h1');
// h1DOM.classList.add('antraste');


// const liDOM = document.querySelectorAll('li')
// console.log(liDOM);
// const ingredientai = [];
// for (let i = 0; i < liDOM.length; i++) {
//     const ingredientas = liDOM[i].classList.add('darzove');
// }

/*
surasti visus ingridientus ir kiekvienos darzoves teksta pakeisti i israuta darzove
*/

// const liDOM = document.querySelectorAll('li')
// console.log(liDOM);
// const ingredientai = [];

// for (let i = 0; i < liDOM.length; i++) {
//     liDOM[i].innerText = "israuta darzove";
// }

/*
surasti visas darzoves pakeisti i pomidoras ir priskirti kiekvienai darzovei CSS klase pomidoras
*/

// const liDOM = document.querySelectorAll('li')
// console.log(liDOM);
// const ingredientai = [];

// for (let i = 0; i < liDOM.length; i++) {
//     liDOM[i].innerText = "POMIDORAS";
//     liDOM[i].classList.add('pomidoras');
// }

// const logoDOM = document.querySelector('.logo');
// const navDOM = document.querySelector('nav')
// const hamburgerDOM = document.querySelector('.hamburger');

// console.log(logoDOM);
// console.log(hamburgerDOM);

// hamburgerDOM.addEventListener('click', () => {
//     logoDOM.classList.toggle('big');
//     navDOM.classList.toggle('visible');

// })
let rezultatas = 0;

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');

const h1 = h1DOM.innerText;


minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Its alive 🧛‍♂️🧛‍♀️🧛‍♂️';
})
plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;
    numberDOM.innerText = rezultatas;
    h1DOM.innerText = 'Zaidimas progrese 🕵️‍♂️';
})
resetDOM.addEventListener('click', () => {
    numberDOM.innerText = 0;
    h1DOM.innerText = h1;
})










