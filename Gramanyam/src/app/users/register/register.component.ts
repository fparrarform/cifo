import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { users } from 'src/app/shared/interfaces/users.interface';
// import { Users } from 'src/app/shared/classes/users-class';
import { Router } from '@angular/router'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: users = {
    name: '',
    direccion : '',
    email: '',
    telefono: '',
    password: '',
    id: this.uniqueID()
  }

  mensajeError: any = '';
  mensajeSuccess: any = '';

  public checkControl = {
    estado: false,
  }


  constructor(private authService: AuthService, private router: Router) {}

  private uniqueID() {    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.', thisMS.toString());
    return unique; }


  ngOnInit() {
  }

  registerUser(){
    // this.restaurant = Object.assign({}, this.userData);
    this.authService.registerUser$(this.user).subscribe(
      response => {
        if(!this.checkControl.estado){
        this.mensajeSuccess = 'Registro completado';
        setTimeout(() => this.router.navigate(['/home']), 3000) ;
        } else
          {
            this.mensajeSuccess = 'Registro completado. Continua registrando restaurante';
          setTimeout(() => this.router.navigate(["/register/restaurant/"+this.user.id]), 3000) ;
          }
      },
    error => this.mensajeError = error);
    }
  }
  //   .addRestaurant$(this.restaurant)
  //   .subscribe(res => {
  //     const id = res.id;
  //     console.log(res);
  //     console.log(id);
  //   })
  // }

