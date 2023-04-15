const inputEl = document.querySelector('#name-input');
console.log(inputEl.value)
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {

    inputEl.textContent = event.currentTarget.value;

    if (!inputEl.textContent) {
        outputEl.textContent = "Anonymous";
    }
                 
    else {
        outputEl.textContent = event.currentTarget.value;
    }
    
}