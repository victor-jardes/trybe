function maiorPalavra(palavras){
    let maiorPalavra = palavras[0];
    for(indice in palavras) {
        if(maiorPalavra.length < palavras[indice].length){
            maiorPalavra = palavras[indice]
        }
    }
    return maiorPalavra;
}
console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));