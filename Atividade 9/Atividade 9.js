let nascimento;
let idade;
let pass = false;

while(pass == false){
    nascimento = parseInt(prompt("Digite seu ano de nascimento"));
    if (nascimento == "NaN"){
        alert("Valor inválido! Tente novamente.");
    }
    else{
        pass = true;
    }
}
idade = 2023 - nascimento;

document.write("Preciso votar? <br>");
document.write("Idade: " + idade + "<br>");
if (idade < 16){
    document.write("Você ainda não pode votar");
}

else if (idade < 18 || idade >= 70){
    document.write("Seu voto é facultativo, ou seja, é opcional");
}

else{
    document.write("Seu voto é obrigatório!");
}