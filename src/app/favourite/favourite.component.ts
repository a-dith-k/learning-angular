import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.css'
})
export class FavouriteComponent {


 @Input('is-favourite') isSelected: boolean=true;
 @Output('change')change=new EventEmitter();


  onClick() {
    this.isSelected=!this.isSelected;
    this.change.emit({newValue:this.isSelected});
  }
}

export interface FavouriteChangedEventArgs{
  newValue:boolean;
}
