import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {tap, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Restaurant } from '../classes/restaurant-class';
import { environment } from '../../../environments/environment'
//
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  API_URL = `${environment.API_URL}restaurantes`;
  constructor(private http: HttpClient) {}



  addRestaurant$(restaurant: Restaurant){
    return this.http.post<Restaurant>(this.API_URL, restaurant)
    .pipe(tap((restaurant: Restaurant) => console.log(`added restaurant: id=${restaurant.id}`)),
    catchError(error => {console.log(error);
                          return throwError(error); }));
  } 
  
  deleteRestaurant$(idRestaurant){
    return this.http.delete(this.API_URL + '/' + idRestaurant);
  }

  editRestaurant$(idRestaurant, Restaurant){
    Restaurant.accessToken=localStorage.accessToken;
    Restaurant.idCliente=localStorage.idCliente;
    return this.http.post(this.API_URL + '/' + idRestaurant, Restaurant)
  }

  getRestaurants$(){
    return this.http.get(this.API_URL);
  }

  getRestaurant$(idRestaurant){
    return this.http.get(this.API_URL + '/' + idRestaurant);
  }

 

}




