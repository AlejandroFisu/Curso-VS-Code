console.clear();
let prompt = require("prompt-sync")();
let hasta = prompt("Ingrese un número hasta donde contar: ");
isNaN(hasta) ? hasta = 0 : hasta = Number(hasta);
let contar = 1, valor = 0;
//console.log("valor", 2**2);
console.log(`valor: ${3**3}`);
while (contar <= hasta) {
    valor += contar;
    contar++;
}
console.log(`la suma total es: ${valor}`)

function factorial(numero){
    if (numero === 0){
        return 1;
    }else{
        return factorial(numero-1) * numero;
    }
}
let numero = prompt("Ingrese un \"número\" para calcular su factorial: ");
isNaN(numero) ? numero = 0 : numero = Number(numero);
numero >=0? numero : numero=0;
console.log(`el factorialde ${numero} es : ${factorial(numero)}`)