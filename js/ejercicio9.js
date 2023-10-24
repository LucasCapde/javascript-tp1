/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt('Ingrese una palabra o frase')

for (let i = 0; i < frase.length; i++) {
  if(
    frase.charAt(i) === 'a' || 
    frase.charAt(i) === 'á' || 
    frase.charAt(i) === 'A' || 
    frase.charAt(i) === 'Á' || 
    frase.charAt(i) === 'e' || 
    frase.charAt(i) === 'é' || 
    frase.charAt(i) === 'E' || 
    frase.charAt(i) === 'É' || 
    frase.charAt(i) === 'i' || 
    frase.charAt(i) === 'í' || 
    frase.charAt(i) === 'I' || 
    frase.charAt(i) === 'Í' || 
    frase.charAt(i) === 'o' || 
    frase.charAt(i) === 'ó' || 
    frase.charAt(i) === 'O' || 
    frase.charAt(i) === 'Ó' || 
    frase.charAt(i) === 'u' ||
    frase.charAt(i) === 'ú' ||
    frase.charAt(i) === 'U' ||
    frase.charAt(i) === 'Ú'){
      document.write(frase.charAt(i))
    }
}