const entradaDados = require('readline-sync')
console.log("Conversor C° - F°")

let celcius = entradaDados.question("Informe o Valor em Celcius: ")
//let fahrenheit = entradaDados.question("Informe o Valor em Fahrenheit: ")
let resultado = Number(celcius)
resultado = Number(celcius * 1.8) + 32  
console.log(resultado.toFixed(2))