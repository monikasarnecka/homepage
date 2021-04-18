const firstName = "Monika";
const age = 29;




const heading=document.querySelector('.header__first--js');

console.log(heading.innerHTML);


heading.innerHTML= `Nazywam się ${firstName} i mam ${age} lat.`;

console.log(heading.innerHTML);


const great=(age,firstName)=>{
    console.log(`Nazywam się ${firstName} i mam ${age} lat.`);
}
great(29,'Monika');

const calculate= myNumber=>myNumber*7;
const myResult=calculate(7)
console.log(myResult)



function createContent(querySelectorContent, content){
    const element=document.querySelector(querySelectorContent);

element.innerHTML= content;
   
}

createContent('.week-summary__descrition--js','Siema siema');
createContent('.week-summary__title--js','Podmieniony tytuł');



const deathStar = {
    diameter:120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    isOperating:true,
    levels:357,
    name:`Death Star`,
    population:10000,
}

console.log(deathStar[`name`])



const humanOne = {
    name:'Maciek',
    age:32,
    address: {
        street:'Warszawska',
        city:'Białystok',
    }
}

const humanTwo = {
    name:'Stefan',
    age:35,
    address: {
        street: humanOne.address.street,
        city:'Białystok',
    }
}




console.log(humanOne);
console.log(humanTwo);

