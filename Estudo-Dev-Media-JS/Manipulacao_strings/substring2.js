let conteudo = `Neste artigo de JavaScript veremos como utilizar 
  o método substring() para extrair uma sequência de caracteres de uma string.`;
let tamanho = conteudo.length; //recebe o tamanho/quantidade de index´s que existem dentro da string
let resumo = ""; 

if (tamanho > 100) { //checa se o tamanho da variavel resumo que recebeu conteudo é > 100
  resumo = conteudo.substring(0, 89); // faz com que a variavel conteudo receba todos os index do 0 ao 89
  resumo += "...";
}
else{ //se a variavel for menor que 100 vai apenas mostrar todo o conteudo contido na varaivel
    resumo = conteudo
}
console.log(resumo)
