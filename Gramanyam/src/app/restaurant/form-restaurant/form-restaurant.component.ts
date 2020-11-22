import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/shared/classes/restaurant-class';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { users } from 'src/app/shared/interfaces/users.interface';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-form-restaurant',
  templateUrl: './form-restaurant.component.html',
  styleUrls: ['./form-restaurant.component.css']
})
export class FormRestaurantComponent implements OnInit {

  // @ViewChild(RestaurantComponent, {static: false}) restaurantComponent : RestaurantComponent;
  
  public user: users = {
    name: '',
    direccion : '',
    email: '',
    telefono: '',
    password: '',
    id: '',
  }

  public restaurant : Restaurant = {
    id: "",
    name: "",
    email: "",
    // 'activo': string;    
    direccion: "",
    poblacion: "",
    telefono: "",
    website: "",
    photo: "",
    categoria: "",
    descripcion: ""
  };
  
  mensaje = "";

  constructor(private apiService: ApiService, private router: Router, private authService : AuthService, private activatedRoute : ActivatedRoute) { 
    console.log(this.user.id, this.user + 'consoleLog constructor de this.user')
  }
   
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.user.id = params.id);    
    this.authService.getUser$(this.user.id).subscribe(res => {this.user = res});
    this.restaurant.id = this.user.id;
    // this.restaurant.name = this.user.name;
    // this.restaurant.email = this.user.email;
  }

  addRestaurant(){
    // this.restaurant = Object.assign({}, this.userData);
    this.apiService.addRestaurant$(this.restaurant)
    .subscribe(res => this.router.navigate(['/home']), catchError(error => this.mensaje = error));
    console.log(this.mensaje)
    
  }
}