let cargo = 'Gerente'
let salario = 2000

switch (cargo) {
    case 'Gerennte':
    case 'Supervisor':
        salario *= 1.10
        break

    default:
        salario *= 1.05
}
console.log(salario)    