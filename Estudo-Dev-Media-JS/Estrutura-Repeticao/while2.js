/**
 * No exemplo abaixo iremos ver uma tabuada usando a estrutura de repetição while
 */

//variaveis definidas
let numero = 3;
let contador = 0;

console.log(`Tabuada de multiplicacao N° - ${numero}`);

//verifica se o contador é menor ou igual a 10
while (contador <= 10) {
  let resultado = numero * contador; //define uma variavel resultado que recebe a multiplicação de contador(3) vezes numero (10)
//porem a multiplicacao ira inicar contando do 0 ao 10
  console.log(`${numero} x ${contador} = ${resultado}`);
  contador++; //incrementa para que o código funcione corretamente
}
