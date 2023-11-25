let pwd = document.getElementById('create_password');
let confirmPwd = document.getElementById('confirm_password')

function checkPwd() {
    if(confirmPwd.value) {
        if(pwd.value != confirmPwd.value) {
            pwd.style.borderColor="red";
            confirmPwd.style.borderColor="red";
            document.getElementById('password_error').innerHTML="*Passwords do not match!";
            document.getElementById('password_error').style.color='red'
        } else {
            pwd.style.borderColor="green";
            confirmPwd.style.borderColor="green";
            document.getElementById('password_error').innerHTML="Passwords match"
            document.getElementById('password_error').style.color='green'
        }
    } 
}


pwd.addEventListener('keyup', () =>{
    checkPwd()
})

confirmPwd.addEventListener('keyup', () =>{
    checkPwd()
})