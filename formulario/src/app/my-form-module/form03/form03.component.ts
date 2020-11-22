import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user'

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit {

  public placeholders = {
    username: "Introduce tu nombre de usuario",
    userpass: "Introduce tu contraseña",
  }   
  public user= new User();  

  recibirDatos(event, formulario) {
    event.preventDefault();
    this.user.set_username(formulario[0].value);
    this.user.setPassword(formulario[1].value);
    formulario.reset();
    // passInput; 
  }
  
  constructor() { }

  ngOnInit() {
  }
}
