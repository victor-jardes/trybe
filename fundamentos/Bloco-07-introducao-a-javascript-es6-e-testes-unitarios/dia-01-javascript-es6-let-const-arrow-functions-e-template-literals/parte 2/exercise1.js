// 1- Crie uma função que receba um número e retorne seu fatorial.
const factorialNumber = (number) =>{
    let result = 1;
    for(let i = 2; i <= number; i += 1){
      result *= i
    }
    return result
}
console.log(factorialNumber(5))

const factorial = number2 => number2 > 1 ? number2 * factorial(number2 - 1): 1;

console.log(factorial(5))