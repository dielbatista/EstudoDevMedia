// import entradaDados from "readline-sync";
const entradaDados = require('readline-sync')

console.log(`Aplicação Juros \n`);

let valorDivida = entradaDados.question("Informe Qual o valor Devido?: ");
let diasAtraso = entradaDados.question(
  "Informe quantos dias passaram desde o vencimento do boleto: "
);

valorDivida = Number(valorDivida);
diasAtraso = Number(diasAtraso);

let juros = 10;
// if (diasAtraso <= 15) {
//   juros = 5;
// } else if (diasAtraso > 15) {
//   juros = 10;
// }
let totalJuros = (valorDivida / 100) * juros;
let totalDivida = valorDivida + totalJuros;

console.log(`valor da Divida Original: ${valorDivida}`);
console.log(`Dias Atrasados: ${diasAtraso}`);
console.log(`Taxa de Juros ${juros}`);
console.log(`Valor total com Juros${totalDivida}`);

let valor_divida = 100;
let valor_juros = 10;

let valorJuros = (valor_divida / 100) * valor_juros;

let total_divida = valor_divida + valorJuros;

console.log(total_divida);
