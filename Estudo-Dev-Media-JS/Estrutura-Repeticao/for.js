/**
 * O for é uma estrutura de repetição em JavaScript usada quando você 
 * já sabe quantas vezes deseja executar um bloco de código. 
 * Ele é composto por três partes principais dentro dos parênteses:
 *
 *  for (inicialização; condição; incremento) {
    // Código a ser executado
}
 */

let multiplicador = 7;

console.log(`Tabuada de Multiplicação do N: ${multiplicador}`);

for (let contador = 0; contador <= 10; contador++) {
  let resultado = multiplicador * contador;
  console.log(multiplicador + " x " + contador + " = " + resultado);
}
