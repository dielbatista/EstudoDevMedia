//A Estrutura de repetição for in(){}, Permite percorrer toda a estrutura de um objeto.

let aluno = {nome: "Joao", idade: 24, genero: "M"}

for(let dados in aluno){
    console.log(aluno[dados])
}