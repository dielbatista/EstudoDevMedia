const readlineSync = require("readline-sync");

let colecao_materias = [
  { id: 1, nome: "Portugues" },
  { id: 2, nome: "Matematica" },
  { id: 3, nome: "Historia" },
  { id: 4, nome: "Geografia" },
];

console.log("1 - Portugues");
console.log("2 - Matematica");
console.log("3 - Historia");
console.log("4 - Geografia");

let escolha_materia = readlineSync.question(
  "\n Informe a Materia que deseja escolher"
);
console.log(
  `Voce Escolheu a Materia ${colecao_materias[escolha_materia].nome}`
);
