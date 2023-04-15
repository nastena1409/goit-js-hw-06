const inputEl = document.querySelector('#validation-input');
const length = Number(inputEl.getAttribute('data-length'));
console.log(typeof length);


inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === length) {
        inputEl.classList.add("valid");  
        inputEl.classList.remove("invalid");
    }
    
    else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
};
