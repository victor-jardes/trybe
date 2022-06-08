const angA = 61;
const angB = 60;
const angC = 60;

if(angA < 0 || angB < 0 || angC < 0){
    console.log("coloque um valor positivo nos angulos")
}else if(angA + angB + angC === 180){
    console.log(true + ", é um triangulo")
} else {
    console.log(false + ", desculpe mas não é um triangulo")
}

