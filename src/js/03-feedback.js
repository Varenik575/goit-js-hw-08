const { values } = require("@vimeo/player");

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');


const email = form.querySelector('input');
const message = form.querySelector('textarea');

const currentContent = Array.from(form.elements);

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);



function onFormInput(event) {
    localStorage.setItem("feedback-form-state", currentContent);
}


function onFormSubmit(event) {
    event.preventDefault();
}

console.log(currentContent);