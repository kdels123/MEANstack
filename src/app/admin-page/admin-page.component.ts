import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private courseService: CourseServiceClient,
     private sectionService: SectionServiceClient,
    private userService: UserServiceClient,
    private router: Router
  ) { }

  courses: Course[] = [];
  courseId;
  sectionId;
  sections = [];
  sectionName = '';
  seats = '';
  courseTitle = '';

  loadSectionsForCourse(courseId, courseTitle) {
    this.courseId = courseId;
    this.courseTitle = courseTitle;
    this.sectionService.findSectionsForCourse(courseId).then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    if (sectionName === '') {
      sectionName = this.courseTitle + ' Section 1';
    }
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSectionsForCourse(this.courseId, this.courseTitle);
      });
  }

  updateSection(sectionName, seats) {
    // alert(this.sectionId);
    this.sectionService.updateSection(sectionName, seats, this.sectionId)
      .then(() => {
        this.loadSectionsForCourse(this.courseId, this.courseTitle);
      });
  }

  delete(section) {
    this.sectionService.deleteSection(section._id).then(() => {
      this.loadSectionsForCourse(this.courseId, this.courseTitle);
    });
  }

  renderSection(sectionName, seats, sectionId) {
    this.sectionName = sectionName;
    this.seats = seats;
    this.sectionId = sectionId;
  }

  logout() {
    this.userService.logout().then(() => this.router.navigate(['login']));
  }

  ngOnInit() {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }


}
