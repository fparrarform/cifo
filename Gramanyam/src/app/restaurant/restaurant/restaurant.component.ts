import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  public identifier: any;
  public restaurant: any = '';
  public photos = [
    {"photo1" : "http://lorempixel.com/320/240/food/4"},
    {"photo1" : "http://lorempixel.com/320/240/food/1"},
    {"photo1" : "http://lorempixel.com/320/240/food/3"},
    {"photo1" : "http://lorempixel.com/320/240/food/8"},
  ]   
   


  constructor(private api: ApiService, private router: ActivatedRoute) { }

  getRestaurant() {
    this.router.params.subscribe(params => this.identifier = params.id);
    this.api.getRestaurant$(this.identifier).subscribe(res => this.restaurant = res);
 }


  ngOnInit() {
    this.getRestaurant();
  }

}
