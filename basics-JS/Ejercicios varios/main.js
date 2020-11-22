/*Programa para comprobar que una letra 
aleatoria está inlcuida en nuestro nombre */

/*Introducir la cadena a comparar */
let cadena=prompt('introduce una cadena')

/*Generamos letra aleatoria*/
let numRandom = Math.floor(Math.random()*123-65)+65; /*Math random genera un valor aleatorio. Se multiplica por el intervalo de ASCII que devuelve letras*/
let letterRandom = String.fromCharCode(numrandom); /*El valor numrandom tiene decimales y no puede convertirse en ASCII.)

/*alert(cadena.includes)*/