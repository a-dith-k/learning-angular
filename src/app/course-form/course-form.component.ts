import { Component } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {

    categories
      =[
        {id:1,name:'Development'},
        {id:2,name:'Art'},
        {id:3,name:'Languages'}
    ]

    hasGuarantee: boolean =false;

    onFormSubmit(course:any) {
      console.table(course)
        alert('form submitted successfully')
    }
}
