//	Realice un programa que calcule el máximo de N números leídos desde teclado.

let veces = Number(prompt("cuantos numeros vas a ingresar?"));


let numeros = []
for (let i=0; i<veces; i++) { 
    numeros.push (Number(prompt("ingresa el numero")));
}

let mayor = Math.max(...numeros);
console.log(numeros);

// los puntos son para soltar los numeros del arreglo y asi poder sacar el mayor de los numeros

alert ("el mayor de los numeros es " + mayor );