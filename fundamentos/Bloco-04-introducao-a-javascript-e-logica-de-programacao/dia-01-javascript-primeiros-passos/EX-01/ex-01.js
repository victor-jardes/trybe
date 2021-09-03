const a = 10;
const b = 20;
const operador = "%";

switch (operador) {
    case "+":
        if(operador === "+"){
            console.log(a + b)
        }
        break;
    case "-":
        if(operador === "-"){
            console.log(a - b)
        }
        break;
    case "*":
        if(operador === "*"){
            console.log(a * b)
        }
        break;
    case "/":
        if(operador === "/"){
            console.log(a / b )
        }
        break;
    case "%":
        if(operador === "%"){
            console.log(a % b )
        }
        break;
    default:
            console.log("operador não encontrado")
}