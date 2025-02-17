var n1 = 10
var n2 = 15

n1 += n2
console.log(n1 >= n2)

/**
 * no Exemplo acima faz-se uma comparação se n1 é > que n2 após a atribuição feita na linha4
 * a operação irá retornar true
 * pois na linha 4 é feito n1 += n2 o que seria equivalente à (n1 = n1 + n2, ou 10+15 == 25)
 */