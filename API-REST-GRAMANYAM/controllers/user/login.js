const userDao = require('../../models/userDAO.js');
const {generateAccesToken} = require('../../services/services.js');
const bcrypt = require('bcrypt');

const login = async (req, res)=>{

  function loginOk(){
    let token=generateAccesToken(userLogin.id);
    res.send({message: 'Logueado', accessToken:token, idCliente:userLogin.id})
  }
  
  function loginMal(){
    res.status(510).send("Password erroneo");
  }

  try{
    userLogin = await userDao.listOne(req.body.email);
    
    if(userLogin==null){
      res.status(400).send("Usuario no existe") 
    } 
        
    bcrypt.compare(req.body.password, userLogin.password, function(err, res){
      if(err) console.log(err.message);
      if(res){
        loginOk();
      }else{
        loginMal();
      }
    })
  }
  catch(err){
    console.log(err.message);
  }
}
module.exports = login;