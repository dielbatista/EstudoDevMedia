var colecao_objetos = [
    {id: 1, sorte: "Voce tera um bom dia hoje", nome: "biscoito  dia de sorte"},
    {id: 2, sorte: "Voce tera muito dinheiro", nome: "biscoito de sorte"},
    {id: 3, sorte: "Voce ira ganhar um premio", nome: "biscoito premiado"},
    {id: 4, sorte: "Voce tera vai receber uma boa noticia", nome: "Noticia Biscoito "},
    {id: 5, sorte: "Voce ira receber uma má noticia", nome: "biscoito de azar"},
]

let tamanho_colecao = colecao_objetos.length

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao)

/**
 * gera um número aleatório inteiro entre 0 e o tamanho da coleção menos 1. Se a coleção tiver 5 elementos, então o código gerará um número aleatório entre 0 e 4.

Então, as possíveis saídas seriam:

    0
    1
    2
    3
    4

Portanto, existem 5 possibilidades distintas. Cada uma delas representa um índice diferente dentro do array.
 */

console.log(numero_sorteado)

console.log(colecao_objetos.length)
//Acessando tamanho da Colecao 