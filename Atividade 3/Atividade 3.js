document.write("Compare 3 valores e descubra qual é o maior<br>");
let n1 = parseFloat(prompt("Digite o primeiro valor:")),
    n2 = parseFloat(prompt("Digite o segundo valor:")),
    n3 = parseFloat(prompt("Digite o terceiro valor:"));
const numbers = [n1, n2, n3];
numbers.sort(function(a, b) {return a - b});
document.write(numbers[2] + "<br>");