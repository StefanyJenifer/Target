const prompt = require('prompt-sync')()
/*5) Escreva um programa que inverta os caracteres de um string.
    IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/


function inverterString(frase) {
    let fraseInvertida = '';
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    return fraseInvertida;
}
// Exemplo
let minhaFrase = prompt("Digite uma frase para inverter:");
let fraseInvertida = inverterString(minhaFrase);
console.log("Frase invertida:", fraseInvertida);
