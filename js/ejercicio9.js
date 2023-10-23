/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt('Ingrese una palabra o frase')

let vocales = frase.match(/[aeiou]/ig).join("")
document.write(vocales)