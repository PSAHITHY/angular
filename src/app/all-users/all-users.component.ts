import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users:any;
  constructor(private _loginService: LoginServiceService){}
  ngOnInit()
  {
    this.getUsers();
  }
   private getUsers(){
    this._loginService.getAllUsers().subscribe(
      data => {this.users=data,
        console.log(this.users);
      }
   
    
    );
     
  }

}
