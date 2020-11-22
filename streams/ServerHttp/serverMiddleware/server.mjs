import http from "http";
import qs from "querystring";
import connect from 'connect';
import bodyParser from 'body-parser';

const app = connect();



//   request.setEncoding("utf8");
app.use(bodyParser.urlencoded({extended: false}));
// app.use((request, response, next) =>{
//     request.setEncoding("utf8");
//     next()
// })
app.use((request, response)=>{
        
        response.setHeader('Content-type', 'text/plain');
       
        for (let b in request.body) {
            response.write(b + ' = ' + request.body[b] + "\n");            
          }

           response.end();           
});


app.listen(4000);
http.createServer(app);



//npm init
//npm i express -s
//http://expressjs.com/en/starter/hello-world
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

process.stdout.write("mongo \n")