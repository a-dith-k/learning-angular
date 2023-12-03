import { CourseService } from './course.service';
import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
    courses!:string[];

    constructor(service:CourseService){
      
      this.courses=service.getCourses();
    }

}
