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

const liDOM = document.querySelectorAll('li')
console.log(liDOM);
const ingredientai = [];

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = "POMIDORAS";
    liDOM[i].classList.add('pomidoras');
}







