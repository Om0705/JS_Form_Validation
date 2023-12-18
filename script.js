const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
})

const successMsg = () =>{
    let formCon = document.getElementsByClassName('form-control');
    for(var i = 0;i<formCon.length;i++){
        if(formCon[i].className === "form-control success"){

        }
    }
} 

const isEmail = (emailVal) => {
    let regex = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]+$/;
    return regex.test(emailVal);
}

const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal === ""){
        setErrorMsg(username,'username cannot be blank');
    }
    else if(usernameVal.length < 2){
        setErrorMsg(username,'username min 3 char');
    }
    else{
        setSuccessMsg(username);
    }

    if(emailVal === ""){
        setErrorMsg(email,'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email,'Not a valid email');
    }
    else{
        setSuccessMsg(email);
    }

    if(phoneVal === ""){
        setErrorMsg(phone,'phone cannot be blank');
    }
    else if(phoneVal.length != 10){
        setErrorMsg(phone,'Not a valid number');
    }
    else{
        setSuccessMsg(phone);
    }

    if(passwordVal === ""){
        setErrorMsg(password,'password cannot be blank');
    }
    else if(passwordVal.length<= 5){
        setErrorMsg(password,'min 6 char');
    }
    else{
        setSuccessMsg(password);
    }

    if(cpasswordVal === ""){
        setErrorMsg(cpassword,'cpassword cannot be blank');
    }
    else if(passwordVal !== cpasswordVal){
        setErrorMsg(cpassword,'Password not matching');
    }
    else{
        setSuccessMsg(cpassword);
    }


    successMsg();
}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerHTML = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}