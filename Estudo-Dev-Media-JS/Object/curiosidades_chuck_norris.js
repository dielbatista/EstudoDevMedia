var curiosidades_chuck_norris = [
  {
    titulo: "Cuidados com a higiene bucal",
    curiosidade: "Chuck Norris usa arame farpado como fio dental",
  },
  {
    titulo: "Fórmulas para maratonar séries",
    curiosidade:
      "Chuck Norris pode assistir um episódio de 60 segundos em 22 segundos.",
  },
  {
    titulo: "Suicida que não morre",
    curiosidade: "Chuck Norris foi homem bomba 34 vezes.",
  },
  {
    titulo: "Olho que veem tudo",
    curiosidade: "Chuck Norris ja viu o homem invisivel.",
  },
  {
    titulo: "Manipulando o tempo",
    curiosidade: "Chuck Norris não usa relógio, ele decide que horas são.",
  },
  {
    titulo: "Praticando esportes radicais",
    curiosidade: "Chuck Norris faz bungee jump sem corda.",
  },
  {
    titulo: "Não vale chorar",
    curiosidade: "Chuck Norris faz as cebolas chorarem.",
  },
  {
    titulo: "Tempero de fogo",
    curiosidade: "Chuck Norris usa pólvora como tempero.",
  },
  {
    titulo: "Extinção dos dinossauros",
    curiosidade: "Chuck Norris encarou os dinossauros uma vez, apenas uma.",
  },
  {
    titulo: "Contando sem parar",
    curiosidade: "Chuck Norris contou até o infinito, Duas vezes",
  },
];

var tamanho_colecao = curiosidades_chuck_norris.length;

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

var curiosidade_escolhida = curiosidades_chuck_norris[numero_sorteado];

var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.curiosidade;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Titulo: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);
