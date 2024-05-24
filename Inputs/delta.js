const entradaDados = require('readline-sync');

console.log()
let a = entradaDados.question(`Informe o valor de A:`)
let b = entradaDados.question(`Informe o Valor de B:`)
let c = entradaDados.question(`Informe o Valor de C:`)
let delta = Number(b * b) - Number(4 * a * c)
console.log(`O valor de Delta é =  ${delta}`)