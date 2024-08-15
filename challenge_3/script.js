var mail = document.getElementById('email-input');
    mail.addEventListener('get'{
    
    if(validateEmail(mail)) {
        alert('Correcto!');
    }else{
        alert('Error!');
    }

});

function validateEmail(mail){
    var validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

}