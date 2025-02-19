import idadeEleitoral from "readline-sync";

let idade = idadeEleitoral.question("Informe a sua idade: ");

let resultado =
  idade >= 16
    ? "Certo, Prossiga com o cadastro eleitoral"
    : "O eleitor precisa de no minimo 16 anos para prosseguir com o cadastro eleitoral";
console.log(resultado);

/**
 * No exemplo acima efetuamos um curto circuito de 2 condições 1 True e 1 False para verificar a idade definida acima
 */
