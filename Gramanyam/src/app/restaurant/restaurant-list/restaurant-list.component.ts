import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
//import { Restaurant } from 'src/app/shared/classes/restaurant-class';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

    public restaurants: any;
    public photos = [
      {"photo1" : "http://lorempixel.com/320/240/food/4"},
      {"photo1" : "http://lorempixel.com/320/240/food/1"},
      {"photo1" : "http://lorempixel.com/320/240/food/3"},
      {"photo1" : "http://lorempixel.com/320/240/food/8"},
    ]
     
    constructor(private api: ApiService, private router: ActivatedRoute) {}

   getRestaurants(){
     this.api.getRestaurants$().subscribe(response => {console.log(response); this.restaurants = response})
   }
  

  //  randomPhoto(){
  //   let number = Math.floor(Math.random() * 10);      
  //   return "http://lorempixel.com/320/240/food/"+number;
     
  //  }


    ngOnInit() {
      this.getRestaurants();
    }

  }
