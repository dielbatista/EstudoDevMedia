const entradaDados = require('readline-sync')
console.log("Calc")
let x = entradaDados.question("Informe um numero para x: ")
let y = entradaDados.question("Informe um numero para y: ")

let resultado = Number(x) * Number(y)
console.log(`a multiplicacao entre x e y e = a ${resultado}`)
