
function troca0(){
    window.location.href = "index.html"

}

function troca(){

    window.location.href = "sobre.html"
}

function troca1(){
    window.location.href = "tecnologias.html"
}

function troca2(){
    window.location.href = "beneficios.html"
}

function troca3(){
    window.location.href = "contato.html"
}

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nicolas535.garciass@gmail.com",
        Password : "R7!i8@B31#.mcmGOOGLE",
        To : 'nicolas535.garcia@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}




