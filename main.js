const firstName = "Monika";
const age = 29;

console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat.`);


const heading=document.querySelector('.header-first--js');

console.log(heading.innerHTML);


heading.innerHTML= `Nazywam się ${firstName} i mam ${age} lat.`;

console.log(heading.innerHTML);
