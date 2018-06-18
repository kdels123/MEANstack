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

  loadSectionsForCourse(courseId) {
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId).then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSectionsForCourse(this.courseId);
      });
  }

  updateSection(sectionName, seats) {
    // alert(this.sectionId);
    this.sectionService.updateSection(sectionName, seats, this.sectionId)
      .then(() => {
        this.loadSectionsForCourse(this.courseId);
      });
  }

  delete(section) {
    this.sectionService.deleteSection(section._id).then(() => {
      this.loadSectionsForCourse(this.courseId);
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
