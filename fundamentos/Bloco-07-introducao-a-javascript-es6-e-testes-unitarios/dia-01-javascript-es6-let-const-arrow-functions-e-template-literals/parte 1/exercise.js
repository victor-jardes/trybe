// faça uma função que retorne o array oddsAndEvens em ordem crescente.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newArray = oddsAndEvens.sort((numb1, numb2) => numb1 - numb2)

console.log(`os numeros${newArray} estão em ordem crescente`);
