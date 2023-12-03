import {Component, Input} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {

  @Input('heading')heading:string='';

  isExpanded:boolean=false;

  toggle() {
    this.isExpanded=!this.isExpanded;
  }
}
