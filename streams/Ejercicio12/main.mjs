// Reescribir el ejercicio anterior utilizando la propiedad stdout en lugar de console.log

// Incorporar una petición mediante stdin para bajar el fichero.

// Combinar la salida por consola con los métodos de la propiedad process.stdin para entrar información por consola.

// Usar la interface readline para los objetos stdin/stdout


import fs from 'fs';

let respuesta;

const preguntar = () => {
    console.log('\n  \n ¿DESEAS DESCARGAR EL ARCHIVO? ESCRIBE <SI> O <NO>');
    
}

const descargar = async ()=> {
    let respuesta = process.stdin.on('data', (e)=>{e})
      
    if (respuesta === "YES"){  
        fs.copyFileSync("./movieDetails.json", "./descarga.json")  
     }        
    console.log('ejecutado descargar')
}

const streamLectura = fs.createReadStream('./movieDetails.json');

const dataListener = (data)=> {
    /* console.log(data.toString()); */
    process.stdout.write(data.toString());    
    streamLectura.emit('end') 
}


streamLectura.on('data', dataListener);
streamLectura.on('end', preguntar);


streamLectura.on('end', descargar)



// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function (chunk) {
//   process.stdout.write('data: ' + chunk);
// });
// process.stdin.on('end', function () {
//   process.stdout.write("mongo");
// });




// const error = () => {
//     throw Error;
// }