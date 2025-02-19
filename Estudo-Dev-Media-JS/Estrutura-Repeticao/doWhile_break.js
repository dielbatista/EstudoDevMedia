let funcionarios = [
  { id: 1, nome: "Antonieta", habilitado: false },
  { id: 2, nome: "Marina", habilitado: false },
  { id: 3, nome: "Pedro", habilitado: true },
  { id: 4, nome: "Carlos", habilitado: false },
  { id: 5, nome: "Antonio", habilitado: false },
];

let contador = 0;
let temCnh = false;

do {
  let funcionario = funcionarios[contador];
  if (funcionario.habilitado == true) {
    console.log(`Esse Funcionario possui CNH ${funcionario.nome}`);
    temCnh = true;
    break;
    /*O comando break dentro da estrutura condicional. Caso seja executado
    interrompe todo o laço de repetição*/
  }
  contador++;
} while (contador < funcionarios.length);
if (!temCnh) {
  console.log(`Nenhum funcionario Habilitado encontrado!.`);
}
