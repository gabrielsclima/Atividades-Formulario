document.write("Descubra qual é o maior número <br>");
function verificarMaior(){
    if (n1 > n2){
        document.write("Maior número: " + n1 + "<br>Menor número: " + n2);
    }

    else if(n1 < n2){
        document.write("Maior número: " + n2 + "<br>Menor número: " + n1);
    }

    else if(n1 == n2){
        document.write("Ambos são iguais!!");
    }

    else{
        document.write("O valor digitado não corresponde a um número!!")
    }
    
    document.write("<br>Fim do programa");
}

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
verificarMaior();