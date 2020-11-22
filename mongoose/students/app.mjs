/* import MongoManager from './mongo/MongoManager.mjs';
import config from './config.mjs';
import {Student} from './model/model.mjs';
import create from './controller/studentCreate.mjs';

const mongo = new MongoManager(config);

mongo.connect(); */

/* const ana = new Student({
    name: 'ana'
})

const projecto = {
    title: 'Mongoose'
}

ana.projects.push(projecto);
// opcionh callback
ana.save((error, student)=>{
    if (error){
        console.log(error)
    } else{
        console.log(student + 'se guardo en la bd')
    }
})
// Opcion promesa
ana.save().then(student=>console.log(student + 'se guardo en la bd'))
        .catch(error=>console.log(error)); */
import express from 'express';
import student from './controllers/studentController.mjs';

const app=express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/student', student);

app.listen(3000,_=>console.log('listen on 3000'));