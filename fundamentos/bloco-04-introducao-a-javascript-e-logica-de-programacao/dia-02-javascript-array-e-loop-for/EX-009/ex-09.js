let soma = 0;
let res = []
let div = 0;

for(let index = 0; index < 25; index += 1) {
    soma += 1
    res.push(soma)
}

for(let cont = 0; cont < res.length; cont +=1){
    console.log(res[cont] / 2)
}
