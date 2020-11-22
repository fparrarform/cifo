/* Exercici 3
Letter Quizz. Escriu un programa que demani una cadena de text
 i que la compari amb un caràcter generat aleatòriament. 
 Si la cadena contè el caràcter retorna un missatge amb true
  sinò retorna false. */

let texto = prompt("Escribe una frase que contenga la letra secreta");
texto = texto.toUpperCase();

let nascii = Math.floor(Math.random() * 'Z'.charCodeAt() - 'A'.charCodeAt()) + 'A'.charCodeAt(); // 65 - 90 (A-Z)
// let nascii = Math.floor(Math.random() * 26)+65; // 65 - 90 (A-Z)
let caracter = String.fromCharCode(nascii);

if (texto.includes(caracter)) 
    alert("Enhorabuena! Tu frase " + texto + " tiene el caracter secreta" + caracter);
else 
    alert("Tu nombre " + texto + " no tiene letra secreta " + caracter);