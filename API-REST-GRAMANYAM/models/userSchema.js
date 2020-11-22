const mongoose=require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    password: {
        type: String,
        minlength: [8, `no válida. Debe contener 8 o más caracteres, mayúsculas y un simbolo especial.`]
    },
    email: {
        type:String,
        required: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    direccion: String,
    telefono: {
        type: Number,
        min: [600000000, 'no válido'],
        max: [999999999, 'no válido']
    },
})

UserSchema.pre('save', function(next)  {
    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err)
  
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err)
  
        user.password = hash
        next()
      })
    })
  })

module.exports = UserSchema;