let alunos = [
  { id: 1, nome: "Joao", nota: 5.5, aprovado: false },
  { id: 2, nome: "Maria", nota: 5.9, aprovado: false },
  { id: 3, nome: "Paulo", nota: 7, aprovado: true },
  { id: 4, nome: "Jacira", nota: 4, aprovado: false },
  { id: 5, nome: "Ana", nota: 6.9, aprovado: true },
];

for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i];
  if (aluno.nota < 6.5 && aluno.aprovado == false) {
    continue;
  }
  console.log(`Id: ${aluno.id}`);
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Nota: ${aluno.nota}`);
  console.log(`Aprovado: ${aluno.aprovado}`);
  console.log(`\n`);
}
