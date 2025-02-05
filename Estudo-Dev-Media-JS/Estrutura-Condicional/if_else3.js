/**
 * no exemplo a seguir, iremos verificar uma curiosidade a respeito do operador de == 
 * numa condicao if else
 */

let x = "";
let y = 0;

if (x == y) {
    console.log("x e y sao iguais")
} else {
    console.log("x e y nao sao iguais")
}
/**
 * Neste exemplo, x é uma string vazia ("") e y é um número inteiro (0). 
 * pesar de serem tipos de dados diferentes (string e número), 
 * a linguagem JavaScript faz uma conversão automática de tipos 
 * (correção de tipo) durante a comparação usando ==.
 * Isso ocorre devido à coerção de tipo automática em JavaScript, que tenta converter 
 * os valores para um tipo comum durante a comparação. 
 * Porém, é importante observar que em muitos casos é preferível usar o operador ===, que verifica igualdade estrita, 
 * comparando não apenas os valores, mas também os tipos de dados.
 * 
 * Porém, é importante observar que em muitos casos é preferível usar o operador ===, 
 * que verifica igualdade estrita, comparando não apenas os valores, mas também os tipos de dados.
 * 
 * ficaria
 * if(x === y)....
 */

//para um exemplo de igualdade estrita temos o seguinte script

let z = 10
let v = "10"

if (z === v) {
    console.log("z e v sao iguais")
}else{
    console.log("z e v sao diferentes")
}
/**
 * vemos que ao usar o operador de === (igualdade Estrita)
 * verificamos nao so os valores mais tambem o tipo de dado que esta sendo checado
 */