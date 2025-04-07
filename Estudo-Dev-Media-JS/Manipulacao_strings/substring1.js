/**
 * substring(), é um metodo nativo do javascript que permite
 * extrair partes de uma string
 * exemplo:
*/
let txt1 = "Eu sou programador javascript"
let resultado = txt1.substring(7, 18)// O metodo funciona por index da string(7 == ao espaço antes do (p), 18 == ao (r), da palavra programador)
console.log(resultado)
//resultado == programador


let nomes = "Mateus Ana Lúcia Otávio";

console.log(nomes.substring(0, 6))
console.log(nomes.substring(11, 16))