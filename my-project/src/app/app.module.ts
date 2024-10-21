import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PareComponentComponent } from './pare-component/pare-component.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AllUsersComponent,
    ChildComponentComponent,
    ViewChildComponent,
    PareComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
