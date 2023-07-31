import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector('button');
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const values = JSON.parse(localStorage.getItem('feedback-form-state'));

email.addEventListener('input', throttle(onFieldInput, 500));
message.addEventListener('input', throttle(onFieldInput, 500));
form.addEventListener('submit', clearLocalStorage);

FillFields();

function onFieldInput(event) {
    event.preventDefault();
    localStorage.setItem('feedback-form-state', JSON.stringify({ email: email.value, message: message.value }));
}

function FillFields() {
    if (values) {
        email.value = values.email;
        message.value = values.message;
    };
}

function clearLocalStorage() {
    console.log(values);
    localStorage.removeItem('feedback-form-state');
}