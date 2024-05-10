var curiosidades_pokemon = [
    { pokemon: "Kabuto", curiosidade: "Pokemon regenerado a partir de um fossil" },
    { pokemon: "Electabuzz", curiosidade: "Possui seis dedos em cada mão" },
    { pokemon: "Ekans", curiosidade: "Seu nome ao contrario significa cobra em ingles" },
    { pokemon: "Dragonite", curiosidade: "Pode voar duas vezes a velocidade do som" },
    { pokemon: "Magikarp", curiosidade: "Pula montanha facilmente" },
    { pokemon: "Taillow", curiosidade: "Voa mais de 180 milhas por dia" },
    { pokemon: "Muk", curiosidade: "Uma gota desse pokemon pode poluir um lago inteiro" },
    { pokemon: "Slowbro", curiosidade: "Unico pokemon que pode voltar a evolucao anterior" },
    { pokemon: "Zapdos", curiosidade: "Tem maior vantagem de tipo entre s passaros lendarios" },
    { pokemon: "Spoink", curiosidade: "Esse pokemon nunca para de pular" }
]

var tamanho_colecao = curiosidades_pokemon.length; //References the Array length 

var numero_sorteado = Math.floor(Math.random() * tamanho_colecao) //Random a Number to array

/**A proxima variavel recebe uma explicacao muito importante
 * a variaveo pokemon escolhido, vai receber todo o array "curiosidades_pokemon"
 * porém a sacada é na hora de atribuir o nome ao numero sorteado
 * precisamos atribuir o numero sorteado como indice para a variavel em questão, fazendo assim que o numero sorteado 
 * receba o um indice de dentro da colecao de objetos para assim selecionar as proprieadades a ela atribuida.
 */
var pokemon_escolhido
    = curiosidades_pokemon[numero_sorteado]


var nome_pokemon = pokemon_escolhido.pokemon
var curiosidade_pokemon = pokemon_escolhido.curiosidade


console.log("CURIOSIDADES SOBRE O UNIVERSO POKEMON")

console.log(`Pokemon : ${nome_pokemon}`)
console.log(`Curiosidade: ${curiosidade_pokemon}`)