import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLogged = false; 

  constructor(private authservice : AuthService, private router : Router) { }
    noRefresh(event){
    event.preventDefault(); 
  }

  public onLogOut():void{
    this.authservice.deleteToken();
    this.isLogged=false;
    this.router.navigate(['/home']);
  }

  public onCheckUser():void{
    this.authservice.isLogged.subscribe(value => this.isLogged = value );
  }
  
  ngOnInit() {
  this.onCheckUser();
  }

}
