let materias = [
  { id: 1, nome: "Matematica", nota: 6.3 },
  { id: 2, nome: "ciencias", nota: 6.9 },
  { id: 3, nome: "Ingles", nota: 7.2 },
  { id: 4, nome: "Portugues", nota: 6.5 },
];

let soma_notas = 0;
let quantidade_notas = materias.length;
for (let i = 0; i < quantidade_notas; i++) {
  soma_notas += materias[i].nota; //equivalente a soma_notas = soma_notas + materias[i].nota
}
let media = soma_notas / quantidade_notas;

if (media >= 7) {
  console.log(`Aluno Aprovado com a media ${media}`);
} else {
  console.log(`Aluno reprovado com a media ${media}`);
}
