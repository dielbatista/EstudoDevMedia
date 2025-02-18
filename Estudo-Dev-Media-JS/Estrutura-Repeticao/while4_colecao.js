let paises = ["Brasil", "Franca", "Italia", "Noruega"];
let contador = 0;

while (contador < paises.length) {
  //Acessa o tamanho do array e verifica se o contador e < que ele
  console.log(paises[contador]); //acessa o array pelo Indice
  contador++;
}

/**
 * Abaixo temos um Exemplo de como ficaria o mesmo exemplo se o uso de estrutura de repeticao
 *
 * let paises = ["Brasil","Franca","Italia","Noruega"]
 * console.log(paises[0])
 * console.log(paises[1])
 * console.log(paises[2])
 * console.log(paises[3])
 *
 * esse modo ficaria impossivel de mostrar todos os paises se fossem um numero infinito de opcoes
 */
