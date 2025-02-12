let encontrado = false
let retorno = encontrado && "Item encontrado"
console.log(retorno)


/**
 * let encontrado = false;: Esta linha declara uma variável chamada encontrado e a inicializa com o valor false. Isso indica que o item não foi encontrado.

 let retorno = encontrado && "Item encontrado";: Aqui está o curto-circuito. O operador && é um operador lógico em JavaScript. 
 Ele retorna o primeiro valor falso encontrado ou o último valor se todos forem verdadeiros. No caso do curto-circuito, se encontrado for false, 
 a expressão inteira será false e o valor de "Item encontrado" não será avaliado. Assim, retorno permanecerá como false. Se encontrado for true, 
 o valor de "Item encontrado" será avaliado e atribuído a retorno.

 console.log(retorno);: Esta linha imprime o valor de retorno no console.

Portanto, se encontrado for false, retorno permanecerá false. Se encontrado for true, retorno será "Item encontrado".
 */

let aprovado = false

aprovado && console.log("Aprovado")


/**
 * curto circuito é um comportament especifico de operadores logicos (&& ||)
 * em uma expressão
 */