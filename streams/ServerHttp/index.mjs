import fs from 'fs';
import zlib from 'zlib';
import stream from 'stream'

stream.Transform

//Se crean los streams. 

const readStream = 
fs.createReadStream('source.txt');

const writeStream = 
fs.createWriteStream('output.txt.gz');

//Los stream 'siguen' y no ves los datos hasta que te suscribes a uno de sus eventos.
// fs.createReadStream  => Events: 'close' && 'end' ||  "open"   ||   "ready";
// fs.createWriteStream  => Events: 'close'  ||  'open'  || 'ready'
//Puedes asignar una instrucción mediante una llamada a un callback mediante eventEmmitter. 




readStream.on('start', (chunk)=>{
    console.log('Lectura iniciada')
    chunk + "desde aquí no se puede modificar al propio stream";
});

readStream.on('end', ()=>{
    console.log('Lectura finalizada')
});


writeStream.on('close', (chunk) => {
  console.log('Escritura finalizada');
  chunk + "desde aquí no se puede modificar al propio stream"
});


readStream
.pipe(zlib.createGzip())
.pipe(writeStream);

