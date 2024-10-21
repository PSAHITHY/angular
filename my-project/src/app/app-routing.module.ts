import { NgModule } from "@angular/core";
import {Routes, RouterModule } from "@angular/router";
import { AllUsersComponent } from "./all-users/all-users.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { AppComponent } from "./app.component";
import { PareComponentComponent } from "./pare-component/pare-component.component";
const routes: Routes =[
    {path:'',component:PareComponentComponent},
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