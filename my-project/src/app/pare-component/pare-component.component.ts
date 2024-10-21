import { Component, Input, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-pare-component',
  templateUrl: './pare-component.component.html',
  styleUrls: ['./pare-component.component.css']
})
export class PareComponentComponent {
  title='Sahithya';
  item:String='';
  example:String='';
  example1:String='';


   @ViewChild(ChildComponentComponent) child!:ChildComponentComponent;

   @ViewChild(ViewChildComponent) view!:ViewChildComponent;
   constructor()
   {
    console.log('first constructor is called');
   }
   ngOnChanges()
   {
    console.log('ngOnchanges lifecycle hook is called whenever there is change in value which is annotated with @input and before ngOnInit ')
   }
  ngOnInit()
  {
   
 console.log('ngOnInit lifecycle hook is called');
  }
  ngAfterViewInit()
  {
    this.example=this.view.viewChildExample;
    console.log(this.view);
  }
  addItem(value:String)
  {
    this.item= value;
    console.log(this.item);
  }
  changeColor()
  {
    this.child.changeColor();
    this.example1=this.child.title;
    
  }
}
