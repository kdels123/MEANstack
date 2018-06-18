import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private courseService: CourseServiceClient,
     private sectionService: SectionServiceClient
  ) { }

  courses: Course[] = [];
  courseId;
  sections = [];
  sectionName = '';
  seats = '';

  loadSectionsForCourse(courseId) {
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId).then(sections => this.sections = sections);
  }

  createSection( sectionName, seats) {
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSectionsForCourse(this.courseId);
      });
  }

  delete(section) {
    this.sectionService.deleteSection(section._id).then(() => {
      this.loadSectionsForCourse(this.courseId);
    });
  }

  ngOnInit() {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }


}
