/**
 * Da mesma forma que as vezes precisamos remover espaços desnecessarios
 * também podemos preencher as strings com caracteres à mais.
Ex:
 */

//padStart()

let nome = "Antonio";
//console.log(nome) <- Com esse codigo iremos imprimir apenas o Nome
/**
 * mas com o metodo padStart(valor, 'string') podemos adicionar caracteres no inicio da string
 * ex:
 */
console.log(nome.padStart(20, " ")); // Com esse metodo adiciomos 20 caracteres no inicio da variavel nome
//podemos checar com o length
let resultado_nome = nome.padStart(20, " ");
console.log(nome.length); //Tamanho da String original
console.log(resultado_nome.length + nome.length); // Tamanho da String adicionada com padstart

/**O padEnd(valor, 'string') Funciona de forma semelhante, porem para o final da strin*/

let label_nome = "Nome: ";
let valor_nome = "Jorge Luiz";

let label_email = "Email: ";
let valor_email = "jorginho@email.com";

let label_telefone = "Telefone: ";
let valor_telefone = "(99) 9999-9999";
console.log(label_nome.padEnd(25, ".") + valor_nome);
console.log(label_email.padEnd(25, ".")+valor_email)
console.log(label_telefone.padEnd(25, ".")+valor_telefone)
