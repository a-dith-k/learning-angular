import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from '../services/author.service';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SummaryPipe } from '../pipes/summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from '../pipes/title-case.pipe';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';
import { LikeComponent } from './like/like.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { ProductComponent } from './product/product.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    PipesDemoComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCaseComponent,
    TitleCasePipe,
    BootstrapCardComponent,
    LikeComponent,
    NavTabComponent,
    ProductComponent,
    InputFormatDirective,
    ZippyComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService,
              AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
