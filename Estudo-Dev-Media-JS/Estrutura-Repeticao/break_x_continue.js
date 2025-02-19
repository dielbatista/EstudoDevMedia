/**
 * Abaixo faremos a comparação entre um bloco while + break e o while + continue
 */

let alunos = [
    { id: 1, nome: "Junior", media: 6.9 },
    { id: 2, nome: "Rafael", media: 7.1 },
    { id: 3, nome: "Jonas", media: 8 }
]
let i = 0
let aprovado = false   
while(i < alunos.length){
    let aluno = alunos[i]
    i++

    if(aluno.media < 7){
        continue;
    }
    console.log(`ID: ${aluno.id}`)
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Media: ${aluno.media}`)
    console.log(`\n`)
}
/**
 * Acima Percebemos que com o comando continue, o array é percorrido e continua imprimindo apenas o aluno que tem media > 7
 */

let produtos = [
    {id: 1, nome: 'Teclado', estoque: 0},
    {id: 1, nome: 'Mouse', estoque: 2},
    {id: 1, nome: 'Monitor', estoque: 0},
    {id: 1, nome: 'Cabo-HDMI', estoque: 0}
]
let ii = 0
let temEstoque = false

while(ii < produtos.length){
    if(produtos.length > 1){
        console.log(`O seguinte produto foi encontrado${produtos[i].nome}`)
        temEstoque = true
        break
    }
    ii++
}
if(!temEstoque){
    console.log(`Desculpe nenhum produto foi encontrado!.`)
}/**
Ja no caso do Break, assim que o produto foi encontrado, o break é interrompido e sai-se do looping assim tornando a operação truty*/