/**
 * - Crie um array com o nome "notas_aluno" para armazenar as notas do aluno (utilize "var");
- Crie uma variável com o nome "total_notas" para armazenar o total de itens contidas no array (utilize a propriedade length);
- Crie um variável com o nome "soma_notas" que vai receber a soma de todas as notas contidas no array;
- Crie uma variável com o nome "media_aluno" que vai receber a divisão da soma das notas pelo total de notas;
- No fim, imprima a média do aluno.

OBS.: Crie todas as variáveis com "var"
 */
var notas_aluno = [9.5, 4, 5, 7.9] 

var total_notas = notas_aluno.length

var soma_notas = notas_aluno[0] + notas_aluno[1] + notas_aluno[2] + notas_aluno[3]
var media_aluno = soma_notas / total_notas

console.log(`A media do Aluno é ${media_aluno}`)