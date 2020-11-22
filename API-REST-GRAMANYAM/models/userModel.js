const mongoose = require('mongoose');
const UserSchema = require('./userSchema');

module.exports = mongoose.model("User", UserSchema);