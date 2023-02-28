//Dados dos números enteros positivos N y D, se dice que D es un divisor de N si el resto de dividir N entre D es 0. Se dice que un número N es perfecto si la suma de sus divisores (excluido el propio N) es N. Por ejemplo 28 es perfecto, pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. Hacer un organigrama que dado un número N nos diga si es o no perfecto.

let n = Number(prompt("ingresa un numero entero"));
let sumaDivisores = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
    sumaDivisores += i;
    }
}

if (sumaDivisores === n) {
    console.log(`${n} es un número perfecto`);
} else {
    console.log(`${n} no es un número perfecto`);
}








