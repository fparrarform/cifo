import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment' 


@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {

  underConstruction = environment.underConstruction;

  constructor() { }

  ngOnInit() {
  }

}
