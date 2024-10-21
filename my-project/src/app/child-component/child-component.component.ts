import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {


  show: boolean=false;
  twoWayDataBinding:String='';
  title:string='example for view child';

  @Input()
  details='';

  @Output() newItem= new EventEmitter<String>();

  addNewItem(value:String)
  {
    this.newItem.emit(value);
  }
  changeColor()
  {
    
    this.show=true;
    console.log('disabled');
    console.log(this.title);
  }
}
