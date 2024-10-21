import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahithya';
  
}
