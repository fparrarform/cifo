import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user'

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {
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


// <h1>Segundo formulario</h1>
// <form #formulario>
//     <label>Nombre de usuario:
//         <input type='text' class='form-control'  [placeholder]='placeholders.username'>        
//     </label>
//     <br>
//     <label>Contraseña:
//         <input type='text' class='form-control'  [placeholder]='placeholders.userpass'>        
//     </label>
//     <br>
//     <input type='button' (click)='recibirDatos(formulario);' class='btn btn-primary' #sendButton value='Aceptar'>
// </form>

// <p> {{nameInput}} </p>
