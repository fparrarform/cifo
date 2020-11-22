// Exercici 7: Nombres y entrada de datos
// Crea una variable driver1 con el nombre del driver

let driver1 = "Pepito1";

// Imprime "El nombre del driver es XXXX";

console.log(`El nombre del driver es ${driver1}`);

// Crea una variable driver2 and ask the user para el navigator

let driver2 = "Pepito2";


// Imprime "El nombre del navegador es YYYY"

console.log("El nombre del driver es "+driver2);


// Exercici 8: Condicionales
// Dependiendo de quién tenga el nombre más largo is longer, imprime:
// The Driver tiene el nombre más largo, tiene XX caracteres o
// Yo, navegador tengo el nombre más largo, tiene XX caracteres o
// Vaya, ambos nombres son iguales, XX caracteres!!

let nombreLargo = ""
if (driver1.length != driver2.length){
    if (nombreLargo >= driver1){
        nombreLargo = driver1
    }
    else {
        nombreLargo = driver2
    }
    console.log(`${nombreLargo} tiene el nombre más largo y tiene ${nombreLargo.length} caracteres`)

}
else {
    console.log(`Vaya! son igual de largos! Ambos tienen ${driver1.length} caracteres`)
}

// Exercici 9: Bucles
// Imprime todos los caracteres del nombre del driver, separado por un espacio y en mayúsculas ej.: "R A U L"

for (i=0; i<=driver1.length; i++){
    let letra = driver1.charAt(i)
    console.log(letra+'\n');
}

let nombreSeparado=[];
for (y=0; y<=driver1.length; y++){
    let letra = driver1.charAt(y)+" ";
    nombreSeparado.push(letra);
}
console.log(nombreSeparado);

// Imprime el nombre del navigator en order inverso. ej.: "luaR"

// Dependiendo del orden alfabético lexicographic order de las cadenas, imprime:

