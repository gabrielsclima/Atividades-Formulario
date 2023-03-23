document.write("Dois números iguais ou Maior<br>");
let n1 = parseFloat(prompt("Digite o primeiro número:")),
    n2 = parseFloat(prompt("Digite o segundo número:"));

if (n1 == n2){
    document.write("Ambos são iguais")
}
else if(n1 > n2){
    document.write("O primeiro é maior")
}
else{
    document.write("O segundo é maior")
}
document.write("<br>Fim do programa")