
let escolhaUmaPeca = "cavalo";
let suaPeca = escolhaUmaPeca.toLowerCase();

if(suaPeca === "torre"){
    console.log(`a peça ${suaPeca} anda em linha reta`)
} else if (suaPeca === "bispo"){
    console.log(`a peça ${suaPeca} anda nas diagonais`)
}else if(suaPeca === "cavalo"){
    console.log(`a peça ${suaPeca} executa o movimento em "L"`)
} else {
    console.log(`[ERRO] peça escolhida invalida`)
}

