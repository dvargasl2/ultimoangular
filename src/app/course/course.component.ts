import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dataCourses } from './dataCourses';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CourseComponent implements OnInit {
  constructor(private courseService: CourseService) { }

  courses: Array<Course> = [];

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  ngOnInit() {
    this.getCourses();
  }
}