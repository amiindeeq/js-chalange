// get element using by id 

// const heading = document.getElement Byid("heading");

// get Element using by tagname
// const par = document.getElementsByTageName("p");

//Get Element by query classname

//const section = document.getElementByClassname("section");

//Get Element by query selector

//const section = document.querySelector(".section");

//const heading = document.querySelector("#heading");

//const p = document.querySelector('body');

//console.log(section);

//console.log(heading);

//console.log(p);


const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    const name = prompt('please enter your name');
    if(name.length.trim < 5 || name.trim(). length > 15) {
        alert('your name be 5 chars o long');
    } else {
        alert(`Your Name is ${name}`);
    }
});