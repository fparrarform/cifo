import * as moment from 'moment';

export class FullUser {
    private _id: string;
    private realname :string;
    private singingUpDate :string;
    private email: string;
    private gender: string;
    private upTo18: boolean;
    private _username: string;
    private _password: string;

constructor(){    
    this._id = this.uniqueID();
    this._username = '';
    this._password = '';
    this.realname = '';
    this.singingUpDate = moment().format("MMM Do YY"); ;
    this.email = '';
    this.gender = '';
    this.upTo18 = false;
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
