const create = Student => async(req, res, next)=>{
    try{
        const student = new Student();
        if(!req.body.name)
        throw new Error('error JSON');
            
        Object.assign(student, req.body);

        await student.save();

        res.send(student + 'seguardo en la bd');

    } catch(error){
        throw error;
    }

/* const ana = new Student({
    name: 'ana'
})

const projecto = {
    title: 'Mongoose'
}

ana.projects.push(projecto);
/* // opcionh callback
ana.save((error, student)=>{
    if (error){
        console.log(error)
    } else{
        console.log(student + 'se guardo en la bd')
    }
}) 
// Opcion promesa
ana.save().then(student=>console.log(student + 'se guardo en la bd'))
        .catch(error=>console.log(error));
 */
}
export default create;