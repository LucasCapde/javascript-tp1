/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el 
mayor.
Ejemplo: 

input: 15 , 3
Output: El 15 es el número más grande
*/

let num1 = prompt('Ingrese un número')
let num2 = prompt('Ingrese otro número')
num1 = parseInt(num1)
num2 = parseInt(num2)

if(num1 > num2){
  document.write('El primer número ingresado (' + num1 + ') es el mayor')
} else if (num1 < num2){
  document.write('El segundo número ingresado (' + num2 + ') es el mayor')
} else{
  document.write('Los números son iguales')
}