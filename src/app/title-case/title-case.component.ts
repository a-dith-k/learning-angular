import { Component } from '@angular/core';

@Component({
  selector: 'title-case',
  templateUrl: './title-case.component.html',
  styleUrl: './title-case.component.css'
})
export class TitleCaseComponent {

  title!:string;

  display(text: string) {

  }
}
