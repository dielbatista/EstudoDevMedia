const entradaDados = require('readline-sync')

let colecao_smarthphones = [
    {id: 1, nome: 'Galaxy A10'},
    {id: 2, nome: 'Iphone Pro-Max'},
    {id: 3, nome: 'Xiaomi RedMi Note 12'},
    {id: 4, nome: 'Nokia Tijolao'}
]

console.log("1 - Galaxy A10")
console.log("2 - Iphone Pro-Max")
console.log("3 - Xiaomi RedMi Note12")
console.log("4 - Nokia Tijolao")

let smarthphones = entradaDados.question("Informe o Spartphone que Deseja escolher: ")

console.log(`Voce Escolheu o smartPhone ${colecao_smarthphones[smarthphones].nome}`)
