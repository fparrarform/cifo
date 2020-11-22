/*ENUNCIADO: 
PROGRAMA: "En qué idioma quieres que te salude?"
USUARIO: 
        - Catalán 
        - Castellano
        - Francés
        - Inglés
SALIDA: - Hola
        - Hola
        - Bonjour
        -Hello

*/

/* OPCION SWITCH*/
/******aquí se añade la función document.write con estructura html y estilo en la salida */

let idioma = prompt("¿En qué idioma quieres que te salude?");
switch (idioma) {
  case "Catalán" || "Castellano":
    document.write('<h1 style="color:red">Hola</h1>');
    break;
  case "Francés":
    document.write('<h1 style="color:blue">Bonjour</h1>');
    break;
  case "Inglés":
    document.write(hello);
    break;
  default:
    document.write("Por favor, introduce un idioma válido");
}

/* OPCIÓN IF REPASAR SINTAXIS*/

let idioma = prompt("¿En qué idioma quieres que te salude?");
let saludo = " "
    if (idioma === "Español");
    saludo="hola"
    else if (idioma==="Inglés");
    saludo="Hello"
    /*(...)*/
    alert(saludo)



