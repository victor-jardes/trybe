const maiorPalavra = (
    word) => {
     const verifyWord = word.split(' ');
     let maxLength = 0;
     let result = ''
     for(const key of verifyWord) {
         if(verifyWord.length > maxLength) {
             maxLength = key.length
             result =  key
         }
     }
     return result    
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"))