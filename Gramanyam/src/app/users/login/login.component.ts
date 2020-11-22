import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email : "",
    password : "",
  }
  mensaje: any = ""
  

  constructor(private authService : AuthService, private router : Router) { }
  login(){
    this.authService.login$(this.user).subscribe(
      res => {this.router.navigate(['/home']);
      const token = res.accessToken;
      const idCliente = res.idCliente;
      this.authService.setToken(token, idCliente);      
      // console.log(localStorage.getItem('accesToken'))        
  
  }, error => this.mensaje = error);
    console.log(this.mensaje)    
  }

  ngOnInit() {
  }

}

// {accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…Y2In0.cgJ-RnnL7Xr5aCjwgLM_HLqC88YlxczxMWYUGJ8giP8"}
