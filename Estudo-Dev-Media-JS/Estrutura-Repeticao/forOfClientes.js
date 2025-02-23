let clientes_array = [
  { id: 1, nome: "Mario Siegfried", telefone: "(99)9 9999-9999" },
  { id: 1, nome: "Joaquim Santana", telefone: "(99)9 9999-9999" },
  { id: 1, nome: "Maria de Lurdes", telefone: "(99)9 9999-9999" },
  { id: 1, nome: "Pedro Santos", telefone: "(99)9 9999-9999" },
  { id: 1, nome: "Joao Paulo", telefone: "(99)9 9999-9999" },
];

for (let cliente of clientes_array) {
  let clienteNome = cliente.nome;
  let clienteTel = cliente.telefone;

  console.log(`Nome: ${clienteNome} Telefone:${clienteTel}\n`);
//   console.log(`Telefone: ${clienteTel}\n`);
}
