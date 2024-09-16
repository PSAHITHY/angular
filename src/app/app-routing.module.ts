import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AllUsersComponent } from "./all-users/all-users.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
const routes: Routes =[
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
    {path:'all',  component:AllUsersComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents =[LoginComponent, SignUpComponent,AllUsersComponent]