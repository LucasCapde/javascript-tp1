/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let num = parseInt(prompt('Ingrese un número'))

if(num % 2 === 0){
  document.write(`El número (${num}) es divisible por 2`)
} else{
  document.write(`El número (${num}) NO es divisible por 2`)
}