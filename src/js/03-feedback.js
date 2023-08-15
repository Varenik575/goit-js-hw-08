/*goit-js-hw-08/03-feedback*/
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFieldInput, 500));
form.addEventListener('submit', clearData);

const STORAGE_KEY = "feedback-form-state";
let formState = {};

function onFieldInput(e) {
    formState[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function clearData(e) {
    e.preventDefault();
    console.log(formState);
    formState = {};
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

const onLoad = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) return;
        formState = JSON.parse(data);
        Object.entries(formState).forEach(([key, val] ) => { form.elements[key].value = val; })
    } catch (error) {
        console.log(error.message);
    }
} 

window.addEventListener('load', onLoad);