document.write("Média Aritmética das 10 notas<br>");
let i, media, notas = 0;
for (i=1; i<=10; i++){
    notas += parseFloat(prompt("Digite a " + i + "º nota"));
}
media = notas / 10;
document.write("Sua média é de: " + media);