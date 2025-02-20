let funcionarios = [
  { id: 1, nome: "Antonieta", habilitado: true },
  { id: 2, nome: "Marina", habilitado: false },
  { id: 3, nome: "Pedro", habilitado: false },
  { id: 4, nome: "Carlos", habilitado: false },
  { id: 5, nome: "Antonio", habilitado: false }
];

let contador = 0;
let possuiCNH = false;

while (contador < funcionarios.length) {
  let funcionario = funcionarios[contador];

  if (funcionario.habilitado == true) {
    console.log(`Funcionario Habilitado Encontrado: ${funcionario.nome}`);
    possuiCNH = true;
    break;
  }
  contador++;
}
if (!possuiCNH) {
  console.log("Nenhum Funcionario Encontrado");
}
