import fs from 'fs';

const streamLectura = fs.createReadStream('./input.txt');

streamLectura.on('data', chunk => {
    console.log('he recibido' + chunk.length + 'bytes de datos');
    console.log(chunk.toString())
})