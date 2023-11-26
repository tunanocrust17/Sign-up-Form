let pwd = document.getElementById('create_password');
let confirmPwd = document.getElementById('confirm_password');
let passwordMsg = document.getElementById('password_error');

function checkPwd() {
    if(confirmPwd.value) {
        if(pwd.value != confirmPwd.value) {
            pwd.style.borderColor="red";
            confirmPwd.style.borderColor="red";
            passwordMsg.innerHTML="*Passwords do not match!";
            passwordMsg.style.color='red'
        } else {
            pwd.style.borderColor="green";
            confirmPwd.style.borderColor="green";
            passwordMsg.innerHTML="Passwords match"
            passwordMsg.style.color='green'
        }
    } 
}


pwd.addEventListener('keyup', () =>{
    checkPwd()
})

confirmPwd.addEventListener('keyup', () =>{
    checkPwd()
})