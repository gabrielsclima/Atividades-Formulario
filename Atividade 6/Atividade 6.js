let i, numero, soma = 0;
for(i=1; i<=10; i++){
    numero = parseFloat(prompt("Digite o " + i + "º número"));
    soma += numero;
}
document.write("Soma dos 10 números<br>");
document.write("A soma dos números é: ", soma);