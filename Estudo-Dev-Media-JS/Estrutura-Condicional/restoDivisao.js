/**
 *     Verificação de Paridade:
        numero % 2 calcula o resto da divisão de numero por 2.
        Para um número par, o resto da divisão por 2 é 0.
        Para um número ímpar, o resto da divisão por 2 é 1.

    A Condição if(numero % 2):
        numero % 2 retorna 0W para números pares e 1 para números ímpares.
        No contexto de uma condição if, 0 é tratado como false e qualquer valor diferente de zero é tratado como true.

Portanto, if(numero % 2) será false para números pares e true para números ímpares. O código atual imprime 'par' para números ímpares e 'impar' para números pares, que é o oposto do desejado.

Correção do Código:
Para corrigir o código, a condição deve verificar se numero % 2 é igual a 0 para identificar números pares corretamente:
 */

let numero = 26

if (numero % 2 == 0) {
    console.log("A checagem deu par")
}
else {
    console.log("A Checagem deu Impar")
}

/**
 * Com essa correção, o código agora verifica corretamente a paridade de numero:

    if (numero % 2 === 0) será true para números pares e false para números ímpares.
    Portanto, 'par' será impresso para números pares e 'impar' será impresso para números ímpares.

Saída Esperada:
Para numero = 26, a saída será:
 */