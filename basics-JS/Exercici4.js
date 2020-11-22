/* Exercici 4
Introducir un número mediante prompt()
y devolver en un alert los años que quedan para la jubilación (Establecida en 67).*/

let textointroducido = prompt("Introduce los años que tienes"); 
let edadActual = parseInt(textointroducido);
/* No olvidar el parseInt para convertir el string en numero*/
const EDADJUBILACION = 67;
let anosRestantes = EDADJUBILACION - edadActual;

/* Tratamiento de casuisticas */

if (isNaN(textointroducido)) {
    alert(textointroducido + " No es un número");
} else {
    if (edadActual > EDADJUBILACION) {
        alert("Ya estas jubilado");
    } else {
   

        /* Salida */

        alert(`Te faltan  ${67 - edadActual}  años`);
    }
}