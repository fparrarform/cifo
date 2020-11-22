const services = require('../services/services.js')

function isAuth (req, res, next) {
  if (!req.body.accessToken) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  const token = req.body.accessToken;

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

 module.exports = isAuth;


