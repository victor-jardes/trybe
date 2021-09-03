function array(numeros) {
    let indexMaior = 0;
    for(let cont in numeros){
        if(numeros[indexMaior] < numeros[cont]){
            indexMaior = cont;
        }
    }
return indexMaior;
}
console.log(array([2, 3, 6, 7, 10, 1]))