function arryVerify(numeros){
    let indexMenor = 0;
    for(let index in numeros){
        if(numeros[indexMenor] > numeros[index]){
            indexMenor = index
        }
    }
    return indexMenor;
}


console.log(arryVerify([2, 4, 6, 7, 10, 0, -3]))
