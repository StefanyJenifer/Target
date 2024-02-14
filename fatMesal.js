const prompt = require('prompt-sync')()
/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836, 43
RJ – R$36.678, 66
MG – R$29.229, 88
ES – R$27.165, 48
Outros – R$19.849, 53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.*/


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

