const nota = 50;

if(nota <0 || nota > 100 ) {
    console.log("[ERRO] não foi possivel ferificar")
} else if(nota >=90){
    console.log("sua nota é A")
} else if (nota >= 80){
    console.log("Sua nota e B")
} else if(nota >=70){
    console.log("Sua nota e C ")
} else if(nota >= 60) {
    console.log("sua nota e D")
} else if (nota >= 50){
    console.log("sua nota e E")
} else if (nota < 50){
    console.log("sua nota e F")
} else {
    console.log("impossivel verificar a nota")
}