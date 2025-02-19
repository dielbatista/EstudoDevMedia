let produtosTi = [
  { id: 1, nome: "HD-SSD", estoque: 0 },
  { id: 2, nome: "MEMORIA-RAM", estoque: 0 },
  { id: 3, nome: "FONTE-ALIMENTACAO", estoque: 2 },
  { id: 4, nome: "CABO-HDMI", estoque: 0 },
  { id: 5, nome: "CABO-USB-C", estoque: 0 },
];
let i = 0;
let temEstoque = false;

while (i < produtosTi.length) {
  if (produtosTi.length > 1) {
    console.log(`O seguinte item foi encontrado ${produtosTi[i].nome}`);
    temEstoque = true;
    break;
  }
  i++;
}
if(!temEstoque){
  console.log(`Infelizmente nao temos produto disponivel`)
}