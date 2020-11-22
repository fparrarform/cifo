const restaurantDAO = require('../../models/restaurantDAO')


const listOne = async (req, res)=>{
   try{
      let restaurantID = req.params.id;       
      listoneRest = await restaurantDAO.listOne(restaurantID);
      res.send(listoneRest);
   }
   catch(err){
      console.log(err);
   }
 }

module.exports = listOne;