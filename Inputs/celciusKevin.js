// const entradaDados = require ('readline-sync')

// console.log("Conversor Celcius to Kevin\n")

// let C = entradaDados.question("Informe o Valor para celcius: ")
// let K = Number(C) + 273.15;

// console.log(`${C} C Equivale a ${K} K`)

const entrada = require('readline-sync')

let celsius = entrada.question("Informe a temperatura em celcius")
let kelvin  = Number(celsius)+ 273.15
console.log(kelvin)