let nome = "Eduardo"
nome.length > 0 && console.log(nome)

/**
 * Vamos decompô-la:

    nome.length > 0:
        Esta parte verifica se o comprimento da string nome é maior que 0. A propriedade length retorna o número de caracteres na string. 
        No caso de "Eduardo", nome.length retorna 7, que é maior que 0. Portanto, esta expressão é true.

    && (AND lógico):
        O operador && avalia a expressão à esquerda. Se a expressão à esquerda for true, ele então avalia a expressão à direita. 
        Se a expressão à esquerda for false, ele não avalia a expressão à direita e retorna false imediatamente.
        No JavaScript, este comportamento é conhecido como "short-circuiting".

    console.log(nome):
        Esta parte é a expressão à direita do &&. console.log(nome) imprime o valor de nome no console.

Quando combinamos tudo:

    Se nome.length > 0 for true (o que é, no caso de "Eduardo"), então console.log(nome) será executado.
    Se nome.length fosse 0 (o que significa que nome é uma string vazia ""), a primeira condição seria false, e console.log(nome) não seria executado.

Portanto, a expressão nome.length > 0 && console.log(nome); é uma maneira concisa de dizer "Se a string nome não está vazia, imprima nome no console."

No seu caso, com nome sendo "Eduardo", a saída será:
Eduardo
 */