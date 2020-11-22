const User = require('./userModel');
const mongo = require('../mongo/MongoManager.js');

class userDAO {

    constructor(){
        mongo.connect();
    }


create(data){

    const user = new User(data);
    return user.save()
}

list(){
    return User.find()
    .lean();
}

checkUser(data){
    
    return User.findOne(data)
    .exec(); 
}
listOne(email){
    
    return User.findOne({email : email})
    .exec();
}
update(id,data){
    return User.findByIdAndUpdate(id,data,{new:true, useFindAndModify:false}).exec();
}

}

module.exports = new userDAO();
