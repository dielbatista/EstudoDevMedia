const entradaDados = require('readline-sync')

console.log('\n AREA TRIANGULO \n')

let base = entradaDados.question('Informe a base do triangulo em cm : ')

let altura = entradaDados.question('Informe a altura do triangulo em cm : ')

let area = Number(altura * base) / 2

console.log(`A área do triangulo e ${area} cm²`)