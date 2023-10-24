/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los
tres.
Ejemplo: 

input: 15 , 3, 9
Output: El 15 es el número más grande
*/

const num1 = parseInt(prompt('Ingrese un número'))
const num2 = parseInt(prompt('Ingrese otro número'))
const num3 = parseInt(prompt('Ingrese un tercer número'))

if(num1 > num2 && num1 > num3){ //  Primer número es mayor
  document.write(`El primer número (${num1}) es mayor que el segundo número (${num2}) y que el tercero (${num3}).`);
} else if(num1 === num2 && num1 > num3){  //  Primer y segundo números son mayores
  document.write(`El primer número (${num1}) y el segundo número (${num2}) son mayores que el tercero (${num3}).`);
} else if(num1 === num3 && num1 > num2){  //  Primer y tercer números son mayores
  document.write(`El primer número (${num1}) y el tercer número (${num3}) son mayores que el segundo (${num2}).`);
} else if(num2 > num3){ //  Segundo número es mayor
  document.write(`El segundo número (${num2}) es mayor que el primer número (${num1}) y que el tercero (${num3}).`);
} else if(num2 === num3 && num2 > num1){  //  Segundo y tercer números son mayores
  document.write(`El segundo número (${num2}) y el tercer número (${num3}) son mayores que el primer número (${num1})..`);
} else if(num3 > num2){ //  Tercer número es mayor
  document.write(`El tercer número (${num3}) es mayor que el primer número (${num1}) y que el segundo (${num2}).`);
} else{ //  Los tres números son iguales
  document.write(`Los números ingresados son iguales (${num1}).`)
}