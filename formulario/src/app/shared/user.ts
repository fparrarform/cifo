export class User {
    private _id: string; 
    private _username: string;
    private _password: string;

constructor(){    
    this._id = this.uniqueID();
    this._username = '';
    this._password = '';
}

public setId(id){
    this._id = id;
}
public setPassword(pass){
    this._password = pass;
}
public set_username(username){
    this._username = username;
}

public getId(){
    return this._id;
}

public getPassword(){
    return this._password;
}

public getUsername(){
    return this._username
}

private uniqueID() {

    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique;
  }

}
