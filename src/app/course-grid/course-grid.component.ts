import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) {
  }

  studentCourses = [];
  studentCourseTitle = [];
  courses: Course[] = [];
  sections = [];
  courseTitle = '';

  findCoursesInSections() {
    for (let i = 0; i < this.sections.length; i++) {
      if (!(this.studentCourses.includes(this.sections[i].section.courseId))) {
        this.studentCourses.push(this.sections[i].section.courseId);
      }
    }
    // for (let i = 0; i < this.studentCourses.length; i++) {
    //   const course = this.courseService.findCourseById(this.studentCourses[i]);
    //   console.log(course);
    //   // this.studentCourseTitle.push(courseTitle);
    // }
    return this.studentCourses;
  }

  ngOnInit() {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections)
      .then(() => {
        this.findCoursesInSections();
      });
  }
}
