import { Component } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css'
})
export class MyFormComponent {

  showFormControl(firstName: NgModel) {
    console.log(firstName);
  }

  formOnSubmit(f: NgForm) {
    console.log("form submitted");
    console.log(f)
  }
}
