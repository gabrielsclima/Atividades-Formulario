document.write("Descubra se o número é Positivo, Negativo ou Zero <br>");
let n1 = parseFloat(prompt("Digite o valor: "));

if (n1 == 0){
    document.write("O valor digitado é 0 (zero)");
}

else if(n1 < 0){
    document.write("O valor digitado é negativo (" + n1 + ")");
}

else if(n1 > 0){
    document.write("O valor digitado é positivo (" + n1 + ")");
}

else{
    document.write("O valor digitado é inválido");
}