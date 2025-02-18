let notas = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while (contador < notas.length){
    if(notas[contador] % 2 == 0 ){
        total_pares++
    }
    else{
        total_impares++
    }
    contador++
}

console.log(`O total de numeros impares é ${total_impares}`);
console.log(`O total de numeros pares é ${total_pares}`);
