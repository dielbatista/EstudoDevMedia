var nota = 7.1
var status = nota > 7 ? "aprovado" : "reprovado";

/**
 * uma forma simplificada de escrever uma condicao ifelse que possui 2 condicoes apenas
 * nota verifica se é > 7 ? é a condicao if : é a condicao else
 * o codigo acima seria tambem escrito da dessa forma
 * 
 * var status = ""
        if(nota > 7){
          status = "Aprovado"
        }
        else{
            status = "reprovado"
        }
*/

console.log(status)

//outro exemplo de if ternario

let dia_semana = 5 //informa um dia para a semana
let status_loja = //informa um status para a loja verificando se o dia da semana é sabado ou domingo
    (dia_semana == 0 || dia_semana == 6)
        ? "Funciomaos so ate segunda feira" //Condicao if verificando se o dia da semana é 0 ou 6
        : "Loja Aberta" // condicao else recebendo o dia da semana atual 5
console.log(status_loja) // imprimindo o status da loja