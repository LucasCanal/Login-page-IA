function login() {

    const email = document.getElementById('email-form').value;
    const password = document.getElementById('password-form').value;

    if(email == "admin" && password == "admin"){
        alert('Sucess');
    } else  {
        alert('Email or password incorrects')
    }
}