let cursos = [
  { nome: "Chinês", preco: 5500, carga_horaria: 300 },
  { nome: "Francês", preco: 1600, carga_horaria: 250 },
  { nome: "Alemão", preco: 4000, carga_horaria: 270 },
  { nome: "Espanhol", preco: 1500, carga_horaria: 160 },
  { nome: "Ingles", preco: 2500, carga_horaria: 290 },
];

for (let curso of cursos) {
  let nome_curso = curso.nome;
  let preco_curso = curso.preco;
  let carga_horaria_curso = curso.carga_horaria

  let preco_hora_curso = preco_curso / carga_horaria_curso

  
  console.log(`Nome do Curso: ${nome_curso}.`)
  console.log(`Carga Horaria do Curso: ${carga_horaria_curso} horas.`)
  console.log(`Preco do Curso: ${preco_curso} R$`)

  if(preco_hora_curso >= 15){
    console.log(`Hora/Aula Superior a 15,00 R$`)
  }else{
    console.log(`Hora/Aula Inferior a 15,00 R$`)
  }
  console.log(`\n`)
}
