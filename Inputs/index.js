const entradaDados = require('readline-sync');

let operacao = entradaDados.question(`Qual operacao deseja fazer: `)

switch (operacao) {
    case '+':
        console.log('\n Voce selecionou operacao de Soma! \n')
        let n1plus = entradaDados.question(`Informe um numero:`)
        let n2plus = entradaDados.question(`Informe outro numero: `)
        let resultado = Number(n1plus) + Number(n2plus)
        console.log(`${n1plus} + ${n2plus} é igual a ${resultado}`)
        break

    case '-':
        console.log('\n Voce selecionou Operacao de Subtracao \n')
        let n1sub = entradaDados.question(`Informe um numero: `)
        let n2sub = entradaDados.question(`Informe outro numero: `)
        let resultadosub = Number(n1sub) - Number(n2sub)
        console.log(`${n1sub} - ${n2sub} é igual à ${resultadosub}`)
        break

    case '/':
        console.log('\n Voce selecionou Operacao de Divisao! \n')
        let n1div = entradaDados.question(`Informe um numero`)
        let n2div = entradaDados.question(`Informe outro numero`)
        let resultadodiv = Number(n1div) / Number(n2div)
        console.log(`${n1div} / ${n2div} é = ${resultadodiv}`)
        break

    case '*':
        console.log('\n Voce selecionou Operacao de multiplicacao \n')
        let n1Mul = entradaDados.question(`Informe um Numero: `)
        let n2Mul = entradaDados.question('Informe outro numero: ')
        let resultadoMul = Number(n1Mul) * Number(n2Mul)
        console.log(`${n1Mul} * ${n2Mul} = ${resultadoMul}`)
        break
    default:
        console.log(`Informe uma operacao correta`)
}