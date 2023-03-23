let nota;
let pass;
let media = 0;

for (let i=1; i<=4; i++){
    pass = false;
    while(pass == false){
        nota = parseFloat(prompt("Digite a " + i + "º nota"));
        if (nota > 0 && nota < 10){
            media += nota;
            console.log(media);
            pass = true;
        }
        else{
            alert("Valor inválido!! Digite apenas números entre 0 e 10" );
        }
    }
}
media /= 4
document.write("Aprovado ou reprovado <br>");
document.write("Resultado da média: " + media + "<br>");

if (media > 5){
    document.write("Você passou no teste!");
}
else{
    document.write("Tente novamente");
}