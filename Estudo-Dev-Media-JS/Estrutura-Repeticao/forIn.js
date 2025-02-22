
/**
 * A estrutura de repeticao for in, percorre todas as propriedades de um objeto
 */
let aluno = {
    id: 1,
    name: "Ariel",
    age: 15,
    gender: "M",
    mail: "ariel@mail.com"
  };
  
  for (let dados in aluno) {
      //dados representa a propriedade do objeto que esta sendo iterada
    console.log(aluno[dados]);
  }
  