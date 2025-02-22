let carro = { nome: "Marea", marca: "Fiat", preco: 5000, ano: 1999 };
let percentual_desconto = 5;
for (let propriedade in carro) {
  if (propriedade == "preco") {
    let preco = propriedade;

    let desconto = (carro[preco] * percentual_desconto) / 100;
    let novo_preco = carro[preco] - desconto

    console.log(`O novo preco do carro é ${novo_preco}`)
  }else{
    console.log(`${propriedade} :  ${carro[propriedade]}`)
  }
}
