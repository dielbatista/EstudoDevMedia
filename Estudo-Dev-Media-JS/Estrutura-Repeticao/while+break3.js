let carros = [
  { id: 1, nome: "Kadett", disponivel: false },
  { id: 2, nome: "Omega", disponivel: false },
  { id: 3, nome: "Opala", disponivel: true },
  { id: 4, nome: "Marea", disponivel: false },
  { id: 5, nome: "Civic Hatch", disponivel: false },
];

let i = 0;
let temCarro = false;

while (i < carros.length) {
  let carroDisponivel = carros[i];
  if (carroDisponivel.disponivel == true) {
    console.log(
      `Encontramos um carro disponivel para voce ${carroDisponivel.nome}`
    );
    temCarro = true;
    break;
  }
  i++;
}
if(!temCarro){
    console.log("Infelizmente Nao encontramos um carro para voce")
}
