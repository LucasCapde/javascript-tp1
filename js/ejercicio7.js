/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los
tres.
Ejemplo: 

input: 15 , 3, 9
Output: El 15 es el número más grande
*/

let num1 = prompt('Ingrese un número')
let num2 = prompt('Ingrese otro número')
let num3 = prompt('Ingrese un tercer número')
num1 = parseInt(num1)
num2 = parseInt(num2)
num3 = parseInt(num3)

if(num1 > num2 && num1 > num3){
  document.write('El primer número ingresado (' + num1 + ') es el mayor')
} else if (num2 > num1 && num2 > num3){
  document.write('El segundo número ingresado (' + num2 + ') es el mayor')
} else if (num3 > num1 && num3 > num2){
  document.write('El tercer número ingresado (' + num3 + ') es el mayor')
} else{
  document.write('Los números son iguales')
}