const entradaDados = require('readline-sync')

let nome = entradaDados.question("Digite o nome do Funcionario: ")
let idade = entradaDados.question("Digite a idade do Funcionario: ")
let cargo = entradaDados.question("Digite o cargo do Funcionario: ")

let funcionario = {
    nome: nome,
    idade: idade,
    cargo: cargo
}
//Podemos Usar o Readline-sync como input para definir dados de um object literal, atribuindo na entrada de dados inicial

console.log(`Nome: ${funcionario.nome}`)
console.log(`Idade: ${funcionario.idade}`)
console.log(`cargo: ${funcionario.cargo}`)
