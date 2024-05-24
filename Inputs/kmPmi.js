const entradaDados = require('readline-sync');

let mi = entradaDados.question(`Informe a Quantidade de Milhas: `)
let km = mi / 0.62137

console.log(`${mi} Equivale a ${km.toFixed(2)} KM/H`)