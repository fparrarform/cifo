const mongoose = require('mongoose');
const config = require('../config/config.js')

class MongoManager {
    #config;    
    constructor(url_mongo){
        this.#config = url_mongo;
    }
    getConnectionURL(){
        return this.#config;
    }

    isConnected(){
        mongoose.connection.on('connected',_=> true);
    }
    
    connect () {
        return mongoose.connect(this.getConnectionURL(),
        { useNewUrlParser: true, useUnifiedTopology: true });
      }
    
    disconnect(){
        mongoose.disconnect();
    }
}

module.exports = new MongoManager(config.MONGODB_URI);