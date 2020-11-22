//Leer el fichero movieDetails.json y mostrar el contenido por consola. Asociar listeners a cada uno de los eventos: data, end, error

import fs from 'fs';

const streamLectura = fs.createReadStream('./movieDetails.json');

const dataListener = (data)=> {
    console.log(data.toString());
    streamLectura.emit(end) 
}

const end = () => {
    console.log('END OF DATA')
}

const error = () => {
    throw Error;
}

streamLectura.on('data', dataListener)

