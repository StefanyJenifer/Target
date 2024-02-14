const prompt = require('prompt-sync')()
/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
    IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

function verificarFibonacci(numero) {
    let fib1 = 0;
    let fib2 = 1;
    let resultado;

    while (fib1 <= numero) {
        if (fib1 === numero) {
            return true;
        }
        resultado = fib1 + fib2;
        fib1 = fib2;
        fib2 = resultado;
    }

    return false;
}

//Exemplo
const numero = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));

if (verificarFibonacci(numero)) {
    console.log(numero + " pertence à sequência de Fibonacci.");
} else {
    console.log(numero + " não pertence à sequência de Fibonacci.");
}
