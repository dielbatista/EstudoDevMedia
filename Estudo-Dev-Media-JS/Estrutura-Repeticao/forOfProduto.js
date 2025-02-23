let produtos = [
  { id: 1, nome: "Mouse 19 Btns", preco: 650 },
  { id: 2, nome: "Teclado Mecanico Blue Switch", preco: 240 },
  { id: 3, nome: "Cadeira de Escritorio", preco: 995 },
  { id: 4, nome: "Monitor 144hz 27p.", preco: 1300 },  
  { id: 5, nome: "Microfone - USB", preco: 275 },
];
let percentual_desconto = 5;

for (produto of produtos) {
  let nome_produto = produto.nome;
  let produto_preco = produto.preco;

  let valor_desconto = (produto_preco * percentual_desconto) / 100;
  let novo_preco = produto_preco - valor_desconto;

  console.log(`Nome: ${nome_produto}, Preco: ${novo_preco}`);   
}
