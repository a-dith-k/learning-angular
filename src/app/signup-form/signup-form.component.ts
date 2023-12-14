import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, AbstractControl} from "@angular/forms";
import {UsernameValidators} from "../common/validators/username.validators";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {

  form=new FormGroup({
    account:new FormGroup({
      username:new FormControl('',
        [Validators.required,
          Validators.minLength(4),
          UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
      password:new FormControl('',Validators.required)
    }),
    courses:new FormArray([])
  });

  get username(){
     return  this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login() {
    let isValid=true;
      // authService.validate(this.form.value);

    if(!isValid){
      this.form.setErrors({
        invalidLogin:false,
        usernameInvalid:true,
      });
    }
  }

  addCourse(topic:HTMLInputElement) {
    console.log(topic.value)
    this.courses.push(new FormControl(topic.value));
    topic.value='';
  }

  get courses(){
    return this.form.get('courses') as FormArray;
  }

  removeTopic(topic: AbstractControl<any>) {
    let index=this.courses.controls.indexOf(topic);

    this.courses.removeAt(index)
  }
}
