let estoque = [
  { id: 1, nome: "Galaxy S10", estoque: 0 },
  { id: 2, nome: "Iphone 14", estoque: 3 },
  { id: 3, nome: "Black Berry", estoque: 0 },
  { id: 4, nome: "Xiaomi Redmi", estoque: 0 },
];

let i = 0;
let tem_no_estoque = false;

while (i < estoque.length) {
  let produto = estoque[i];

  if (produto.estoque > 0) {
    console.log(`Produto Disponivel no estoque ${produto.nome}`);
    tem_no_estoque = true;
    break;
  }
  i++
}
if(!tem_no_estoque){
    console.log("Nenhum Produto")
}
