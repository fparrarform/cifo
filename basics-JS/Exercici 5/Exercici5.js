/* Exercici 5
Bartender. Crear un programa para que el usuario introduzca una bebida 
(leche, coca-cola, cerveza) y la edad. 

El programa devolverá:

Si es mayor de 18 puede beber las tres bebidas: "OK toma tu bebida"
Si es mayor de 14 y menor de 18 y pide coca-cola y leche: "Ok toma tu bebida" si pide cerveza: "Lo siento eres pequeño"
Si es igual o menor de 14 sólo puede beber leche.
*/

let pedidoBebida = prompt("¿Qué quieres tomar? Tenemos leche, coca-cola y cerveza");
let mensajepositivo = "Aqui tienes. Que te aproveche tu ";
let mensajenegativo ="Lo siento, no tienes la edad. No puedo servirte "
let edadCliente = 1;
let bebidas= ["coca-cola", "cerveza", "leche"];

function comprobacionEdad(){
    let textoEdadCliente = prompt("Espera...¿Qué edad tienes?");
    while (isNaN(textoEdadCliente)) {
            alert("¿Cómo dices? Vamos a volverlo a intentar");
            textoEdadCliente=prompt("Espera...¿Qué edad tienes?");
        }    
    let edadCliente =parseInt(textoEdadCliente);
    if (edadCliente >= 18) {
        alert (mensajepositivo+pedidoBebida);}
    else if (edadCliente >= 14 && pedidoBebida == "coca-cola") {
            alert (mensajepositivo+pedidoBebida);
            }
        else {
            alert (mensajenegativo+pedidoBebida);
        }
    }

function validacion() {
    if (bebidas.includes(pedidoBebida) && pedidoBebida!="leche"){
        comprobacionEdad();        
    }
    else if (pedidoBebida=="leche"){
        alert(mensajepositivo+pedidoBebida)
    }
    else {
            alert ("¡Ey! Creo que eso no lo vas a encontrar aquí...");
    }    
}

validacion();


    // if (pedidoBebida == "leche"){
    //     alert (mensajepositivo+pedidoBebida)
    // } 
    // else if (pedidoBebida == "coca-cola" || "cerveza") {
    //     let textoEdadCliente = prompt("¿Qué edad tienes?");
    //     if (isNaN(textoEdadCliente)) {
    //         alert("¿Cómo dices? Vamos a volverlo a intentar");}
    //         else {
    //         let edadCliente =parseInt(textoEdadCliente);
    //     }




    // if (edadCliente >= 18) {
    //     alert (mensajepositivo+pedidoBebida);}
    // else if (edadCliente <= 14) {
    //     if (pedidoBebida == "coca-cola" || "cerveza") {
    //         alert (mensajepositivo+pedidoBebida)
    //         }    
    //     }
    // else {
    //         alert ("no puedo servirte tu bebida");
    //       }
    //  }


