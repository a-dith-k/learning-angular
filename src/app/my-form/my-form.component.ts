import { Component } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  contactMethods
    =[
      {id:1,name:'Phone'},
      {id:2,name:'Email'}
    ]

  nativeLanguages
    =[
    {id:1,name:'Malayalam'},
    {id:2,name:'English'}
  ]

  showFormControl(firstName: NgModel) {
    console.log(firstName);
  }

  formOnSubmit(f: NgForm) {
    console.log("form submitted");
    console.log(f)
  }
}
