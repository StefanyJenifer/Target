const prompt = require('prompt-sync')()
/*Job Rotation - São Paulo

Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
    K = K + 1;
    SOMA = SOMA + K;
}
imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA ?

RESPOSTA
let i = 13;
let soma = 0;
let k = 0;

    while (k < i) {
    k = k + 1;
    soma = soma + k;
}
console.log(soma);*/


/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
    IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
/*
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
*/





/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
    IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados.Estes dias devem ser ignorados no cálculo da média;
*/

/*RESPOSTA
const faturamentoMensal = {
    "2024-02-01": 5000,
    "2024-02-02": 6000,
    "2024-02-03": 4500,
    "2024-02-04": 7000,
    "2024-02-05": 0, 
};

// Função para calcular o menor e o maior valor de faturamento
function calcularMinMaxFaturamento(faturamento) {
    const valoresFaturamento = Object.values(faturamento);
    const menorFaturamento = Math.min(...valoresFaturamento);
    const maiorFaturamento = Math.max(...valoresFaturamento);
    return { menorFaturamento, maiorFaturamento };
}

// Função para calcular a média mensal de faturamento
function calcularMediaMensal(faturamento) {
    const valoresFaturamento = Object.values(faturamento).filter(valor => valor > 0);
    const somaFaturamento = valoresFaturamento.reduce((soma, valor) => soma + valor, 0);
    const media = somaFaturamento / valoresFaturamento.length;
    return media;
}

// Função para contar o número de dias em que o faturamento diário foi superior à média mensal
function contarDiasAcimaDaMedia(faturamento, media) {
    let contador = 0;
    for (const valor of Object.values(faturamento)) {
        if (valor > media) {
            contador++;
        }
    }
    return contador;
}

// Calcular menor e maior faturamento
const { menorFaturamento, maiorFaturamento } = calcularMinMaxFaturamento(faturamentoMensal);

// Calcular média mensal de faturamento
const mediaMensal = calcularMediaMensal(faturamentoMensal);

// Contar o número de dias em que o faturamento diário foi superior à média mensal
const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamentoMensal, mediaMensal);

// Exibir resultados
console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
*/




/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836, 43
RJ – R$36.678, 66
MG – R$29.229, 88
ES – R$27.165, 48
Outros – R$19.849, 53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/

/*RESPOSTA
// Definindo os valores de faturamento de cada estado
let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;

// Calculando o total mensal da distribuidora
let totalMensal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculando o percentual de representação de cada estado
let percentualSP = (faturamentoSP / totalMensal) * 100;
let percentualRJ = (faturamentoRJ / totalMensal) * 100;
let percentualMG = (faturamentoMG / totalMensal) * 100;
let percentualES = (faturamentoES / totalMensal) * 100;
let percentualOutros = (faturamentoOutros / totalMensal) * 100;

// Exibindo os resultados
console.log("Percentual de representação por estado:");
console.log("SP:", percentualSP.toFixed(2) + "%");
console.log("RJ:", percentualRJ.toFixed(2) + "%");
console.log("MG:", percentualMG.toFixed(2) + "%");
console.log("ES:", percentualES.toFixed(2) + "%");
console.log("Outros:", percentualOutros.toFixed(2) + "%");
*/



 
/*5) Escreva um programa que inverta os caracteres de um string.
    IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

/*RESPOSTA
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
*/


