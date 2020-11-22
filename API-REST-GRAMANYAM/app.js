const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const app=express();
const ctrlRestaurantes = require('./controllers/restaurant/index.js');
const ctrlUsers = require('./controllers/user/index.js');
const config=require('./config/config.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) { 
   res.header("Access-Control-Allow-Origin", "https://gramanyam-api.herokuapp.com/"); 
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.use('/', ctrlUsers);
app.use('/', ctrlRestaurantes);


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res)=>{   
      if(err) return console.log(`No se ha podido conectar => ${err}`);
      console.log('Conectado a la base de datos.')  ; 
      })

app.listen(config.PORT, ()=>{
   console.log('API REST corriendo en http localhost:3000');
})
