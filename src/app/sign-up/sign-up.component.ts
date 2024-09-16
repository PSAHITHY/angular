import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from '../password.validator';
import { SignUpServiceService } from '../sign-up-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
  //FormBuider simplifies code to create instances of FormControl and FormGroups
  // signUpForm=  new FormGroup(
  //   {
  //     name: new FormControl(''),
  //     email: new FormControl(''),
  //     mobile: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl('')

  //   }
  // );
  constructor(private fb:FormBuilder, private signUp:SignUpServiceService){}
  signUpForm= this.fb.group({
    name: ['',Validators.required],
    email:['',[Validators.required, Validators.pattern("^[a-z0-9.-]+@[a-z]+\.[a-z]{2,4}$")]],
    mobile:['',[Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
    password:['',[Validators.required,Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")]],
    confirmPassword:['',Validators.required]
  },{Validator:PasswordValidator})

 get password1(){
  return this.signUpForm.get('password');
 }
 get email1(){
    return this.signUpForm.get('email');
  }
  onSubmit()
  {
     this.signUp.register(this.signUpForm.value).subscribe(
      response => console.log("succes",response)
     );
  }


}
