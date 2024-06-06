var mail = document.getElementById('email-input');
    mail.addEventListener('keypress', function(mail){

    if(validateEmail(mail)) {
        alert('Correcto!');
    }else{
        alert('Error!');
    }

});

function validateEmail(mail){
    var validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validator.test(String(mail).toLowerCase());
}