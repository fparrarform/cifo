const mongoose = require('mongoose');
const RestaurantSchema = require('./restaurantSchema.js')


module.exports = mongoose.model("Restaurant", RestaurantSchema);