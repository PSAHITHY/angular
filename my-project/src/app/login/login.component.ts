import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login = new Login("","");
  user: any;
  constructor(private _loginService: LoginServiceService, private router:Router){}
 onSubmit()
 {
  // console.log(this.login);
  this._loginService.signIn(this.login).
  subscribe(
    data => this.user=data,
    error => console.log('Error',error));
    if(this.user !==null)
    {
      this.router.navigate(['/all'])
    }
    
    
 }
 
}
