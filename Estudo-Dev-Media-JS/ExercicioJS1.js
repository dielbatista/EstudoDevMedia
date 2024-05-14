var alunos = [
    { id: 1, nome: "Paulo", idade: 15, turma: "A" },
    { id: 2, nome: "Jose", idade: 14, turma: "B" },
    { id: 3, nome: "Mariana", idade: 12, turma: "C" },
]

var notas = { n1: 7, n2: 6, n3: 8, n4: 9 }

var calculoMediaA1 = (notas.n1 + notas.n2 + notas.n3 + notas.n4) / 4

const aluno1 = alunos[0]
const media_aluno1 = calculoMediaA1

if (media_aluno1 >= 7) {
    console.log(`A media do Aluno${aluno1.nome} foi ${media_aluno1} e Voce foi Aprovado`)
} else {
    console.log(`${aluno1.nome} Voce foi Reprovado, pois a sua media foi de ${media_aluno1}`)
}

