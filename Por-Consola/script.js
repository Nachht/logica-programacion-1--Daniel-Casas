const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingrese el primer numero: "));
let numero2 = Number(prompt("Ingrese el segundo numero: "));
let numero3 = Number(prompt("Ingrese el tercer numero: "));

let mayor;
let centro;
let menor;

if (numero1 === numero2 && numero2 === numero3){

    console.log("Los tres numeros son iguales.");

}
else{

    if (numero1 >= numero2 && numero1 >= numero3){

        mayor = numero1;
    }
    else if (numero2 >= numero1 && numero2 >= numero3){

        mayor = numero2;
    }
    else{

        mayor = numero3;
    }

    if (numero1 <= numero2 && numero1 <= numero3){

        menor = numero1;
    }
    else if (numero2 <= numero1 && numero2 <= numero3){

        menor = numero2;
    }
    else{

        menor = numero3;
    }

    centro = numero1 + numero2 + numero3 - mayor - menor;

    console.log("Mayor a menor:", mayor, centro, menor);
    console.log("Menor a mayor:", menor, centro, mayor);

}