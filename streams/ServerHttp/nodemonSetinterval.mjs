import http from 'http';
import fs from 'fs';

const server = http.createServer();
//mimeType



server.on('request', function(req, res) {

const text = fs.createWriteStream("hola")
  res.writeHead(200, {'Content-Type': 'text/html'});  

let e =0;   

 let intervalo = setInterval(() => { 
    
    e++;
    for (let i=0; i<100; i++){     
      res.write(`${new Date().toString()} <br>`);     
      
    }
    if(e===10){
      clearInterval(intervalo);
      res.end("ACABADO PROCESO");
    }
  }, 1000);
  
  // text
  // .pipe(res)

  // res.end();
  


});


server.listen(4000);