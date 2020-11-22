const userDAO = require('../../models/userDAO')

const register = async (req, res, next)=>{
   try{        
      const user = await userDAO.create(Object.assign({}, req.body));
      res.status(200).send({user: user})
   }
   catch(err){
      res.status(400).send(`${err}`)
   }
}
    
 module.exports = register;