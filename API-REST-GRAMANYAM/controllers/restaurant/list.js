const restaurantDAO = require('../../models/restaurantDAO')

const list = async (req, res)=>{
    try{        
        const listRest = await restaurantDAO.list(); 
        res.send(listRest);
         
    }
    catch(error){
        console.log(error)
    }    
 }

 module.exports = list;