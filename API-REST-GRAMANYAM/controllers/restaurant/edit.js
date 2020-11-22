const restaurantDAO = require('../../models/restaurantDAO')


const edit = async (req, res)=>{ 
    try{
        
        if(req.body.idCliente==req.params.id){
            id = req.params.id;        
            restEdit = await restaurantDAO.edit(id,req.body); 
            res.send(restEdit);
            console.log('Id usuario e Id restaurante iguales');
        }else{
            console.log('Id usuario e Id restaurante diferentes');
            res.status(510).send('No estás autorizado a editar este restaurante');
        }

    }
    catch(err){
        console.log(err)
    }
 }

 module.exports = edit;