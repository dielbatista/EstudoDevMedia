let funcionarios = [
  { id: 1, nome: "Antonieta", habilitado: false },
  { id: 2, nome: "Marina", habilitado: false },
  { id: 3, nome: "Pedro", habilitado: true },
  { id: 4, nome: "Carlos", habilitado: false },
  { id: 5, nome: "Antonio", habilitado: false },
];
let temCnh = false;

for (let i = 0; i < funcionarios.length; i++) {
  let funcionario = funcionarios[i];
  if (funcionario.habilitado == true) {
    console.log(`Encontramos um funcionario com CNH ${funcionario.nome}`);
    temCnh = true;
    break;
  }
}
if (!temCnh) {
  console.log(`Funcionario Habilitado Não encontrado.`);
}
