let notas_trimestrais = [9, 7, 6, 5];
let total_notas = notas_trimestrais.length;
let soma_notas = 0;
for (let nota of notas_trimestrais) {
  soma_notas = soma_notas + nota;
  //   console.log(soma_notas);
}
let media = soma_notas / total_notas;

if (media >= 6.76 && media < 7) {
  console.log("Aprovado");
} else if (media <= 6.75) {
  console.log(`Recuperacao, Média: ${media}`);
} else {
  console.log(`Reprovado, Média: ${media}`);
}
