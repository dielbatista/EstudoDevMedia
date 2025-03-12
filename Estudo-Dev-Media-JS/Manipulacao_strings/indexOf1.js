let expressao_proibida = "passaporte falso";
let comentario = "Venda de PASSAPORTE FALSO";

comentario = comentario.trim();
comentario = comentario.toLocaleLowerCase();

if (comentario.indexOf(expressao_proibida) > -1) {
  console.log(
    "No seu comentario existem palavras proibidas. Atualize seu comentario e envie novamente!"
  );
} else {
  console.log("Seu comentario foi Aprovado.");
}

console.log(comentario)