let password = document.getElementById('create_password').value;
let confirmPassword = document.getElementById('confirm_password').value;
let confirmPasswordVariable = document.getElementById('confirm_password');

confirmPasswordVariable.addEventListener('keyup', () =>{
    if(confirmPassword =! password){
        confirmPasswordVariable.style.borderColor='red';
    }
})