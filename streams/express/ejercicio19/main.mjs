
// Crear un middleware con Express que asocie un método auth a una URI /admin y a las subrutas. De manera que si no se obtiene un usuario y una password determinados en el request de la petición devolver:

// status_code = Not authorized.

// Si se autoriza devolver en /admin mensaje "Estás validado como admin"

// Si entra a /admin/user devolver los datos de usuario y password

// TIP: El usr y pssw enviarlos como key|value desde POSTMAN.


// Donde:

// app es una instancia de express.
// METHOD es un método de solicitud HTTP.
// PATH es una vía de acceso en el servidor.
// HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

import express from 'express'
const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));





// // PARTE CLIENTE
// app.post((request, response)=>{
        
//         response.send({user: 'fparrar', pass: 'test'});
//         next();
      
// })

// app.get('Admin')



let credentials = {user : "admin", pwd : "1234" } 

//PARTE SERVIDOR

app.post('/', (request, response)=>{
    if (request.query.pwd === credentials.pwd){
        response.send("has sido logado como admin");

        
    }
    console.log(request.query.pwd)
})

app.listen(3000, ()=> 
  console.log('Example app listening on port 3000!'));
