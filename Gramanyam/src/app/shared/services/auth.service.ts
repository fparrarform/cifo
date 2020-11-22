import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../../environments/environment'
import { users } from '../interfaces/users.interface';
import { tap, catchError } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

// import { User } from '../classes/Users-class'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.API_URL;

  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkLog());

  constructor(private http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // registerUser$(user: users){ //es necesario el $?
  //   const url_api ='http://localhost/register';
  //   return console.log(this.http
  //     .post<users>(url_api,{user}, { headers: this.headers }))
  // }

  registerUser$(user: users) {
    const url_api = `${this.API_URL}register`;
    return this.http
      .post<users>(url_api,user)
      .pipe(tap(data => data),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }

  login$(user: users){
    return this.http.post<any>(`${this.API_URL}login`, user)
  }
  setToken(token, idCliente):void{
    localStorage.setItem('accessToken', token);
    localStorage.setItem('isLogged', "true");
    localStorage.setItem('idCliente', idCliente);
    this.isLogged.next(true);
  }

  deleteToken():void{
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLogged', "false");
  }

  checkLog(): boolean{
    if(localStorage.getItem('isLogged')=='true'){
      return true;}
      else {
        return false;
      }

  }
  
  getUser$(idUser){
    return this.http.get(this.API_URL+"users/" + idUser);
  }

}
