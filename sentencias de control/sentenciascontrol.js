"use strict"
console.log("ejercicio if");

let numeroIf=-2;

if (numeroIf<0){
    console.log("numero negativo");
} else if(numeroIf>0){
    console.log("numero positivo");
} else{
    console.log("El numero es 0");
}

console.log("ejercicio  While");
var numeroWhile=0;

while (numeroWhile<3){
    numeroWhile++
    console.log(numeroWhile);
}


console.log("ejercicio Do-While");
do{
    console.log( numeroWhile);
    numeroWhile++
}while(numeroWhile===3);

console.log("ejercicio For");
var numeroFor=0;

for (numeroFor=0;numeroFor<=3;numeroFor++){
   console.log(numeroFor);
}

console.log("ejercicio Switch");

var estacion="otoño";

switch(estacion){
    case "invierno": console.log("Estamos en Invierno");
    break;
    case "otoño" : console.log("Estamos en Otoño");
    break;
    case "primavera" : console.log("Estamos en Primavera");
    break;
    case "verano" : console.log("Estamos en Verano");
    break
    default: console.log("Esta no es una estación del año");
}




