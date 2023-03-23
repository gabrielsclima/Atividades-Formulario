let userPassword;
let pass = false;
let password = "12345";

while(pass == false){
    userPassword = prompt("Digite sua senha");
    if (userPassword == password){
        alert("Acesso permitido :)");
        pass = true;
    }
    else{
        alert("ACESSO NEGADO!");
    }
}
document.write("Seja vem vindo!");