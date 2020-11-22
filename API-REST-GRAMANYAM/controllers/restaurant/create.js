restaurantDAO = require('../../models/restaurantDAO.js')

 const create = async (req,res) =>{
     try{
        const restaurant = await restaurantDAO.create(req.body);
        res.send({message: `${restaurant.id}introducido`})
     }
     catch(err){
        res.status(400).send({message: `MENSAJE DE CREATE RESTAURANT ERROR ${err}`});
        console.log(err);
     }
 }

 module.exports = create;