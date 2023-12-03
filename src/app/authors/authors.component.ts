import { Component } from '@angular/core';
import { AuthorService } from '../../services/author.service';


@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {


    constructor(authorService:AuthorService){
        this.authors=authorService.getAuthors();
    }

    title="Authors  "
    authors;
    imageUrl='https://picsum.photos/100/100'
    fontBig=true;
    isRed=true;
    bg='blue';
    email='adith@gmail.com';

    isThumbnail(){
      return true;
    }

    onSave($event:Event){
      alert('Button Clicked');
      console.log($event);

    }

    inputData(input:string){
      console.log(input);

    }

    inputData2(){
      console.log(this.email)

    }
}
