let alunos = [
  { id: 1, nome: "Joao", nota: 5.5 },
  { id: 2, nome: "Maria", nota: 5.9 },
  { id: 3, nome: "Paulo", nota: 7 },
  { id: 4, nome: "Jacira", nota: 4 },
  { id: 5, nome: "Ana", nota: 6.5 }
];

let i = 0; 
let media = false;

while (i < alunos.length) { // o inidice percorre o array de alunos
  let aluno_aprovado = alunos[i]; // a variavel aluno_aprovado recebe todos os alunos do array

  if(aluno_aprovado.nota >= 6){ // percorrendo o array e encontrando qual tem a nota Maior ou Igual a 6
    console.log(`Parabéns ${aluno_aprovado.nome}, Voce foi Aprovado!.`)
    media = true
    break
  }
  i++
}
if(!media){
    console.log("Nenhum Aluno foi aprovado!")
}
