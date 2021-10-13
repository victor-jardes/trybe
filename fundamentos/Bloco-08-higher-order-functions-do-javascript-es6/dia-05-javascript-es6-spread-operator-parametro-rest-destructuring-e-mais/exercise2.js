// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((acc,crr) => {
    return acc +crr
},0 )
console.log(sum(4, 6))