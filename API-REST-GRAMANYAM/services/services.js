const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config.js')


const generateAccesToken = (user)=>{  
  const payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix() //
  }
  return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      
      resolve(payload.sub)
    } catch(err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      })
      if(err.message='Token expired'){console.log('Ei que el token te ha expirado...')};
    }
  })
  
  return decoded
}

module.exports = {
  generateAccesToken,
  decodeToken 
}

