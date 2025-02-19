/**
 * O loop do...while em JavaScript é uma estrutura de repetição que executa um bloco de código pelo menos uma vez e 
 * depois continua a execução enquanto uma condição for verdadeira.

A principal diferença entre do...while e while é que no do...while, 
o bloco de código é executado antes da verificação da condição. Isso garante que o código seja executado pelo menos uma vez, 
mesmo que a condição inicial seja falsa.
 */
let contador = 0;

do {
  console.log(contador); //Enquanto essa condição for verdadeira, o código será executado
  contador++; //o contador precisa ser incrementado para que o loop seja finalizado em algum momento
} while (contador < 5);


/**
 * Estrutura while e do...while existe uma diferença, pois o while se a condição for falsa, não é executado o código da estrutura
 * como mostrado no exemplo abaixo
 */


//while
let contador1 = 0
while(contador1 < 0){
    console.log(contador1)
    contador1++
}
//Nesse Exemplo o bloco nao sera executado, pois a condicao sempre sera falsa

//do...while

let contador2 = 0
do{
    console.log(contador2)
    contador2++
}while(
    contador2 < 0
)
//Ja nesse exemplo mesmo que a condicao inicial seja falsa, ira executar pelo menos 1 vez o bloco
