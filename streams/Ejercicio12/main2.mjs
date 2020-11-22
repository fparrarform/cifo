// Reescribir el ejercicio anterior utilizando la propiedad stdout en lugar de console.log

// Incorporar una petición mediante stdin para bajar el fichero.

// Combinar la salida por consola con los métodos de la propiedad process.stdin para entrar información por consola.

// Usar la interface readline para los objetos stdin/stdout


import fs from 'fs';
import readline from 'readline';

let respuesta;
const streamLectura = fs.createReadStream('./movieDetails.json');
const answer = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
 
const preguntar = () => {    
   
    answer.question('\n  \n ¿DESEAS DESCARGAR EL ARCHIVO? ESCRIBE <SI> O <NO>', (e)=> {
        respuesta = (e)
        answer.close();
    })
    // process.stdin.on('data', (e)=>{respuesta = process.stdout.write(e)})
}

// process.stdin.on('data', function (chunk) {
//   process.stdout.write('data: ' + chunk);
// });

const descargar = ()=> {
    
    console.log("\n  \n esperando respuesta")
    setTimeout(()=>{
        if (respuesta === "SI"){  
        fs.copyFileSync("./movieDetails.json", "./descarga.json")  
        console.log('archivo descargado')
     }else console.log("descarga cancelada")  },5000)
      
         
    
}


const dataListener = (data)=> {
    /* console.log(data.toString()); */
    process.stdout.write(data.toString());    
    streamLectura.emit('end') 
}



const lectura = () =>{
    new Promise((resolve, reject)=>{
        resolve(streamLectura.on('data', dataListener))
        let error = new Error("no se ha podido descargar")
        reject(error)
    }).then(()=>{streamLectura.on('end', preguntar)})
    .then(()=>{streamLectura.on('end', descargar)})
}

lectura()




;
// streamLectura.on('end', descargar);



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