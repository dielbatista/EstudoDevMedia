let nome_1 = "Ricardo";
let nome_2 = "Alana";

nome_1 = nome_1.replace("Ricardo", "Fabio");
nome_2 = nome_2.replace("Alana", "Bianca");

if (nome_1.length > nome_2.length) {
  console.log("O nome 1 é maior");
} else if (nome_1.length < nome_2.length) {
  console.log("O nome 2 é maior");
} else {
  console.log("Os dois nomes tem o mesmo tamanho");
}
