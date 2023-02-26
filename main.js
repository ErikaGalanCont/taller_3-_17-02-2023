//Realizar un programa que lea N números, calcule y escriba la suma de los pares y el producto de los impares

let veces = Number(prompt("cuantos numeros vas a ingresar?"));


let paresDos = 0
let imparesDos = 1

for (let i=0; i<veces; i++) { 
    let numero = Number(prompt("ingresa el numero"));
    if (numero%2 ==0) {
        paresDos += numero
    }else{
        imparesDos *= numero 
    }
}

console.log(paresDos);
console.log(imparesDos);










