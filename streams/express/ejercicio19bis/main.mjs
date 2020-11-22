import express from 'express';
const app = express();



let credentials = {user : "admin", pwd : "1234" } 


app.use((req, res, next)=>{
    if(req.query !==undefined){
        if(req.query.user === credentials.user && req.query.pwd === credentials.pwd){
            return next();
        }
        // res.statusCode(401)
        res.send('no estás autorizado. Te aplicamos el 155')
    }
})


app.get('/auth', (req, res) =>{
    res.send("esta ruta no está protegida")
})


app.get('/admin', (req, res)=>{
    res.send('estas logado como admin')
})

app.get('/admin/user', (req, res)=>{
    res.send(req.query);
})


app.listen(3000, _=>console.log('listening on 3000'));
