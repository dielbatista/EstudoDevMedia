/**
 * O comando continue em uma estrutura while é usado para interromper a iteração atual e pular diretamente para a próxima repetição do loop, sem executar o restante do código dentro do bloco.
Funcionamento:

    O loop while inicia e verifica a condição.
    Se a condição for verdadeira, o código dentro do bloco é executado.
    Quando o comando continue é encontrado, ele faz com que o loop pule o restante do código e volte diretamente para a verificação da condição.
    Se a condição ainda for verdadeira, o loop continua; caso contrário, ele termina.
 */

let alunos = [
  { id: 1, nome: "Junior", media: 6.9 },
  { id: 2, nome: "Rafael", media: 7.1 },
  { id: 3, nome: "Jonas", media: 8 },
  { id: 4, nome: "Fabiana", media: 6.6 },
  { id: 5, nome: "Rosalia", media: 7.5 },
];
let i = 0;
while (i < alunos.length) {
  let aluno = alunos[i];
  i++;

  if(aluno.media < 7){
    continue;
  }
  console.log(`ID: ${aluno.id}`)
  console.log(`Nome: ${aluno.nome}`)
  console.log(`Media: ${aluno.media}`)
  console.log(`\n`)
}
