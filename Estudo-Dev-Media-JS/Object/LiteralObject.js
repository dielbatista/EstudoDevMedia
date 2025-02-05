var aluno_academia = {
    nome: 'Joao',
    id: 9,
    idade: 20,
    peso: 73,
    altura: 1.75
};
var nome_aluno = aluno_academia.nome;
var altura_aluno = aluno_academia.altura;
var peso_aluno = aluno_academia.peso;

var imc_aluno = (peso_aluno / ( altura_aluno * altura_aluno)).toFixed(2);

if(imc_aluno >= 18.5 && imc_aluno <= 25){
    console.log("Voce esta com peso normal");
}
else if(imc_aluno >= 17 && imc_aluno <= 18.4){
    console.log("Voce esta abaixo do peso, (Magreza leve)")
}
else if(imc_aluno >= 25 && imc_aluno <= 29.9){
    console.log("Sobrepeso")
}else if(imc_aluno >= 30 && imc_aluno <= 35.9){
    console.log("Obesidade Grau I")
}

console.log(imc_aluno);