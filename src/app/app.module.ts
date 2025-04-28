import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';
import { CourseComponent } from "./course/course.component";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    CourseComponent,
    CommonModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
