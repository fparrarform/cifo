import { Component, OnInit, ViewChild } from '@angular/core';
import { Restaurant } from 'src/app/shared/classes/restaurant-class';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { RestaurantComponent } from '../restaurant/restaurant.component';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  // @ViewChild(RestaurantComponent, {static: false}) restaurantComponent : RestaurantComponent;

  public restaurant : any = {
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

  constructor(private apiService: ApiService, private router: Router, private activatedRoute : ActivatedRoute) { }
   

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.restaurant.id = params.id);
    this.apiService.getRestaurant$(this.restaurant.id).subscribe(res => this.restaurant = res);
  }

  editRestaurant(){
    // this.restaurant = Object.assign({}, this.userData);    
    this.apiService.editRestaurant$(this.restaurant.id, this.restaurant)
    .subscribe( res => this.router.navigate(['/home']), catchError(error => this.mensaje = error) );
    console.log(this.mensaje)
    console.log(this.restaurant)

    
  }
}


//res => console.log(res)