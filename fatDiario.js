const prompt = require('prompt-sync')()
/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
    IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados.Estes dias devem ser ignorados no cálculo da média;
*/

const faturamentoMensal = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 }
];

// Filtrar os valores de faturamento para excluir os dias sem faturamento
const valoresDiarios = faturamentoMensal.map(dia => dia.valor).filter(valor => valor > 0);

// Calcular o menor e o maior valor de faturamento diário
const menorValor = Math.min(...valoresDiarios);
const maiorValor = Math.max(...valoresDiarios);

// Calcular a média mensal
const somaValores = valoresDiarios.reduce((total, valor) => total + valor, 0);
const mediaMensal = somaValores / valoresDiarios.length;

// Contar o número de dias no mês em que o valor de faturamento diário foi superior à média mensal
const diasAcimaDaMedia = valoresDiarios.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento diário:", menorValor);
console.log("Maior valor de faturamento diário:", maiorValor);
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
