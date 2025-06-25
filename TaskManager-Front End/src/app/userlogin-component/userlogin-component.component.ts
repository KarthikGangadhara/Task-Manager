import { booleanAttribute, Component } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './userlogin-component.component.html',
  styleUrl: './userlogin-component.component.css'
})


export class UserloginComponentComponent {
  userName: string = '';
  password: string = '';
  errorMessage:string='';
  showSignup = false;
  showLogin=true;

  constructor(
    private userloginService: UserloginService,
    private router:Router
  ) {}

  onSubmit() {
    console.log(this.userName);
    console.log(this.password);
    const body = {
      userName: this.userName,
      password: this.password,
    };

    this.userloginService.post(body).subscribe(
      response => {
          const resp:any = response;
          if(resp.code == '200'){
            console.log('Login success:', response);
            this.router.navigate(['/tasks'])
          }
          else{
            this.errorMessage=resp.message;
            console.log('Login Error',resp.message);

          }
      },
      error => {
        console.error('Login error:', error);
      }
    );
  }

  toggleSignup(event: Event) {
  event.preventDefault(); // prevent anchor reload
  this.showSignup = !this.showSignup;
  this.showLogin=!this.showLogin;
}
  onSignup() {
    console.log(this.userName);
    console.log(this.password);
    const body = {
      userName: this.userName,
      password: this.password,
    };

    this.userloginService.register(body).subscribe(
      response => {
          const resp:any = response;
          if(resp.code == '200'){
            console.log('Registration success:', response);
            this.showLogin=true;
            this.showSignup=false;
          }
          else{
            this.errorMessage=resp.message;
            console.log('Registration Error',resp.message);

          }
      },
      error => {
        console.error('Registration error:', error);
      }
    );
  }
}