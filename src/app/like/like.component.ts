import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
    @Input('is-active')isActive:boolean=false;
    @Input('like-count')likeCount:number=0;


  likeButtonClicked() {
    console.log(this.likeCount);
    this.likeCount+=(this.isActive) ? -1 : 1;
    this.isActive=!this.isActive;

  }
}
