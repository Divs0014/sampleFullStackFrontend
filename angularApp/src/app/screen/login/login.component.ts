import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
     loginForm=new FormGroup({
      username: new FormControl(''),
      password:new  FormControl('')
     })
     private router=inject(Router);
     private authService=inject(AuthService);
     onSubmit(){
      console.log(this.loginForm.value);
       this.authService.login('dummy-token');
      this.router.navigate(['home']);;
     }
}
