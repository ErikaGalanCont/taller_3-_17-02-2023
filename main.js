
let num1 = Number(prompt("Ingresa el primer numero"));
let num2 = Number(prompt("Ingresa el segundo numero"));

if(num1>num2){
    console.log("El numero " + num1 + " es mayor que el " + num2 );
}else if(num2<num1){
    console.log("El numero " + num2 + " es mayor que el " + num1 );
}else{
    console.log("Los numeros son iguales");
}