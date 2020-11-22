const Restaurant = require('./restaurantModel')
const mongo = require('../mongo/MongoManager.js');


class restaurantDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const restaurant = new Restaurant(data);
    return restaurant.save()
}

list(){
    return Restaurant.find({})
;
}

listOne(id){
    
    return Restaurant.findOne({id:id})
    .exec();
}

edit(id,data){
    return Restaurant.findOneAndUpdate({id:id},data,{new:true, useFindAndModify:false}).exec();
}

}

module.exports = new restaurantDAO();
