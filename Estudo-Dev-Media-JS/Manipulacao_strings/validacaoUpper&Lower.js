/**
 * É muito comun usuarios escreverem emails para acesso diferentes do que foram cadastrados
 * para que essa situação não venha a ocorrer e o usuario seja alertado que o email está incorreto
 * é necessario 
 */

let email_cadastrado = "joao123.89@email.com"
let email_acesso = "JOAO123.89email.com"

if(email_acesso.toLowerCase() == email_cadastrado.toLowerCase()){
    console.log("Um Link de cadastro foi enviado para o seu email")
}else{
    console.log("Não foi encontrado esse email em nossos registros")
}
