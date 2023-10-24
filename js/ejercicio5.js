/* 
5.- Escribe un programa de tres líneas que pida un número, pida otro número y 
escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

let num1 = parseInt(prompt('Ingrese un número'))
let num2 = parseInt(prompt('Ingrese otro número (se puede repetir el primero)'))
document.write('El resultado de la suma de ambos números es: ' + (num1 + num2))