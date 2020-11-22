import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {
  nameInput;
  passInput; 
  placeholders = {
    username: "username",
    userpass: "user pass"
  }
  recibirDatos(usernameField, usernamePass){
    this.nameInput = usernameField.value;
    this.passInput = usernamePass.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
