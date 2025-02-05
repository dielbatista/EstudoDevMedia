// let materias = [
//     { id: 1, materia: "Matematica", media_minima: 7 },
//     { id: 2, materia: "Portugues", media_minima: 7 },
//     { id: 3, materia: "Ciecias", media_minima: 7 },
//     { id: 4, materia: "Ingles", media_minima: 7 }
// ]

let notas_matematica = { n1: 6.6, n2: 9, n3: 8, n4: 7.5 }
let notas_portugues = { n1: 9, n2: 7.5, n3: 8, n4: 7.7 }
let notas_ciencias = { n1: 6.6, n2: 5.8, n3: 8.3, n4: 7 }
let notas_inges = { n1: 6.5, n2: 7.8, n3: 5, n4: 0.5 }

let media_matematica = (notas_matematica.n1 + notas_matematica.n2 + notas_matematica.n3 + notas_matematica.n4) / 4
let media_portugues = (notas_portugues.n1 + notas_portugues.n2 + notas_portugues.n3 + notas_portugues.n4) / 4
let media_ciencias = (notas_ciencias.n1 + notas_ciencias.n2 + notas_ciencias.n3 + notas_ciencias.n4) / 4
let media_ingles = (notas_inges.n1 + notas_inges.n2 + notas_inges.n3 + notas_inges.n4) / 4

const media_geral = (media_ciencias + media_portugues + media_ciencias + media_ingles) / 4

const aluno = {
    nome: "Francisco",
    idade: 16,
    turma: "B",
    serie: 9,
    media_geral: media_geral.toFixed(1)
}


if (media_geral >= 7.5 && media_geral <= 10) {
    console.log(`Parabéns ${aluno.nome}, Voce foi APROVADO!, sua media foi ${media_geral.toFixed(1)}`)
}
else if (media_geral >= 7 && media_geral <= 7.4) {
    console.log(`Atenção ${aluno.nome}, Voce ficou de RECUPERACAO, sua media foi ${media_geral.toFixed(1)}`)
}
else {
    console.log(`${aluno.nome} Voce foi Reprovado, sua media foi ${media_geral.toFixed(1)}`)
}




// console.log(media_geral.toFixed(1))

