const formEl = document.querySelector(".login-form");
//console.log(formEl.elements);

formEl.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const 
        {
            elements: { email, password }
        } = event.currentTarget;
    
    if (!email.value || !password.value) {
        alert('Please enter your email and password!')
    } else {
        const userData = {
            email: email.value,
            password: password.value,
        }

        console.dir(userData);
        
    }
    event.currentTarget.reset();
})
