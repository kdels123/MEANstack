import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user: User = new User();
  username;
  firstName;
  sections = [];

  update(username, firstName, lastName, email) {
    console.log(username, firstName, lastName, email);
    this.service.updateUser(username, firstName, lastName, email);
  }

  logout() {
    this.service.logout().then(() => this.router.navigate(['login']));
  }

  unenroll(enrollment) {
    // alert(enrollment._id);
    console.log(enrollment);
    this.sectionService.unenrollStudentInSection(enrollment)
      .then(() => {this.sectionService.findSectionsForStudent()
        .then(sections => this.sections = sections);
    });
    }

  ngOnInit() {
    this.service
      .profile()
      .then(user => this.username = user.username)
      .then(user => this.firstName = user.firstName);

    this.sectionService.findSectionsForStudent().then(sections => this.sections = sections);
  }

}
